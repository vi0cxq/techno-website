import {ListItemBuilder} from 'sanity/structure'
import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Privacy Policy')
    .schemaType('privacyPolicy')
    .child(
      S.editor().title('Privacy Policy').schemaType('privacyPolicy').documentId('privacyPolicy'),
    ),
)
