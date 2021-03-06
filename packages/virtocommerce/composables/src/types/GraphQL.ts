﻿export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Long` scalar type represents non-fractional signed whole numeric values.
   * Long can represent values between -(2^63) and 2^63 - 1.
   */
  Long: any;
  /** DateTime is a scalar value that represents an ISO8601 formatted date and time. */
  DateTime: any;
  /** [ISO 3166-1](http://en.wikipedia.org/wiki/ISO_3166-1) country code. */
  Country: any;
  /** Locale is a scalar value represented as a string language tag. */
  Locale: any;
  /** DateTime is a scalar value that represents an ISO8601 formatted date. */
  Date: any;
  /** Raw JSON value */
  Json: any;
  /** Represents a currency. Currencies are identified by their [ISO
   * 4217](http://www.iso.org/iso/home/standards/currency_codes.htm) currency codes.
   */
  Currency: any;
  /** A key that references a resource. */
  KeyReferenceInput: any;
  /** Search filter. It is represented as a string and has th same format as in REST API: "field:filter_criteria" */
  SearchFilter: any;
  /** Search sort */
  SearchSort: any;
  /** YearMonth is a scalar value that represents an ISO8601 formatted year and month. */
  YearMonth: any;
  /** The `BigDecimal` scalar type represents signed fractional values with arbitrary precision. */
  BigDecimal: any;
  /** Time is a scalar value that represents an ISO8601 formatted time. */
  Time: any;
};

/** Versioned object have an ID and version and modification. Every update of this object changes it's version. */
export type Versioned = {
  id: Scalars["String"];
  version: Scalars["Long"];
  createdAt: Scalars["DateTime"];
  lastModifiedAt: Scalars["DateTime"];
  createdBy?: Maybe<Initiator>;
  lastModifiedBy?: Maybe<Initiator>;
};

export type Initiator = {
  __typename?: "Initiator";
  isPlatformClient?: Maybe<Scalars["Boolean"]>;
  user?: Maybe<Reference>;
  externalUserId?: Maybe<Scalars["String"]>;
  customer?: Maybe<Reference>;
  anonymousId?: Maybe<Scalars["String"]>;
  clientId?: Maybe<Scalars["String"]>;
};

export type Reference = {
  __typename?: "Reference";
  typeId: Scalars["String"];
  id: Scalars["String"];
};

export type KeyReference = {
  __typename?: "KeyReference";
  typeId: Scalars["String"];
  key: Scalars["String"];
};

/** An address represents a postal address. */
export type Address = {
  __typename?: "Address";
  id?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  salutation?: Maybe<Scalars["String"]>;
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  streetName?: Maybe<Scalars["String"]>;
  streetNumber?: Maybe<Scalars["String"]>;
  additionalStreetInfo?: Maybe<Scalars["String"]>;
  postalCode?: Maybe<Scalars["String"]>;
  city?: Maybe<Scalars["String"]>;
  region?: Maybe<Scalars["String"]>;
  state?: Maybe<Scalars["String"]>;
  country: Scalars["Country"];
  company?: Maybe<Scalars["String"]>;
  department?: Maybe<Scalars["String"]>;
  building?: Maybe<Scalars["String"]>;
  apartment?: Maybe<Scalars["String"]>;
  pOBox?: Maybe<Scalars["String"]>;
  additionalAddressInfo?: Maybe<Scalars["String"]>;
  externalId?: Maybe<Scalars["String"]>;
  key?: Maybe<Scalars["String"]>;
};

/** A customer is a person purchasing products. Carts, Orders and Reviews can be associated to a customer. */
export type Customer = Versioned & {
  __typename?: "Customer";
  customerNumber?: Maybe<Scalars["String"]>;
  email: Scalars["String"];
  password: Scalars["String"];
  addresses: Array<Address>;
  defaultShippingAddressId?: Maybe<Scalars["String"]>;
  defaultBillingAddressId?: Maybe<Scalars["String"]>;
  shippingAddressIds: Array<Scalars["String"]>;
  billingAddressIds: Array<Scalars["String"]>;
  isEmailVerified: Scalars["Boolean"];
  customerGroupRef?: Maybe<Reference>;
  externalId?: Maybe<Scalars["String"]>;
  key?: Maybe<Scalars["String"]>;
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  middleName?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["Locale"]>;
  salutation?: Maybe<Scalars["String"]>;
  dateOfBirth?: Maybe<Scalars["Date"]>;
  companyName?: Maybe<Scalars["String"]>;
  vatId?: Maybe<Scalars["String"]>;
  defaultShippingAddress?: Maybe<Address>;
  defaultBillingAddress?: Maybe<Address>;
  shippingAddresses: Array<Address>;
  billingAddresses: Array<Address>;
  storesRef: Array<KeyReference>;
  stores: Array<Store>;
};

export type Store = Versioned & {
  __typename?: "Store";
  id: Scalars["String"];
  version: Scalars["Long"];
  key: Scalars["String"];
  name?: Maybe<Scalars["String"]>;
  languages?: Maybe<Array<Scalars["Locale"]>>;
  createdAt: Scalars["DateTime"];
  lastModifiedAt: Scalars["DateTime"];
  createdBy?: Maybe<Initiator>;
  lastModifiedBy?: Maybe<Initiator>;
};

export type Product = Versioned & {
  __typename?: "Product";
  id: Scalars["String"];
  key?: Maybe<Scalars["String"]>;
  version: Scalars["Long"];
  productTypeRef: Reference;
  skus: Array<Scalars["String"]>;
  masterData: ProductCatalogData;
  createdAt: Scalars["DateTime"];
  lastModifiedAt: Scalars["DateTime"];
  stateRef?: Maybe<Reference>;
  taxCategoryRef?: Maybe<Reference>;
  createdBy?: Maybe<Initiator>;
  lastModifiedBy?: Maybe<Initiator>;
};

export type ProductCatalogData = {
  __typename?: "ProductCatalogData";
  current?: Maybe<ProductData>;
  staged?: Maybe<ProductData>;
  published: Scalars["Boolean"];
  hasStagedChanges: Scalars["Boolean"];
};

export type ProductData = {
  __typename?: "ProductData";
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  nameAllLocales: Array<LocalizedString>;
  descriptionAllLocales?: Maybe<Array<LocalizedString>>;
  slug?: Maybe<Scalars["String"]>;
  categoryOrderHint?: Maybe<Scalars["String"]>;
  categoriesRef: Array<Reference>;
  categories: Array<Category>;
  metaTitle?: Maybe<Scalars["String"]>;
  metaKeywords?: Maybe<Scalars["String"]>;
  metaDescription?: Maybe<Scalars["String"]>;
  masterVariant: ProductVariant;
  variants: Array<ProductVariant>;
  allVariants: Array<ProductVariant>;
  variant?: Maybe<ProductVariant>;
  skus: Array<Scalars["String"]>;
};

export type ProductVariant = {
  __typename?: "ProductVariant";
  _id?: Maybe<Scalars["Int"]>; // I can't understand, why this property used by theme, but not implemented in commercetools
  _name?: Maybe<Scalars["String"]> // I can't understand, why this property used by theme, but not implemented in commercetools
  _slug?: Maybe<Scalars["String"]> // I can't understand, why this property used by theme, but not implemented in commercetools
  id: Scalars["Int"];
  key?: Maybe<Scalars["String"]>;
  sku?: Maybe<Scalars["String"]>;
  prices?: Maybe<Array<ProductPrice>>;
  /** Returns a single price based on the price selection rules. */
  price?: Maybe<ProductPrice>;
  images: Array<Image>;
  assets: Array<Asset>;
  attributeList: Array<Attribute>;
};

export type Attribute = {
  name: Scalars["String"];
};

export type ProductPrice = {
  __typename?: "ProductPrice";
  id?: Maybe<Scalars["String"]>;
  value: BaseMoney;
  country?: Maybe<Scalars["Country"]>;
  customerGroup?: Maybe<Reference>;
  channel?: Maybe<Reference>;
  validFrom?: Maybe<Scalars["DateTime"]>;
  validUntil?: Maybe<Scalars["DateTime"]>;
};

export type BaseMoney = {
  type: Scalars["String"];
  currencyCode: Scalars["Currency"];
  centAmount: Scalars["Long"];
  fractionDigits: Scalars["Int"];
};

export type Asset = {
  __typename?: "Asset";
  id: Scalars["String"];
  key?: Maybe<Scalars["String"]>;
  sources: Array<AssetSource>;
  name?: Maybe<Scalars["String"]>;
  nameAllLocales: Array<LocalizedString>;
  description?: Maybe<Scalars["String"]>;
  descriptionAllLocales?: Maybe<Array<LocalizedString>>;
  tags: Array<Scalars["String"]>;
};

export type LocalizedString = {
  __typename?: "LocalizedString";
  locale: Scalars["Locale"];
  value: Scalars["String"];
};

export type AssetSource = {
  __typename?: "AssetSource";
  uri: Scalars["String"];
  key?: Maybe<Scalars["String"]>;
  contentType?: Maybe<Scalars["String"]>;
};

export type Image = {
  __typename?: "Image";
  url: Scalars["String"];
  label?: Maybe<Scalars["String"]>;
};

export type Cart = Versioned & {
  __typename?: "Cart";
  customerId?: Maybe<Scalars["String"]>;
  customer?: Maybe<Customer>;
  customerEmail?: Maybe<Scalars["String"]>;
  anonymousId?: Maybe<Scalars["String"]>;
  lineItems: Array<LineItem>;
  totalPrice: Money;
  shippingAddress?: Maybe<Address>;
  billingAddress?: Maybe<Address>;
  country?: Maybe<Scalars["Country"]>;
  locale?: Maybe<Scalars["Locale"]>;
  storeRef?: Maybe<KeyReference>;
  store?: Maybe<Store>;
  itemShippingAddresses: Array<Address>;
  id: Scalars["String"];
};

export type LineItem = {
  __typename?: "LineItem";
  id: Scalars["String"];
  productId: Scalars["String"];
  name?: Maybe<Scalars["String"]>;
  nameAllLocales: Array<LocalizedString>;
  variant?: Maybe<ProductVariant>;
  price: ProductPrice;
  totalPrice?: Maybe<Money>;
  quantity: Scalars["Long"];
};

export type Money = BaseMoney & {
  __typename?: "Money";
  type: Scalars["String"];
  currencyCode: Scalars["Currency"];
  centAmount: Scalars["Long"];
  /** For the `Money` it equals to the default number of fraction digits used with the currency. */
  fractionDigits: Scalars["Int"];
};

export type Category = Versioned & {
  __typename?: "Category";
  id: Scalars["String"];
  key?: Maybe<Scalars["String"]>;
  version: Scalars["Long"];
  name?: Maybe<Scalars["String"]>;
  nameAllLocales: Array<LocalizedString>;
  description?: Maybe<Scalars["String"]>;
  descriptionAllLocales?: Maybe<Array<LocalizedString>>;
  slug?: Maybe<Scalars["String"]>;
  slugAllLocales: Array<LocalizedString>;
  ancestorsRef: Array<Reference>;
  ancestors: Array<Category>;
  parentRef?: Maybe<Reference>;
  parent?: Maybe<Category>;
  orderHint: Scalars["String"];
  externalId?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  metaKeywords?: Maybe<Scalars["String"]>;
  metaDescription?: Maybe<Scalars["String"]>;
  /** Number of a products in the category subtree. */
  productCount: Scalars["Int"];
  /** Number of staged products in the category subtree. */
  stagedProductCount: Scalars["Int"];
  /** Number of direct child categories. */
  childCount: Scalars["Int"];
  /** Direct child categories. */
  children?: Maybe<Array<Category>>;
  createdAt: Scalars["DateTime"];
  lastModifiedAt: Scalars["DateTime"];
  assets: Array<Asset>;
};
