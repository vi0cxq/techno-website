import {ListItemBuilder} from 'sanity/structure'
import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem().title('Showrooms').schemaType('showroom').child(S.documentTypeList('showroom')),
)
