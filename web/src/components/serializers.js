// https://www.sanity.io/docs/what-you-need-to-know-about-block-text/presenting-block-text
// https://github.com/movingbrands/svelte-portable-text
// https://www.npmjs.com/package/@sanity/image-url
import serializeImage from "./../utils/image/serializeImage";
import Block from "./Block.svelte";
import BlockSubtitle from "./BlockSubtitle.svelte";
import BlockTitle from "./BlockTitle.svelte";
import CheckoutPreview from "./checkout/CheckoutPreview.svelte";
import ContactSection from "./ContactSection.svelte";
import I18nLink from "./I18nLink.svelte";
import Image from "./Image.svelte";
import Input from "./inputs/Input.svelte";
import Link from "./Link.svelte";
import ParallaxGallery from "./ParallaxGallery.svelte";
import FormBlock from "./layout/FormBlock.svelte";
import QAItem from "./QAItem.svelte";
import Spacer from "./Spacer.svelte";
import Textarea from "./inputs/Textarea.svelte";
import Button from "./Button.svelte";
import Color from "./Color.svelte";
import Youtube from "./Youtube.svelte";
import LayoutFullwidth from "./layout/LayoutFullwidth.svelte";
import LayoutOneOne from "./layout/LayoutOneOne.svelte";
import LayoutOneTwo from "./layout/LayoutOneTwo.svelte";
import LayoutTwoOne from "./layout/LayoutTwoOne.svelte";

export default {
  marks: {
    link: ({ children, mark }) => ({
      component: Link,
      childNodes: children,
      props: mark,
    }),
    i18nlink: ({ children, mark }) => ({
      component: I18nLink,
      childNodes: children,
      props: mark,
    }),
    color: ({ children, mark }) => ({
      component: Color,
      childNodes: children,
      props: mark,
    }),
  },
  types: {
    layoutFullWidth: ({ node, children }) => ({
      component: LayoutFullwidth,
      childNodes: children,
      props: {
        backgroundColor: node.backgroundColor,
        content: node.content,
      },
    }),
    layoutOneOne: ({ node, children }) => ({
      component: LayoutOneOne,
      childNodes: children,
      props: {
        backgroundColor: node.backgroundColor,
        contentLeft: node.contentLeft,
        contentRight: node.contentRight,
      },
    }),
    layoutOneTwo: ({ node, children }) => ({
      component: LayoutOneTwo,
      childNodes: children,
      props: {
        backgroundColor: node.backgroundColor,
        contentLeft: node.contentLeft,
        contentRight: node.contentRight,
      },
    }),
    layoutTwoOne: ({ node, children }) => ({
      component: LayoutTwoOne,
      childNodes: children,
      props: {
        backgroundColor: node.backgroundColor,
        contentLeft: node.contentLeft,
        contentRight: node.contentRight,
      },
    }),
    mainImage: ({ node, children }) => ({
      component: Image,
      childNodes: children,
      props: {
        url: serializeImage(node, 800),
        alt: node.alt,
      },
    }),
    textarea: ({ node, children }) => ({
      component: Textarea,
      childNodes: children,
      props: node,
    }),
    input: ({ node, children }) => ({
      component: Input,
      childNodes: children,
      props: node,
    }),
    blockNode: ({ node, children }) => ({
      component: Block,
      childNodes: children,
      props: node,
    }),
    blockTitle: ({ node, children }) => ({
      component: BlockTitle,
      childNodes: children,
      props: node,
    }),
    blockSubtitle: ({ node, children }) => ({
      component: BlockSubtitle,
      childNodes: children,
      props: node,
    }),
    qaItem: ({ node, children }) => ({
      component: QAItem,
      childNodes: children,
      props: node,
    }),
    formBlock: ({ node, children }) => ({
      component: FormBlock,
      childNodes: children,
      props: node,
    }),
    parallaxGalleryWrapper: ({ node, children }) => ({
      component: ParallaxGallery,
      childNodes: children,
      props: node,
    }),
    contactDetails: ({ node, children }) => ({
      component: ContactSection,
      childNodes: children,
      props: {
        ...node,
        location: {
          ...node.location,
          image: {
            ...node.location.image,
            url: serializeImage(node.location.image, 800),
          },
        },
      },
    }),
    checkoutPreview: ({ node, children }) => ({
      component: CheckoutPreview,
      childNodes: children,
      props: {
        ...node,
        backgroundImage: {
          ...node.backgroundImage,
          url: serializeImage(node.backgroundImage, 800),
        },
      },
    }),
    spacer: ({ node, children }) => ({
      component: Spacer,
      childNodes: children,
      props: node,
    }),
    button: ({ node, children }) => ({
      component: Button,
      childNodes: children,
      props: node,
    }),
    youtube: ({ node, children }) => ({
      component: Youtube,
      childNodes: children,
      props: node,
    }),
  },
};
