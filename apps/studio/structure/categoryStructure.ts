import {ListItemBuilder} from 'sanity/structure'
import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem().title('Categories').schemaType('category').child(S.documentTypeList('category')),
)
