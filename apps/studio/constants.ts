// Currency code (ISO 4217) to use when displaying prices in the studio

import {ColorWheelIcon, ComposeIcon, SearchIcon} from '@sanity/icons'

// https://en.wikipedia.org/wiki/ISO_4217
export const DEFAULT_CURRENCY_CODE = 'USD'

// Document types which:
// - cannot be created in the 'new document' menu
// - cannot be duplicated, unpublished or deleted
export const LOCKED_DOCUMENT_TYPES = ['settings', 'home', 'media.tag']

// Document types which:
// - cannot be created in the 'new document' menu
// - cannot be duplicated, unpublished or deleted
// - are from the Sanity Connect Shopify app - and can be linked to on Shopify
export const SHOPIFY_DOCUMENT_TYPES = ['product', 'productVariant', 'collection']

// References to include in 'internal' links
export const PAGE_REFERENCES = [
  {type: 'collection'},
  {type: 'home'},
  // {type: 'page'},
  {type: 'product'},
]

// API version to use when using the Sanity client within the studio
// https://www.sanity.io/help/studio-client-specify-api-version
export const SANITY_API_VERSION = '2022-10-25'

// Field groups used through schema types
export const GROUPS = [
  {
    name: 'theme',
    title: 'Theme',
    icon: ColorWheelIcon,
  },
  {
    default: true,
    name: 'editorial',
    title: 'Editorial',
    icon: ComposeIcon,
  },
  {
    name: 'seo',
    title: 'SEO',
    icon: SearchIcon,
  },
]
