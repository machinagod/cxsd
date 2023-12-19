import * as Primitive from './xml-primitives';

// Source files:
// file:///workspaces/cxsd/local_test/test.xsd


interface BaseType {
	_exists: boolean;
	_namespace: string;
}
type AccountIDType = string;
type _AccountIDType = Primitive._string;

interface _AddressStructure extends BaseType {
	AddressDetail: string;
	BuildingNumber?: string;
	City: string;
	Country: string;
	PostalCode: string;
	Region?: string;
	StreetName?: string;
}
export interface AddressStructure extends _AddressStructure { constructor: { new(): AddressStructure }; }
export var AddressStructure: { new(): AddressStructure };

interface _AuditFileType extends BaseType {
	GeneralLedgerEntries?: GeneralLedgerEntriesType;
	Header: HeaderType;
	MasterFiles: AuditFileTypeMasterFilesType;
	SourceDocuments?: SourceDocumentsType;
}
interface AuditFileType extends _AuditFileType { constructor: { new(): AuditFileType }; }

interface _AuditFileTypeMasterFilesType extends BaseType {
	Customer?: CustomerType;
	GeneralLedgerAccounts?: GeneralLedgerAccountsType;
	Product?: ProductType;
	Supplier?: SupplierType;
	TaxTable?: TaxTableType;
}
interface AuditFileTypeMasterFilesType extends _AuditFileTypeMasterFilesType { constructor: { new(): AuditFileTypeMasterFilesType }; }

type AuditFileVersionType = string;
type _AuditFileVersionType = Primitive._string;

type CashVATSchemeIndicatorType = number;
type _CashVATSchemeIndicatorType = Primitive._number;

type CompanyIDType = string;
type _CompanyIDType = Primitive._string;

type CountryType = string;
type _CountryType = Primitive._string;

interface _Currency extends BaseType {
	CurrencyAmount: number;
	CurrencyCode: string;
	ExchangeRate: number;
}
export interface Currency extends _Currency { constructor: { new(): Currency }; }
export var Currency: { new(): Currency };

type CurrencyCodeType = string;
type _CurrencyCodeType = Primitive._string;

export type CurrencyPT = "EUR";
interface _CurrencyPT extends Primitive._string { content: CurrencyPT; }

interface _CustomerAddressStructure extends BaseType {
	AddressDetail: string;
	BuildingNumber?: string;
	City: string;
	Country: string;
	PostalCode: string;
	Region?: string;
	StreetName?: string;
}
export interface CustomerAddressStructure extends _CustomerAddressStructure { constructor: { new(): CustomerAddressStructure }; }
export var CustomerAddressStructure: { new(): CustomerAddressStructure };

export type CustomerCountry = string;
type _CustomerCountry = Primitive._string;

interface _CustomerType extends BaseType {
	AccountID: string;
	BillingAddress: CustomerAddressStructure;
	CompanyName: string;
	Contact?: string;
	CustomerID: string;
	CustomerTaxID: string;
	Email?: string;
	Fax?: string;
	SelfBillingIndicator: number;
	ShipToAddress?: CustomerAddressStructure;
	Telephone?: string;
	Website?: string;
}
interface CustomerType extends _CustomerType { constructor: { new(): CustomerType }; }

interface _CustomsDetails extends BaseType {
	CNCode?: string;
	UNNumber?: string;
}
export interface CustomsDetails extends _CustomsDetails { constructor: { new(): CustomsDetails }; }
export var CustomsDetails: { new(): CustomsDetails };

interface _CustomsInformation extends BaseType {
	ARCNo?: string;
	IECAmount?: number;
}
export interface CustomsInformation extends _CustomsInformation { constructor: { new(): CustomsInformation }; }
export var CustomsInformation: { new(): CustomsInformation };

type DocumentNumberType = string;
type _DocumentNumberType = Primitive._string;

type EACCodeType = string;
type _EACCodeType = Primitive._string;

type FiscalYearType = number;
type _FiscalYearType = Primitive._number;

interface _GeneralLedgerAccountsType extends BaseType {
	Account: GeneralLedgerAccountsTypeAccountType;
	TaxonomyReference: TaxonomyReferenceType;
}
interface GeneralLedgerAccountsType extends _GeneralLedgerAccountsType { constructor: { new(): GeneralLedgerAccountsType }; }

interface _GeneralLedgerAccountsTypeAccountType extends BaseType {
	AccountDescription: string;
	AccountID: string;
	ClosingCreditBalance: number;
	ClosingDebitBalance: number;
	GroupingCategory: GroupingCategoryType;
	GroupingCode?: string;
	OpeningCreditBalance: number;
	OpeningDebitBalance: number;
	TaxonomyCode?: number;
}
interface GeneralLedgerAccountsTypeAccountType extends _GeneralLedgerAccountsTypeAccountType { constructor: { new(): GeneralLedgerAccountsTypeAccountType }; }

interface _GeneralLedgerEntriesType extends BaseType {
	Journal?: GeneralLedgerEntriesTypeJournalType;
	NumberOfEntries: number;
	TotalCredit: number;
	TotalDebit: number;
}
interface GeneralLedgerEntriesType extends _GeneralLedgerEntriesType { constructor: { new(): GeneralLedgerEntriesType }; }

interface _GeneralLedgerEntriesTypeJournalType extends BaseType {
	Description: string;
	JournalID: string;
	Transaction?: GeneralLedgerEntriesTypeJournalTypeTransactionType;
}
interface GeneralLedgerEntriesTypeJournalType extends _GeneralLedgerEntriesTypeJournalType { constructor: { new(): GeneralLedgerEntriesTypeJournalType }; }

interface _GeneralLedgerEntriesTypeJournalTypeTransactionType extends BaseType {
	CustomerID?: string;
	Description: string;
	DocArchivalNumber: string;
	GLPostingDate: Date;
	Lines: GeneralLedgerEntriesTypeJournalTypeTransactionTypeLinesType;
	Period: number;
	SourceID: string;
	SupplierID?: string;
	TransactionDate: Date;
	TransactionID: string;
	TransactionType: TransactionTypeType;
}
interface GeneralLedgerEntriesTypeJournalTypeTransactionType extends _GeneralLedgerEntriesTypeJournalTypeTransactionType { constructor: { new(): GeneralLedgerEntriesTypeJournalTypeTransactionType }; }

interface _GeneralLedgerEntriesTypeJournalTypeTransactionTypeLinesType extends BaseType {}
interface GeneralLedgerEntriesTypeJournalTypeTransactionTypeLinesType extends _GeneralLedgerEntriesTypeJournalTypeTransactionTypeLinesType { constructor: { new(): GeneralLedgerEntriesTypeJournalTypeTransactionTypeLinesType }; }

type GroupingCategoryType = ("GR" | "GA" | "GM" | "AR" | "AA" | "AM");
interface _GroupingCategoryType extends Primitive._string { content: GroupingCategoryType; }

interface _HeaderType extends BaseType {
	AuditFileVersion: string;
	BusinessName?: string;
	CompanyAddress: AddressStructure;
	CompanyID: string;
	CompanyName: string;
	CurrencyCode: CurrencyPT;
	DateCreated: Date;
	Email?: string;
	EndDate: Date;
	Fax?: string;
	FiscalYear: number;
	HeaderComment?: string;
	ProductCompanyTaxID: string;
	ProductID: string;
	ProductVersion: string;
	SoftwareCertificateNumber: number;
	StartDate: Date;
	TaxAccountingBasis: TaxAccountingBasisType;
	TaxEntity: string;
	TaxRegistrationNumber: number;
	Telephone?: string;
	Website?: string;
}
interface HeaderType extends _HeaderType { constructor: { new(): HeaderType }; }

type InvoiceNoType = string;
type _InvoiceNoType = Primitive._string;

type InvoiceStatusType = ("N" | "S" | "A" | "R" | "F");
interface _InvoiceStatusType extends Primitive._string { content: InvoiceStatusType; }

type InvoiceTypeType = ("FT" | "FS" | "FR" | "ND" | "NC" | "VD" | "TV" | "TD" | "AA" | "DA" | "RP" | "RE" | "CS" | "LD" | "RA");
interface _InvoiceTypeType extends Primitive._string { content: InvoiceTypeType; }

type MovementStatusType = ("N" | "T" | "A" | "F" | "R");
interface _MovementStatusType extends Primitive._string { content: MovementStatusType; }

interface _MovementTax extends BaseType {
	TaxCode: string;
	TaxCountryRegion: string;
	TaxPercentage: number;
	TaxType: SAFTPTMovementTaxType;
}
export interface MovementTax extends _MovementTax { constructor: { new(): MovementTax }; }
export var MovementTax: { new(): MovementTax };

type MovementTypeType = ("GR" | "GT" | "GA" | "GC" | "GD");
interface _MovementTypeType extends Primitive._string { content: MovementTypeType; }

interface _OrderReferences extends BaseType {
	OrderDate?: Date;
	OriginatingON?: string;
}
export interface OrderReferences extends _OrderReferences { constructor: { new(): OrderReferences }; }
export var OrderReferences: { new(): OrderReferences };

type PaymentMechanismType = ("CC" | "CD" | "CH" | "CI" | "CO" | "CS" | "DE" | "LC" | "MB" | "NU" | "OU" | "PR" | "TB" | "TR");
interface _PaymentMechanismType extends Primitive._string { content: PaymentMechanismType; }

interface _PaymentMethod extends BaseType {
	PaymentAmount: number;
	PaymentDate: Date;
	PaymentMechanism?: PaymentMechanismType;
}
export interface PaymentMethod extends _PaymentMethod { constructor: { new(): PaymentMethod }; }
export var PaymentMethod: { new(): PaymentMethod };

type PaymentRefNoType = string;
type _PaymentRefNoType = Primitive._string;

type PaymentStatusType = ("N" | "A");
interface _PaymentStatusType extends Primitive._string { content: PaymentStatusType; }

interface _PaymentTax extends BaseType {
	TaxAmount: number;
	TaxCode: string;
	TaxCountryRegion: string;
	TaxPercentage: number;
	TaxType: TaxTypeType;
}
export interface PaymentTax extends _PaymentTax { constructor: { new(): PaymentTax }; }
export var PaymentTax: { new(): PaymentTax };

export type PaymentTaxCode = string;
type _PaymentTaxCode = Primitive._string;

type PeriodType = number;
type _PeriodType = Primitive._number;

interface _ProductSerialNumber extends BaseType {
	SerialNumber: string;
}
export interface ProductSerialNumber extends _ProductSerialNumber { constructor: { new(): ProductSerialNumber }; }
export var ProductSerialNumber: { new(): ProductSerialNumber };

interface _ProductType extends BaseType {
	CustomsDetails?: CustomsDetails;
	ProductCode: string;
	ProductDescription: string;
	ProductGroup?: string;
	ProductNumberCode: string;
	ProductType: ProductTypeType;
}
interface ProductType extends _ProductType { constructor: { new(): ProductType }; }

type ProductTypeType = ("P" | "S" | "O" | "E" | "I");
interface _ProductTypeType extends Primitive._string { content: ProductTypeType; }

interface _References extends BaseType {
	Reason?: string;
	Reference?: string;
}
export interface References extends _References { constructor: { new(): References }; }
export var References: { new(): References };

export type SAFdateTimeType = Date;
type _SAFdateTimeType = Primitive._Date;

export type SAFdateType = Date;
type _SAFdateType = Primitive._Date;

export type SAFdecimalType = number;
type _SAFdecimalType = Primitive._number;

export type SAFmonetaryType = number;
type _SAFmonetaryType = Primitive._number;

export type SAFPTAccountingPeriod = number;
type _SAFPTAccountingPeriod = Primitive._number;

export type SAFPTCNCode = string;
type _SAFPTCNCode = Primitive._string;

export type SAFPTDateSpan = Date;
type _SAFPTDateSpan = Primitive._Date;

export type SAFPTGLAccountID = string;
type _SAFPTGLAccountID = Primitive._string;

export type SAFPTHashControl = string;
type _SAFPTHashControl = Primitive._string;

export type SAFPTJournalID = string;
type _SAFPTJournalID = Primitive._string;

export type SAFPTPortugueseTaxExemptionCode = string;
type _SAFPTPortugueseTaxExemptionCode = Primitive._string;

export type SAFPTPortugueseTaxExemptionReason = string;
type _SAFPTPortugueseTaxExemptionReason = Primitive._string;

export type SAFPTPortugueseVatNumber = number;
type _SAFPTPortugueseVatNumber = Primitive._number;

export type SAFPTProductDescription = string;
type _SAFPTProductDescription = Primitive._string;

export type SAFPTProductID = string;
type _SAFPTProductID = Primitive._string;

export type SAFPTTaxonomyCode = number;
type _SAFPTTaxonomyCode = Primitive._number;

export type SAFPTtextTypeMandatoryMax100Car = string;
type _SAFPTtextTypeMandatoryMax100Car = Primitive._string;

export type SAFPTtextTypeMandatoryMax10Car = string;
type _SAFPTtextTypeMandatoryMax10Car = Primitive._string;

export type SAFPTtextTypeMandatoryMax172Car = string;
type _SAFPTtextTypeMandatoryMax172Car = Primitive._string;

export type SAFPTtextTypeMandatoryMax200Car = string;
type _SAFPTtextTypeMandatoryMax200Car = Primitive._string;

export type SAFPTtextTypeMandatoryMax20Car = string;
type _SAFPTtextTypeMandatoryMax20Car = Primitive._string;

export type SAFPTtextTypeMandatoryMax210Car = string;
type _SAFPTtextTypeMandatoryMax210Car = Primitive._string;

export type SAFPTtextTypeMandatoryMax21Car = string;
type _SAFPTtextTypeMandatoryMax21Car = Primitive._string;

export type SAFPTtextTypeMandatoryMax254Car = string;
type _SAFPTtextTypeMandatoryMax254Car = Primitive._string;

export type SAFPTtextTypeMandatoryMax255Car = string;
type _SAFPTtextTypeMandatoryMax255Car = Primitive._string;

export type SAFPTtextTypeMandatoryMax30Car = string;
type _SAFPTtextTypeMandatoryMax30Car = Primitive._string;

export type SAFPTtextTypeMandatoryMax35Car = string;
type _SAFPTtextTypeMandatoryMax35Car = Primitive._string;

export type SAFPTtextTypeMandatoryMax50Car = string;
type _SAFPTtextTypeMandatoryMax50Car = Primitive._string;

export type SAFPTtextTypeMandatoryMax60Car = string;
type _SAFPTtextTypeMandatoryMax60Car = Primitive._string;

export type SAFPTtextTypeMandatoryMax70Car = string;
type _SAFPTtextTypeMandatoryMax70Car = Primitive._string;

export type SAFPTtextTypeMandatoryMax90Car = string;
type _SAFPTtextTypeMandatoryMax90Car = Primitive._string;

export type SAFPTTransactionID = string;
type _SAFPTTransactionID = Primitive._string;

export type SAFPTUNNumber = string;
type _SAFPTUNNumber = Primitive._string;

export type SAFTPTDocArchivalNumber = string;
type _SAFTPTDocArchivalNumber = Primitive._string;

export type SAFTPTMovementTaxCode = string;
type _SAFTPTMovementTaxCode = Primitive._string;

export type SAFTPTMovementTaxType = ("IVA" | "NS");
interface _SAFTPTMovementTaxType extends Primitive._string { content: SAFTPTMovementTaxType; }

export type SAFTPTPaymentType = ("RC" | "RG");
interface _SAFTPTPaymentType extends Primitive._string { content: SAFTPTPaymentType; }

export type SAFTPTSourceBilling = ("P" | "I" | "M");
interface _SAFTPTSourceBilling extends Primitive._string { content: SAFTPTSourceBilling; }

export type SAFTPTSourcePayment = ("P" | "I" | "M");
interface _SAFTPTSourcePayment extends Primitive._string { content: SAFTPTSourcePayment; }

type SelfBillingIndicatorType = number;
type _SelfBillingIndicatorType = Primitive._number;

interface _Settlement extends BaseType {
	PaymentTerms?: string;
	SettlementAmount?: number;
	SettlementDate?: Date;
	SettlementDiscount?: string;
}
export interface Settlement extends _Settlement { constructor: { new(): Settlement }; }
export var Settlement: { new(): Settlement };

interface _ShippingPointStructure extends BaseType {
	Address?: CustomerAddressStructure;
	DeliveryDate?: Date;
	DeliveryID?: string;
	LocationID?: string;
	WarehouseID?: string;
}
export interface ShippingPointStructure extends _ShippingPointStructure { constructor: { new(): ShippingPointStructure }; }
export var ShippingPointStructure: { new(): ShippingPointStructure };

interface _SourceDocumentsType extends BaseType {
	MovementOfGoods?: SourceDocumentsTypeMovementOfGoodsType;
	Payments?: SourceDocumentsTypePaymentsType;
	SalesInvoices?: SourceDocumentsTypeSalesInvoicesType;
	WorkingDocuments?: SourceDocumentsTypeWorkingDocumentsType;
}
interface SourceDocumentsType extends _SourceDocumentsType { constructor: { new(): SourceDocumentsType }; }

interface _SourceDocumentsTypeMovementOfGoodsType extends BaseType {
	NumberOfMovementLines: number;
	StockMovement?: SourceDocumentsTypeMovementOfGoodsTypeStockMovementType;
	TotalQuantityIssued: number;
}
interface SourceDocumentsTypeMovementOfGoodsType extends _SourceDocumentsTypeMovementOfGoodsType { constructor: { new(): SourceDocumentsTypeMovementOfGoodsType }; }

interface _SourceDocumentsTypeMovementOfGoodsTypeStockMovementType extends BaseType {
	ATCUD: string;
	ATDocCodeID?: string;
	CustomerID: string;
	DocumentNumber: string;
	DocumentStatus: SourceDocumentsTypeMovementOfGoodsTypeStockMovementTypeDocumentStatusType;
	DocumentTotals: SourceDocumentsTypeMovementOfGoodsTypeStockMovementTypeDocumentTotalsType;
	EACCode?: string;
	Hash: string;
	HashControl: string;
	Line: SourceDocumentsTypeMovementOfGoodsTypeStockMovementTypeLineType;
	MovementComments?: string;
	MovementDate: Date;
	MovementEndTime?: Date;
	MovementStartTime: Date;
	MovementType: MovementTypeType;
	Period?: number;
	ShipFrom?: ShippingPointStructure;
	ShipTo?: ShippingPointStructure;
	SourceID: string;
	SupplierID: string;
	SystemEntryDate: Date;
	TransactionID?: string;
}
interface SourceDocumentsTypeMovementOfGoodsTypeStockMovementType extends _SourceDocumentsTypeMovementOfGoodsTypeStockMovementType { constructor: { new(): SourceDocumentsTypeMovementOfGoodsTypeStockMovementType }; }

interface _SourceDocumentsTypeMovementOfGoodsTypeStockMovementTypeDocumentStatusType extends BaseType {
	MovementStatus: MovementStatusType;
	MovementStatusDate: Date;
	Reason?: string;
	SourceBilling: SAFTPTSourceBilling;
	SourceID: string;
}
interface SourceDocumentsTypeMovementOfGoodsTypeStockMovementTypeDocumentStatusType extends _SourceDocumentsTypeMovementOfGoodsTypeStockMovementTypeDocumentStatusType { constructor: { new(): SourceDocumentsTypeMovementOfGoodsTypeStockMovementTypeDocumentStatusType }; }

interface _SourceDocumentsTypeMovementOfGoodsTypeStockMovementTypeDocumentTotalsType extends BaseType {
	Currency?: Currency;
	GrossTotal: number;
	NetTotal: number;
	TaxPayable: number;
}
interface SourceDocumentsTypeMovementOfGoodsTypeStockMovementTypeDocumentTotalsType extends _SourceDocumentsTypeMovementOfGoodsTypeStockMovementTypeDocumentTotalsType { constructor: { new(): SourceDocumentsTypeMovementOfGoodsTypeStockMovementTypeDocumentTotalsType }; }

interface _SourceDocumentsTypeMovementOfGoodsTypeStockMovementTypeLineType extends BaseType {
	CreditAmount: number;
	CustomsInformation?: CustomsInformation;
	DebitAmount: number;
	Description: string;
	LineNumber: number;
	OrderReferences?: OrderReferences;
	ProductCode: string;
	ProductDescription: string;
	ProductSerialNumber?: ProductSerialNumber;
	Quantity: number;
	SettlementAmount?: number;
	Tax?: MovementTax;
	TaxExemptionCode?: string;
	TaxExemptionReason?: string;
	UnitOfMeasure: string;
	UnitPrice: number;
}
interface SourceDocumentsTypeMovementOfGoodsTypeStockMovementTypeLineType extends _SourceDocumentsTypeMovementOfGoodsTypeStockMovementTypeLineType { constructor: { new(): SourceDocumentsTypeMovementOfGoodsTypeStockMovementTypeLineType }; }

interface _SourceDocumentsTypePaymentsType extends BaseType {
	NumberOfEntries: number;
	Payment?: SourceDocumentsTypePaymentsTypePaymentType;
	TotalCredit: number;
	TotalDebit: number;
}
interface SourceDocumentsTypePaymentsType extends _SourceDocumentsTypePaymentsType { constructor: { new(): SourceDocumentsTypePaymentsType }; }

interface _SourceDocumentsTypePaymentsTypePaymentType extends BaseType {
	ATCUD: string;
	CustomerID: string;
	Description?: string;
	DocumentStatus: SourceDocumentsTypePaymentsTypePaymentTypeDocumentStatusType;
	DocumentTotals: SourceDocumentsTypePaymentsTypePaymentTypeDocumentTotalsType;
	Line: SourceDocumentsTypePaymentsTypePaymentTypeLineType;
	PaymentMethod?: PaymentMethod;
	PaymentRefNo: string;
	PaymentType: SAFTPTPaymentType;
	Period?: number;
	SourceID: string;
	SystemEntryDate: Date;
	SystemID?: string;
	TransactionDate: Date;
	TransactionID?: string;
	WithholdingTax?: WithholdingTax;
}
interface SourceDocumentsTypePaymentsTypePaymentType extends _SourceDocumentsTypePaymentsTypePaymentType { constructor: { new(): SourceDocumentsTypePaymentsTypePaymentType }; }

interface _SourceDocumentsTypePaymentsTypePaymentTypeDocumentStatusType extends BaseType {
	PaymentStatus: PaymentStatusType;
	PaymentStatusDate: Date;
	Reason?: string;
	SourceID: string;
	SourcePayment: SAFTPTSourcePayment;
}
interface SourceDocumentsTypePaymentsTypePaymentTypeDocumentStatusType extends _SourceDocumentsTypePaymentsTypePaymentTypeDocumentStatusType { constructor: { new(): SourceDocumentsTypePaymentsTypePaymentTypeDocumentStatusType }; }

interface _SourceDocumentsTypePaymentsTypePaymentTypeDocumentTotalsType extends BaseType {
	Currency?: Currency;
	GrossTotal: number;
	NetTotal: number;
	Settlement?: SourceDocumentsTypePaymentsTypePaymentTypeDocumentTotalsTypeSettlementType;
	TaxPayable: number;
}
interface SourceDocumentsTypePaymentsTypePaymentTypeDocumentTotalsType extends _SourceDocumentsTypePaymentsTypePaymentTypeDocumentTotalsType { constructor: { new(): SourceDocumentsTypePaymentsTypePaymentTypeDocumentTotalsType }; }

interface _SourceDocumentsTypePaymentsTypePaymentTypeDocumentTotalsTypeSettlementType extends BaseType {
	SettlementAmount: number;
}
interface SourceDocumentsTypePaymentsTypePaymentTypeDocumentTotalsTypeSettlementType extends _SourceDocumentsTypePaymentsTypePaymentTypeDocumentTotalsTypeSettlementType { constructor: { new(): SourceDocumentsTypePaymentsTypePaymentTypeDocumentTotalsTypeSettlementType }; }

interface _SourceDocumentsTypePaymentsTypePaymentTypeLineType extends BaseType {
	CreditAmount: number;
	DebitAmount: number;
	LineNumber: number;
	SettlementAmount?: number;
	SourceDocumentID: SourceDocumentsTypePaymentsTypePaymentTypeLineTypeSourceDocumentIDType;
	Tax?: PaymentTax;
	TaxExemptionCode?: string;
	TaxExemptionReason?: string;
}
interface SourceDocumentsTypePaymentsTypePaymentTypeLineType extends _SourceDocumentsTypePaymentsTypePaymentTypeLineType { constructor: { new(): SourceDocumentsTypePaymentsTypePaymentTypeLineType }; }

interface _SourceDocumentsTypePaymentsTypePaymentTypeLineTypeSourceDocumentIDType extends BaseType {
	Description?: string;
	InvoiceDate: Date;
	OriginatingON: string;
}
interface SourceDocumentsTypePaymentsTypePaymentTypeLineTypeSourceDocumentIDType extends _SourceDocumentsTypePaymentsTypePaymentTypeLineTypeSourceDocumentIDType { constructor: { new(): SourceDocumentsTypePaymentsTypePaymentTypeLineTypeSourceDocumentIDType }; }

interface _SourceDocumentsTypeSalesInvoicesType extends BaseType {
	Invoice?: SourceDocumentsTypeSalesInvoicesTypeInvoiceType;
	NumberOfEntries: number;
	TotalCredit: number;
	TotalDebit: number;
}
interface SourceDocumentsTypeSalesInvoicesType extends _SourceDocumentsTypeSalesInvoicesType { constructor: { new(): SourceDocumentsTypeSalesInvoicesType }; }

interface _SourceDocumentsTypeSalesInvoicesTypeInvoiceType extends BaseType {
	ATCUD: string;
	CustomerID: string;
	DocumentStatus: SourceDocumentsTypeSalesInvoicesTypeInvoiceTypeDocumentStatusType;
	DocumentTotals: SourceDocumentsTypeSalesInvoicesTypeInvoiceTypeDocumentTotalsType;
	EACCode?: string;
	Hash: string;
	HashControl: string;
	InvoiceDate: Date;
	InvoiceNo: string;
	InvoiceType: InvoiceTypeType;
	Line: SourceDocumentsTypeSalesInvoicesTypeInvoiceTypeLineType;
	MovementEndTime?: Date;
	MovementStartTime?: Date;
	Period?: number;
	ShipFrom?: ShippingPointStructure;
	ShipTo?: ShippingPointStructure;
	SourceID: string;
	SpecialRegimes: SpecialRegimes;
	SystemEntryDate: Date;
	TransactionID?: string;
	WithholdingTax?: WithholdingTax;
}
interface SourceDocumentsTypeSalesInvoicesTypeInvoiceType extends _SourceDocumentsTypeSalesInvoicesTypeInvoiceType { constructor: { new(): SourceDocumentsTypeSalesInvoicesTypeInvoiceType }; }

interface _SourceDocumentsTypeSalesInvoicesTypeInvoiceTypeDocumentStatusType extends BaseType {
	InvoiceStatus: InvoiceStatusType;
	InvoiceStatusDate: Date;
	Reason?: string;
	SourceBilling: SAFTPTSourceBilling;
	SourceID: string;
}
interface SourceDocumentsTypeSalesInvoicesTypeInvoiceTypeDocumentStatusType extends _SourceDocumentsTypeSalesInvoicesTypeInvoiceTypeDocumentStatusType { constructor: { new(): SourceDocumentsTypeSalesInvoicesTypeInvoiceTypeDocumentStatusType }; }

interface _SourceDocumentsTypeSalesInvoicesTypeInvoiceTypeDocumentTotalsType extends BaseType {
	Currency?: Currency;
	GrossTotal: number;
	NetTotal: number;
	Payment?: PaymentMethod;
	Settlement?: Settlement;
	TaxPayable: number;
}
interface SourceDocumentsTypeSalesInvoicesTypeInvoiceTypeDocumentTotalsType extends _SourceDocumentsTypeSalesInvoicesTypeInvoiceTypeDocumentTotalsType { constructor: { new(): SourceDocumentsTypeSalesInvoicesTypeInvoiceTypeDocumentTotalsType }; }

interface _SourceDocumentsTypeSalesInvoicesTypeInvoiceTypeLineType extends BaseType {
	CreditAmount: number;
	CustomsInformation?: CustomsInformation;
	DebitAmount: number;
	Description: string;
	LineNumber: number;
	OrderReferences?: OrderReferences;
	ProductCode: string;
	ProductDescription: string;
	ProductSerialNumber?: ProductSerialNumber;
	Quantity: number;
	References?: References;
	SettlementAmount?: number;
	Tax: Tax;
	TaxBase?: number;
	TaxExemptionCode?: string;
	TaxExemptionReason?: string;
	TaxPointDate: Date;
	UnitOfMeasure: string;
	UnitPrice: number;
}
interface SourceDocumentsTypeSalesInvoicesTypeInvoiceTypeLineType extends _SourceDocumentsTypeSalesInvoicesTypeInvoiceTypeLineType { constructor: { new(): SourceDocumentsTypeSalesInvoicesTypeInvoiceTypeLineType }; }

interface _SourceDocumentsTypeWorkingDocumentsType extends BaseType {
	NumberOfEntries: number;
	TotalCredit: number;
	TotalDebit: number;
	WorkDocument?: SourceDocumentsTypeWorkingDocumentsTypeWorkDocumentType;
}
interface SourceDocumentsTypeWorkingDocumentsType extends _SourceDocumentsTypeWorkingDocumentsType { constructor: { new(): SourceDocumentsTypeWorkingDocumentsType }; }

interface _SourceDocumentsTypeWorkingDocumentsTypeWorkDocumentType extends BaseType {
	ATCUD: string;
	CustomerID: string;
	DocumentNumber: string;
	DocumentStatus: SourceDocumentsTypeWorkingDocumentsTypeWorkDocumentTypeDocumentStatusType;
	DocumentTotals: SourceDocumentsTypeWorkingDocumentsTypeWorkDocumentTypeDocumentTotalsType;
	EACCode?: string;
	Hash: string;
	HashControl: string;
	Line: SourceDocumentsTypeWorkingDocumentsTypeWorkDocumentTypeLineType;
	Period?: number;
	SourceID: string;
	SystemEntryDate: Date;
	TransactionID?: string;
	WorkDate: Date;
	WorkType: WorkTypeType;
}
interface SourceDocumentsTypeWorkingDocumentsTypeWorkDocumentType extends _SourceDocumentsTypeWorkingDocumentsTypeWorkDocumentType { constructor: { new(): SourceDocumentsTypeWorkingDocumentsTypeWorkDocumentType }; }

interface _SourceDocumentsTypeWorkingDocumentsTypeWorkDocumentTypeDocumentStatusType extends BaseType {
	Reason?: string;
	SourceBilling: SAFTPTSourceBilling;
	SourceID: string;
	WorkStatus: WorkStatusType;
	WorkStatusDate: Date;
}
interface SourceDocumentsTypeWorkingDocumentsTypeWorkDocumentTypeDocumentStatusType extends _SourceDocumentsTypeWorkingDocumentsTypeWorkDocumentTypeDocumentStatusType { constructor: { new(): SourceDocumentsTypeWorkingDocumentsTypeWorkDocumentTypeDocumentStatusType }; }

interface _SourceDocumentsTypeWorkingDocumentsTypeWorkDocumentTypeDocumentTotalsType extends BaseType {
	Currency?: Currency;
	GrossTotal: number;
	NetTotal: number;
	TaxPayable: number;
}
interface SourceDocumentsTypeWorkingDocumentsTypeWorkDocumentTypeDocumentTotalsType extends _SourceDocumentsTypeWorkingDocumentsTypeWorkDocumentTypeDocumentTotalsType { constructor: { new(): SourceDocumentsTypeWorkingDocumentsTypeWorkDocumentTypeDocumentTotalsType }; }

interface _SourceDocumentsTypeWorkingDocumentsTypeWorkDocumentTypeLineType extends BaseType {
	CreditAmount: number;
	CustomsInformation?: CustomsInformation;
	DebitAmount: number;
	Description: string;
	LineNumber: number;
	OrderReferences?: OrderReferences;
	ProductCode: string;
	ProductDescription: string;
	ProductSerialNumber?: ProductSerialNumber;
	Quantity: number;
	References?: References;
	SettlementAmount?: number;
	Tax?: Tax;
	TaxBase?: number;
	TaxExemptionCode?: string;
	TaxExemptionReason?: string;
	TaxPointDate: Date;
	UnitOfMeasure: string;
	UnitPrice: number;
}
interface SourceDocumentsTypeWorkingDocumentsTypeWorkDocumentTypeLineType extends _SourceDocumentsTypeWorkingDocumentsTypeWorkDocumentTypeLineType { constructor: { new(): SourceDocumentsTypeWorkingDocumentsTypeWorkDocumentTypeLineType }; }

interface _SpecialRegimes extends BaseType {
	CashVATSchemeIndicator: number;
	SelfBillingIndicator: number;
	ThirdPartiesBillingIndicator: number;
}
export interface SpecialRegimes extends _SpecialRegimes { constructor: { new(): SpecialRegimes }; }
export var SpecialRegimes: { new(): SpecialRegimes };

interface _SupplierType extends BaseType {
	AccountID: string;
	BillingAddress: AddressStructure;
	CompanyName: string;
	Contact?: string;
	Email?: string;
	Fax?: string;
	SelfBillingIndicator: number;
	ShipFromAddress?: AddressStructure;
	SupplierID: string;
	SupplierTaxID: string;
	Telephone?: string;
	Website?: string;
}
interface SupplierType extends _SupplierType { constructor: { new(): SupplierType }; }

interface _Tax extends BaseType {
	TaxAmount: number;
	TaxCode: string;
	TaxCountryRegion: string;
	TaxPercentage: number;
	TaxType: TaxTypeType;
}
export interface Tax extends _Tax { constructor: { new(): Tax }; }
export var Tax: { new(): Tax };

type TaxAccountingBasisType = ("C" | "E" | "F" | "I" | "P" | "R" | "S" | "T");
interface _TaxAccountingBasisType extends Primitive._string { content: TaxAccountingBasisType; }

type TaxCodeType = string;
type _TaxCodeType = Primitive._string;

type TaxCountryRegionType = string;
type _TaxCountryRegionType = Primitive._string;

type TaxonomyReferenceType = ("S" | "M" | "N" | "O");
interface _TaxonomyReferenceType extends Primitive._string { content: TaxonomyReferenceType; }

export type TaxTableEntryTaxCode = string;
type _TaxTableEntryTaxCode = Primitive._string;

interface _TaxTableEntryType extends BaseType {
	Description: string;
	TaxAmount: number;
	TaxCode: string;
	TaxCountryRegion: string;
	TaxExpirationDate?: Date;
	TaxPercentage: number;
	TaxType: TaxTypeType;
}
interface TaxTableEntryType extends _TaxTableEntryType { constructor: { new(): TaxTableEntryType }; }

interface _TaxTableType extends BaseType {
	TaxTableEntry: TaxTableEntryType;
}
interface TaxTableType extends _TaxTableType { constructor: { new(): TaxTableType }; }

type TaxTypeType = ("IVA" | "IS" | "NS");
interface _TaxTypeType extends Primitive._string { content: TaxTypeType; }

type ThirdPartiesBillingIndicatorType = number;
type _ThirdPartiesBillingIndicatorType = Primitive._number;

type TransactionTypeType = ("N" | "R" | "A" | "J");
interface _TransactionTypeType extends Primitive._string { content: TransactionTypeType; }

interface _WithholdingTax extends BaseType {
	WithholdingTaxAmount: number;
	WithholdingTaxDescription?: string;
	WithholdingTaxType?: WithholdingTaxTypeType;
}
export interface WithholdingTax extends _WithholdingTax { constructor: { new(): WithholdingTax }; }
export var WithholdingTax: { new(): WithholdingTax };

type WithholdingTaxTypeType = ("IRS" | "IRC" | "IS");
interface _WithholdingTaxTypeType extends Primitive._string { content: WithholdingTaxTypeType; }

type WorkStatusType = ("N" | "A" | "F");
interface _WorkStatusType extends Primitive._string { content: WorkStatusType; }

type WorkTypeType = ("CM" | "CC" | "FC" | "FO" | "NE" | "OU" | "OR" | "PF" | "DC" | "RP" | "RE" | "CS" | "LD" | "RA");
interface _WorkTypeType extends Primitive._string { content: WorkTypeType; }

export interface document extends BaseType {
	AccountDescription: string;
	AccountID: string;
	Address: CustomerAddressStructure;
	AddressDetail: string;
	ARCNo: string;
	ATCUD: string;
	ATDocCodeID: string;
	AuditFile: AuditFileType;
	AuditFileVersion: string;
	BillingAddress: AddressStructure;
	BuildingNumber: string;
	BusinessName: string;
	CashVATSchemeIndicator: number;
	City: string;
	ClosingCreditBalance: number;
	ClosingDebitBalance: number;
	CNCode: string;
	CompanyAddress: AddressStructure;
	CompanyID: string;
	CompanyName: string;
	Contact: string;
	Country: string;
	CreditAmount: number;
	CurrencyAmount: number;
	CurrencyCode: string;
	Customer: CustomerType;
	CustomerID: string;
	CustomerTaxID: string;
	DateCreated: Date;
	DebitAmount: number;
	DeliveryDate: Date;
	DeliveryID: string;
	Description: string;
	DocArchivalNumber: string;
	DocumentNumber: string;
	EACCode: string;
	Email: string;
	EndDate: Date;
	ExchangeRate: number;
	Fax: string;
	FiscalYear: number;
	GeneralLedgerAccounts: GeneralLedgerAccountsType;
	GeneralLedgerEntries: GeneralLedgerEntriesType;
	GLPostingDate: Date;
	GrossTotal: number;
	GroupingCategory: GroupingCategoryType;
	Hash: string;
	HashControl: string;
	Header: HeaderType;
	HeaderComment: string;
	IECAmount: number;
	InvoiceDate: Date;
	InvoiceNo: string;
	InvoiceStatus: InvoiceStatusType;
	InvoiceStatusDate: Date;
	InvoiceType: InvoiceTypeType;
	JournalID: string;
	LineNumber: number;
	LocationID: string;
	MovementComments: string;
	MovementDate: Date;
	MovementEndTime: Date;
	MovementStartTime: Date;
	MovementStatus: MovementStatusType;
	MovementStatusDate: Date;
	MovementType: MovementTypeType;
	NetTotal: number;
	NumberOfEntries: number;
	NumberOfMovementLines: number;
	OpeningCreditBalance: number;
	OpeningDebitBalance: number;
	OrderDate: Date;
	OriginatingON: string;
	PaymentMechanism: PaymentMechanismType;
	PaymentRefNo: string;
	PaymentStatus: PaymentStatusType;
	PaymentStatusDate: Date;
	Period: number;
	PostalCode: string;
	Product: ProductType;
	ProductCode: string;
	ProductCompanyTaxID: string;
	ProductDescription: string;
	ProductGroup: string;
	ProductID: string;
	ProductNumberCode: string;
	ProductType: ProductTypeType;
	ProductVersion: string;
	Quantity: number;
	Reason: string;
	RecordID: string;
	Reference: string;
	Region: string;
	SelfBillingIndicator: number;
	SerialNumber: string;
	SettlementAmount: number;
	ShipFrom: ShippingPointStructure;
	ShipFromAddress: AddressStructure;
	ShipTo: ShippingPointStructure;
	ShipToAddress: CustomerAddressStructure;
	SoftwareCertificateNumber: number;
	SourceDocumentID: string;
	SourceDocuments: SourceDocumentsType;
	SourceID: string;
	StartDate: Date;
	StreetName: string;
	Supplier: SupplierType;
	SupplierID: string;
	SupplierTaxID: string;
	SystemEntryDate: Date;
	SystemID: string;
	TaxAccountingBasis: TaxAccountingBasisType;
	TaxAmount: number;
	TaxBase: number;
	TaxCode: string;
	TaxCountryRegion: string;
	TaxEntity: string;
	TaxExemptionCode: string;
	TaxExemptionReason: string;
	TaxExpirationDate: Date;
	TaxonomyReference: TaxonomyReferenceType;
	TaxPayable: number;
	TaxPercentage: number;
	TaxPointDate: Date;
	TaxTable: TaxTableType;
	TaxTableEntry: TaxTableEntryType;
	TaxType: TaxTypeType;
	TaxVerificationDate: Date;
	Telephone: string;
	ThirdPartiesBillingIndicator: number;
	TotalCredit: number;
	TotalDebit: number;
	TotalQuantityIssued: number;
	TransactionDate: Date;
	TransactionID: string;
	TransactionType: TransactionTypeType;
	UnitOfMeasure: string;
	UnitPrice: number;
	UNNumber: string;
	WarehouseID: string;
	Website: string;
	WithholdingTaxType: WithholdingTaxTypeType;
	WorkDate: Date;
	WorkStatus: WorkStatusType;
	WorkStatusDate: Date;
	WorkType: WorkTypeType;
}
export var document: document;
