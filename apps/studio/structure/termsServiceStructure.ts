import {ListItemBuilder} from 'sanity/structure'
import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Terms Of Service')
    .schemaType('termsOfService')
    .child(
      S.editor()
        .title('Terms Of Service')
        .schemaType('termsOfService')
        .documentId('termsOfService'),
    ),
)
