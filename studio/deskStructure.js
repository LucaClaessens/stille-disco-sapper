import S from '@sanity/desk-tool/structure-builder';
import { MdDesktopMac, MdFolder, MdMenu, MdPermContactCalendar, MdPhoneAndroid, MdPublic, MdSettings, MdShoppingBasket, MdViewStream, MdWallpaper } from "react-icons/md";
import * as I18nS from 'sanity-plugin-intl-input/lib/structure';

const hiddenDocTypes = listItem =>
  !['page', 'product', 'landing', 'rental', 'navigation', 'location', 'footer', 'settings', 'events', 'sequence', 'gallery'].includes(listItem.getId())


const i18nDocumentEditor = (documentId, schemaType, title) => S
  .document(documentId)
  .documentId(documentId)
  .schemaType(schemaType)
  .views(I18nS.getDocumentNodeViewsForSchemaType(schemaType))
  .title(title)

const documentEditor = (documentId, schemaType, title) => S
  .document(documentId)
  .documentId(documentId)
  .schemaType(schemaType)
  .views(S.view.form())
  .title(title)

export const getDefaultDocumentNode = (props) => {
  return I18nS.getDefaultDocumentNode(props);
};
export default () =>
  S.list()
    .id('__root__')
    .title('Content')
    .items([
      S.listItem()
        .title('Frontpage')
        .icon(MdViewStream)
        .schemaType('landing')
        .child(i18nDocumentEditor('landing', 'landing', 'Homepage')),
      S.listItem()
        .title('Rental frontpage')
        .icon(MdPermContactCalendar)
        .schemaType('rental')
        .child(i18nDocumentEditor('rental', 'rental', 'Rental')),
      S.listItem()
        .title('Events frontpage')
        .icon(MdPermContactCalendar)
        .schemaType('events')
        .child(i18nDocumentEditor('events', 'events', 'Events')),
      S.listItem()
        .title('Pages')
        .icon(MdFolder)
        .schemaType('page')
        .child(S.documentTypeList('page').title('Pages')),
      S.listItem()
        .title('Navigation')
        .icon(MdMenu)
        .schemaType('navigation')
        .child(documentEditor('navigation', 'navigation', 'Navigation')),
      S.listItem()
        .title('Footer')
        .icon(MdMenu)
        .schemaType('footer')
        .child(documentEditor('footer', 'footer', 'Footer')),
      S.divider(),
      S.listItem()
        .title('Showcase')
        .icon(MdWallpaper)
        .child(S.list().title('Showcase').items([
          S.listItem()
            .title('Sequence')
            .icon(MdDesktopMac)
            .schemaType('sequence')
            .child(documentEditor('sequence', 'sequence', 'Sequence')),
          S.listItem()
            .title('Gallery')
            .icon(MdPhoneAndroid)
            .schemaType('gallery')
            .child(documentEditor('gallery', 'gallery', 'Gallery')),
        ])),
      S.listItem()
        .title('Products')
        .icon(MdShoppingBasket)
        .schemaType('product')
        .child(S.documentTypeList('product').title('Products')),
      S.listItem()
        .title('Locations')
        .icon(MdPublic)
        .schemaType('location')
        .child(S.documentTypeList('location').title('Locations')),
      S.divider(),
      S.listItem()
        .title('Site settings')
        .icon(MdSettings)
        .schemaType('settings')
        .child(documentEditor('settings', 'settings', 'Site settings')),
      S.divider(),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...I18nS.getFilteredDocumentTypeListItems().filter(hiddenDocTypes)
    ])
