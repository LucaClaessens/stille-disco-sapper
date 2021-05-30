import S from '@sanity/desk-tool/structure-builder'
import {
  MdAddShoppingCart,
  MdFolder,
  MdMenu,
  MdPermContactCalendar,
  MdPublic,
  MdSettings,
  MdShoppingCart,
  MdViewStream
} from 'react-icons/md'
import * as I18nS from 'sanity-plugin-intl-input/lib/structure'
import { i18n } from './schemas/documentTranslation'

const hiddenDocTypes = listItem =>
  ![
    'page',
    'product',
    'landing',
    'rental',
    'navigation',
    'location',
    'footer',
    'settings',
    'events',
    'sequence',
    'gallery',
    'checkout'
  ].includes(listItem.getId())

const i18nDocumentEditor = (documentId, schemaType, title) =>
  S.document(documentId)
    .documentId(documentId)
    .schemaType(schemaType)
    .views(I18nS.getDocumentNodeViewsForSchemaType(schemaType))
    .title(title)

const documentEditor = (documentId, schemaType, title) =>
  S.document(documentId)
    .documentId(documentId)
    .schemaType(schemaType)
    .views(S.view.form())
    .title(title)

export const getDefaultDocumentNode = props => {
  if (props.schemaType === 'page' || props.schemaType === 'product') {
    return S.document().views(I18nS.getDocumentNodeViewsForSchemaType(props.schemaType))
  }
  return S.document()
}
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
        .child(
          S.documentTypeList('page')
            .title('Pages')
            .filter('_type == "page" && (!defined(_lang) || _lang == $baseLang)')
            .params({ baseLang: i18n.base })
            .canHandleIntent((_name, params, _context) => {
              return params.type === 'page'
            })
        ),
      S.divider(),
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
        .title('Checkout settings')
        .icon(MdShoppingCart)
        .schemaType('checkout')
        .child(i18nDocumentEditor('checkout', 'checkout', 'Checkout')),
      S.listItem()
        .title('Products')
        .icon(MdAddShoppingCart)
        .schemaType('product')
        .child(
          S.documentTypeList('product')
            .title('Products')
            .filter('_type == "product" && (!defined(_lang) || _lang == $baseLang)')
            .params({ baseLang: i18n.base })
            .canHandleIntent((_name, params, _context) => {
              return params.type === 'page'
            })
        ),
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
