import {ListItemBuilder, StructureResolver} from 'sanity/structure'
import collections from './collectionStructure'
import products from './productStructure'
import home from './homeStructure'
import settings from './settingStructure'
import category from './categoryStructure'

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
    'currency',
  ].includes(id)
}

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Content')
    .items([
      home(S, context),
      S.divider(),
      collections(S, context),
      products(S, context),
      category(S, context),
      S.divider(),
      settings(S, context),
      // S.divider(),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
