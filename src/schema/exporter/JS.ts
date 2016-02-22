// This file is part of cxsd, copyright (c) 2016 BusFaster Ltd.
// Released under the MIT license, see LICENSE.

import {Cache} from 'cget'
import {Exporter} from './Exporter';
import {Namespace} from '../Namespace';
import {Member} from '../Member';
import {MemberRef} from '../MemberRef';
import {Type} from '../Type';

export type NumTbl = { [id: string]: number };

export class JS extends Exporter {
	writeImport(shortName: string, relativePath: string, absolutePath: string) {
		return(
			'var ' +
			shortName +
			' = require(' +
			"'" + relativePath + "'" +
			');'
		);
	}

	writeMember(member: Member, typeNumTbl: NumTbl) {
		var memberTypeList = member.typeList.map((memberType: Type) =>
			typeNumTbl[memberType.surrogateKey]
		);

		return(
			'\n\t[' +
			"'" + member.name + "', " +
			'[' + memberTypeList.join(', ') + ']' +
			']'
		);
	}

	writeMemberRef(ref: MemberRef, typeNumTbl: NumTbl, importNumTbl: NumTbl) {
		var member = ref.member;
		var name = ref.safeName;
		if(member.name != name) name += ':' + member.name;

		var flags = 0;
		if(ref.min < 1) flags |= MemberRef.optionalFlag;
		if(ref.max > 1) flags |= MemberRef.arrayFlag;
		if(member.name == '*') flags |= MemberRef.anyFlag;

		var memberTypeList = member.typeList.map((memberType: Type) =>
			typeNumTbl[memberType.surrogateKey]
		);

		return(
			'[' +
			"'" + name + "', " +
			flags + ', ' +
			'[' + memberTypeList.join(', ') + ']' +
			((member.namespace != this.namespace) ? ', ' + importNumTbl[member.namespace.id] : '') +
			']'
		);
	}

	writeType(type: Type, typeNumTbl: NumTbl, importNumTbl: NumTbl) {
		var childSpecList: string[] = [];
		var attributeSpecList: string[] = [];

		var parentNum = 0;
		var flags = 0;

		if(type.primitiveType) flags |= Type.primitiveFlag;
		if(type.isPlainPrimitive) flags |= Type.plainPrimitiveFlag;

		if(type.isList) {
			flags |= Type.listFlag | Type.primitiveFlag | Type.plainPrimitiveFlag;
			parentNum = typeNumTbl[type.childList[0].member.typeList[0].surrogateKey];
		} else {
			if(type.childList) {
				for(var member of type.childList) {
					childSpecList.push(this.writeMemberRef(member, typeNumTbl, importNumTbl));
				}
			}

			if(type.attributeList) {
				for(var member of type.attributeList) {
					attributeSpecList.push(this.writeMemberRef(member, typeNumTbl, importNumTbl));
				}
			}

			if(type.parent) parentNum = typeNumTbl[type.parent.surrogateKey];
		}

		return(
			'\n\t[' +
			flags + ', ' +
			parentNum + ', ' +
			'[' + childSpecList.join(', ') + '], ' +
			'[' + attributeSpecList.join(', ') + ']' +
			']'
		);
	}

	buildTypeList(namespace: Namespace) {
		var exportedTypeList: Type[] = [];
		var hiddenTypeList: Type[] = [];

		for(var type of namespace.typeList) {
			if(!type) continue;
			if(type.isExported) exportedTypeList.push(type);
			else hiddenTypeList.push(type);
		}

		exportedTypeList.sort((a: Type, b: Type) => a.safeName.localeCompare(b.safeName));
		hiddenTypeList.sort((a: Type, b: Type) => a.safeName.localeCompare(b.safeName));

		return({
			all: exportedTypeList.concat(hiddenTypeList),
			exported: exportedTypeList
		});
	}

	buildMemberList(namespace: Namespace) {
		var exportedMemberList: Member[] = [];
		var hiddenMemberList: Member[] = [];

		for(var member of namespace.memberList) {
			if(!member) continue;
			if(member.isExported) exportedMemberList.push(member);
			else hiddenMemberList.push(member);
		}

		exportedMemberList.sort((a: Member, b: Member) => a.name.localeCompare(b.name));
		// TODO: merge identical hidden members.
		hiddenMemberList.sort((a: Member, b: Member) => a.name.localeCompare(b.name));

		return({
			all: exportedMemberList.concat(hiddenMemberList),
			exported: exportedMemberList
		});
	}

	/** Output namespace contents to the given cache key. */

	writeContents(): string {
		var doc = this.doc;
		var namespace = doc.namespace;

		var typeNumTbl: NumTbl = {};
		var memberNumTbl: NumTbl = {};
		var typeNum = 1;
		var memberNum = 1;

		var importTbl = namespace.getUsedImportTbl();
		var importSpecList: string[] = [];
		var importNumTbl: NumTbl = {};
		var num = 0;

		for(var importName of Object.keys(importTbl)) {
			var otherNamespaceId = importTbl[importName].id;
			var content = namespace.importContentTbl[otherNamespaceId];
			var importTypeNameList: string[] = [];
			var importMemberNameList: string[] = [];

			for(var name of Object.keys(content.typeTbl || {}).sort()) {
				var type = content.typeTbl[name];

				importTypeNameList.push("'" + type.safeName + "'");
				typeNumTbl[type.surrogateKey] = typeNum++;
			}

			for(var name of Object.keys(content.memberTbl || {}).sort()) {
				var member = content.memberTbl[name];

				importMemberNameList.push("'" + member.name + "'");
				memberNumTbl[member.surrogateKey] = memberNum++;
			}

			importSpecList.push(
				'\n\t' + '[' + importName + ', ' +
				'[' + importTypeNameList.join(', ') + '], ' +
				'[' + importMemberNameList.join(', ') + ']' +
				']'
			);

			importNumTbl[otherNamespaceId] = num++;
		}

		var typeList = this.buildTypeList(namespace);
		var memberList = this.buildMemberList(namespace);

		for(var type of typeList.all) {
			typeNumTbl[type.surrogateKey] = typeNum++;
		}

		for(var member of memberList.all) {
			memberNumTbl[member.surrogateKey] = memberNum++;
		}

		var typeSpecList: string[] = [];

		typeSpecList.push(this.writeType(namespace.doc, typeNumTbl, importNumTbl));

		for(var type of typeList.all) {
			typeSpecList.push(this.writeType(type, typeNumTbl, importNumTbl));
		}

		var memberSpecList: string[] = [];

		for(var member of memberList.all) {
			/* if(member.name != '*') */
			memberSpecList.push(this.writeMember(member, typeNumTbl));
		}

		var exportSpecList: string[] = [];

		for(var type of typeList.exported) {
			name = type.safeName;
			if(type.name && type.name != name) name += ':' + type.name;

			exportSpecList.push('\n\t' + "'" + name + "'");
		}

		return([].concat(
			[
				'var cxml = require("cxml");',
			],
			this.writeHeader(),
			[
				'',
				'cxml.register(' +
				"'" + namespace.name+ "', " +
				'exports, ' +
				'[' + importSpecList.join(',') + '\n], ' +
				'[' + exportSpecList.join(',') + '\n], ' +
				'[' + typeSpecList.join(',') + '\n], ' +
				'[' + memberSpecList.join(',') + '\n]' +
				');'
			]
		).join('\n'));
	}

	getOutName(name: string) {
		return(name + '.js');
	}

	construct = JS;
}
