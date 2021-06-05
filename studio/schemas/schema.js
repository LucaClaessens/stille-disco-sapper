// First, we must import the schema creator
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import createSchema from 'part:@sanity/base/schema-creator'
import checkout from './documents/checkout'
import events from './documents/events'
import footer from './documents/footer'
import landing from './documents/landing'
import location from './documents/location'
import navigation from './documents/navigation'
import page from './documents/page'
import product from './documents/product'
import rental from './documents/rental'
import settings from './documents/settings'
// blocks
import checkoutPreviewBlock from './objects/blocks/checkoutPreview'
import contactDetailsBlock from './objects/blocks/contactDetails'
import faqBlock from './objects/blocks/faqBlock'
import formBlock from './objects/blocks/formBlock'
import parallaxGalleryWrapperBlock from './objects/blocks/parallaxGalleryWrapper'
// components
import addressDetails from './objects/components/addressDetails'
import banner from './objects/components/banner'
import blockNode from './objects/components/blockNode'
import blockSubtitle from './objects/components/blockSubtitle'
import blockTitle from './objects/components/blockTitle'
import button from './objects/components/button'
import galleryImage from './objects/components/galleryImage'
import i18nLink from './objects/components/i18nLink'
import input from './objects/components/input'
import landingCategory from './objects/components/landingCategory'
import link from './objects/components/link'
import linkButton from './objects/components/linkButton'
import mainImage from './objects/components/mainImage'
import productVariation from './objects/components/productVariation'
import qaItem from './objects/components/qaItem'
import radioChannel from './objects/components/radioChannel'
import sequenceImage from './objects/components/sequenceImage'
import spacer from './objects/components/spacer'
import textarea from './objects/components/textarea'
import youtube from './objects/components/youtube'
// layouts
import layoutFullWidth from './objects/layout/layoutFullWidth'
import layoutOneOne from './objects/layout/layoutOneOne'
import layoutOneTwo from './objects/layout/layoutOneTwo'
import layoutTwoOne from './objects/layout/layoutTwoOne'
// portable texts
import blockPortableText from './objects/portableText/blockPortableText'
import defaultPortableText from './objects/portableText/defaultPortableText'
import faqBlockPortableText from './objects/portableText/faqBlockPortableText'
import formBlockPortableText from './objects/portableText/formBlockPortableText'
import layoutPortableText from './objects/portableText/layoutPortableText'
import marketingPagePortableText from './objects/portableText/marketingPagePortableText'
import subtitlePortableText from './objects/portableText/subtitlePortableText'
import textPortableText from './objects/portableText/textPortableText'
// utils
import backgroundColor from './objects/util/backgroundColor'
import flexPositioner from './objects/util/flexPositioner'
import seoFields from './objects/util/seoFields'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'blog',
  types: schemaTypes.concat([
    // pages
    settings,
    landing,
    rental,
    events,
    page,
    product,
    navigation,
    footer,
    location,
    checkout,
    // layout elements
    layoutFullWidth,
    layoutOneOne,
    layoutTwoOne,
    layoutOneTwo,
    //blocks
    checkoutPreviewBlock,
    parallaxGalleryWrapperBlock,
    contactDetailsBlock,
    formBlock,
    faqBlock,
    // portable texts
    textPortableText,
    layoutPortableText,
    defaultPortableText,
    marketingPagePortableText,
    formBlockPortableText,
    faqBlockPortableText,
    blockPortableText,
    subtitlePortableText,
    //utils
    backgroundColor,
    // reusable schemas
    seoFields,
    mainImage,
    sequenceImage,
    addressDetails,
    i18nLink,
    link,
    blockNode,
    blockTitle,
    blockSubtitle,
    qaItem,
    input,
    textarea,
    landingCategory,
    galleryImage,
    radioChannel,
    banner,
    productVariation,
    spacer,
    flexPositioner,
    button,
    linkButton,
    youtube
  ])
})
