import {collectionType} from './documents/collectionType'
import {productType} from './documents/productType'
import {categoryType} from './documents/categoryType'

import {collectionGroupType} from './objects/collection/collectionGroupType'
import {collectionLinksType} from './objects/collection/collectionLinksType'

import {footerType} from './objects/global/footerType'
import {menuLinksType} from './objects/global/menuLinksType'
import {menuType} from './objects/global/menuType'
import {notFoundPageType} from './objects/global/notFoundPageType'

import {linkEmailType} from './objects/link/linkEmailType'
import {linkExternalType} from './objects/link/linkExternalType'
import {linkInternalType} from './objects/link/linkInternalType'
import {linkProductType} from './objects/link/linkProductType'

import {seoType} from './objects/seoType'

import {home} from './singletons/home'
import {settings} from './singletons/settings'
import {currencyType} from './documents/currencyType'
import {productDetailsType} from './objects/product/productDetailsType'
import {filtersType} from './objects/filtersType'
import {materialType} from './documents/materialType'
import {sizeType} from './documents/sizeType'
import {colorType} from './documents/colorType'
import {contactUsType} from './objects/contactUsType'
import {faqType} from './documents/faqType'
import {privacyPolicy} from './singletons/privacyPolicy'
import {termsOfService} from './singletons/termsService'
import {showroomType} from './documents/showroomType'
import {postType} from './documents/postType'
import {shapeType} from './documents/shapeType'

// Objects used as annotations must be imported first
const annotations = [linkEmailType, linkExternalType, linkInternalType, linkProductType]

const objects = [
  footerType,
  menuLinksType,
  menuType,
  notFoundPageType,
  seoType,
  collectionGroupType,
  collectionLinksType,
  productDetailsType,
  filtersType,
  contactUsType,
]

const singletons = [settings, home, privacyPolicy, termsOfService]

const documents = [
  collectionType,
  productType,
  categoryType,
  currencyType,
  materialType,
  sizeType,
  colorType,
  faqType,
  showroomType,
  postType,
  shapeType,
]

export const schemaTypes = [...annotations, ...objects, ...singletons, ...documents]
