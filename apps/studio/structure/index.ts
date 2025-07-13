import {ListItemBuilder, StructureResolver} from 'sanity/structure'
import collections from './collectionStructure'
import products from './productStructure'
import home from './homeStructure'
import settings from './settingStructure'
import category from './categoryStructure'
import showroom from './showroomStructure'
import faq from './faqStructure'
import terms from './termsServiceStructure'
import privacy from './privacyPolicyStructure'

const hiddenDocTypes = (listItem: ListItemBuilder) => {
  const id = listItem.getId()

  if (!id) {
    return false
  }

  return ![
    'collection',
    'colorTheme',
    'home',
    'media.tag',
    'page',
    'product',
    'productVariant',
    'settings',
    'category',
    'showroom',
    'currency',
    'material',
    'size',
    'color',
    'faq',
    'privacyPolicy',
    'termsOfService',
  ].includes(id)
}

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Pages')
    .items([
      home(S, context),
      faq(S, context),
      terms(S, context),
      privacy(S, context),
      S.divider(),
      products(S, context),
      collections(S, context),
      category(S, context),
      showroom(S, context),
      S.divider(),
      settings(S, context),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
