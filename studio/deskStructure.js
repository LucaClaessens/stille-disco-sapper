import S from '@sanity/desk-tool/structure-builder';
import { MdDashboard, MdList, MdPerson, MdToday } from "react-icons/md";
import * as I18nS from 'sanity-plugin-intl-input/lib/structure';

const i18nSchemas = ['post'];

const hiddenDocTypes = listItem =>
  !['category', 'author', 'post', 'siteSettings', 'landingSettings'].includes(listItem.getId())


const i18nDocumentEditor = (documentId, schemaType, title) => S
  .document(documentId)
  .documentId(documentId)
  .schemaType(schemaType)
  .views(I18nS.getDocumentNodeViewsForSchemaType(schemaType))
  .title(title)

export const getDefaultDocumentNode = (props) => {
  return I18nS.getDefaultDocumentNode(props);
};
// export default Structure.default;
export default () =>
  S.list()
    .id('__root__')
    .title('Content')
    .items([
      S.listItem()
        .id('siteSettings')
        .title('DEV SETTINGS')
        .schemaType('siteSettings')
        .child(
          S.documentList()
            .id('siteSettings')
            .title('Site Settings')
            .schemaType('siteSettings')
            .filter('_id == $id && _type == $type')
            .params({
              id: 'siteSettings',
              type: 'siteSettings',
            })
            .menuItems([
              {
                title: 'Create new',
                intent: {
                  type: 'create',
                  params: {
                    id: 'siteSettings',
                    type: 'siteSettings',
                    template: 'siteSettings'
                  }
                }
              }
            ])
        ),
      S.listItem()
        .title('Content')
        .icon(MdDashboard)
        .child(
          S.list()
            .title('Content')
            .items([
              S.listItem()
                .title('Landing')
                .child(
                  S.editor()
                    .id('landingSettings')
                    .schemaType('landingSettings')
                    .documentId('landingSettings')
                ),
              S.listItem()
                .title('Settings')
                .child(i18nDocumentEditor('siteSettings', 'siteSettings', 'Pagina instellingen')),
            ])
        ),
      S.listItem()
        .title('Events')
        .icon(MdToday)
        .schemaType('post')
        .child(S.documentTypeList('post').title('Events')),
      S.listItem()
        .title('Authors')
        .icon(MdPerson)
        .schemaType('author')
        .child(S.documentTypeList('author').title('Authors')),
      S.listItem()
        .title('Categories')
        .icon(MdList)
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories')),
      S.divider(),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
