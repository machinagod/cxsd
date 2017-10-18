/// <reference types="node" />
/// <reference types="bluebird" />
import * as fs from 'fs';
import * as Promise from 'bluebird';
/** Asynchronous versions of fs methods, wrapped by Bluebird. */
export declare var fsa: {
    stat: (arg1: fs.PathLike) => Promise<fs.Stats>;
    open: (arg1: fs.PathLike, arg2: string | number) => Promise<number>;
    close: (arg1: number) => Promise<{}>;
    rename: (arg1: fs.PathLike, arg2: fs.PathLike) => Promise<{}>;
    mkdir: (arg1: fs.PathLike) => Promise<{}>;
    read: (arg1: number, arg2: any, arg3: number, arg4: number, arg5: number) => Promise<number>;
    readFile: (name: string, options: {
        encoding: string;
        flag?: string;
    }) => Promise<string>;
    writeFile: (name: string, content: string, options: {
        encoding: string;
        flag?: string;
    }) => Promise<{}>;
};
/** Promise while loop. */
export declare function repeat<T>(fn: (again: () => {}) => Promise<T>): Promise<T>;
/** Copy all members of src object to dst object. */
export declare function extend(dst: {
    [key: string]: any;
}, src: {
    [key: string]: any;
}): {
    [key: string]: any;
};
/** Make shallow clone of object. */
export declare function clone(src: Object): {
    [key: string]: any;
};
/** Create a new directory and its parent directories.
 * If a path component to create conflicts with an existing file,
 * rename to file to <component>/<indexName>. */
export declare function mkdirp(pathName: string, indexName: string): Promise<any>;
/** Create a string of random letters and numbers. */
export declare function makeTempSuffix(length: number): string;
export declare function sanitizePath(path: string): string;
export declare function isDir(cachePath: string): Promise<boolean>;
export declare function sanitizeUrl(urlRemote: string): string;
