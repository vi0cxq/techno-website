import {ListItemBuilder} from 'sanity/structure'
import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem().title('Journal').schemaType('post').child(S.documentTypeList('post')),
)
