// First, we must import the schema creator
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import createSchema from 'part:@sanity/base/schema-creator'
import checkout from './documents/checkout'
import events from './documents/events'
import footer from './documents/footer'
import gallery from "./documents/gallery"
import landing from './documents/landing'
import location from "./documents/location"
import navigation from "./documents/navigation"
import page from './documents/page'
import product from './documents/product'
import rental from './documents/rental'
import sequence from "./documents/sequence"
import settings from './documents/settings'
import addressDetails from './objects/addressDetails'
import banner from './objects/banner'
import blockNode from './objects/blockNode'
// Object types
import blockPortableText from './objects/blockPortableText'
import blockSubtitle from './objects/blockSubtitle'
import blockTitle from './objects/blockTitle'
import checkoutPreview from './objects/checkoutPreview'
import contactDetails from './objects/contactDetails'
import galleryImage from './objects/galleryImage'
import galleryMessage from './objects/galleryMessage'
import i18nLink from './objects/i18nLink'
import inputForm from './objects/inputForm'
import landingCategory from './objects/landingCategory'
import link from './objects/link'
import mainImage from './objects/mainImage'
import productVariation from './objects/productVariation'
import qaBlock from './objects/qaBlock'
import qaBlockPortableText from './objects/qaBlockPortableText'
import qaItem from './objects/qaItem'
import radioChannel from './objects/radioChannel'
import seoFields from './objects/seoFields'
import sequenceImage from './objects/sequenceImage'
import spacer from './objects/spacer'
import subtitlePortableText from './objects/subtitlePortableText'
import textareaForm from './objects/textareaForm'


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
    sequence,
    gallery,
    checkout,
    // portable texts
    qaBlockPortableText,
    blockPortableText,
    subtitlePortableText,
    //references
    // reusable schemas
    seoFields,
    mainImage,
    sequenceImage,
    contactDetails,
    addressDetails,
    i18nLink,
    link,
    blockNode,
    blockTitle,
    blockSubtitle,
    qaBlock,
    qaItem,
    inputForm,
    textareaForm,
    landingCategory,
    galleryImage,
    galleryMessage,
    radioChannel,
    banner,
    checkoutPreview,
    productVariation,
    spacer
  ])
})
