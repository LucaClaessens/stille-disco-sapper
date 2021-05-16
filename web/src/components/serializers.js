// https://www.sanity.io/docs/what-you-need-to-know-about-block-text/presenting-block-text
// https://github.com/movingbrands/svelte-portable-text
// https://www.npmjs.com/package/@sanity/image-url
import serializeImage from "./../utils/image/serializeImage";
import Block from "./Block.svelte";
import BlockSubtitle from "./BlockSubtitle.svelte";
import BlockTitle from "./BlockTitle.svelte";
import CheckoutPreview from "./CheckoutPreview.svelte";
import ContactSection from "./ContactSection.svelte";
import I18nLink from "./I18nLink.svelte";
import Image from "./Image.svelte";
import InputForm from "./InputForm.svelte";
import Link from "./Link.svelte";
import ParallaxGallery from "./ParallaxGallery.svelte";
import QABlock from "./QABlock.svelte";
import QAItem from "./QAItem.svelte";
import Spacer from "./Spacer.svelte";
import TextareaForm from "./TextareaForm.svelte";
import Button from "./Button.svelte";
import Color from "./Color.svelte";

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
    mainImage: ({ node, children }) => ({
      component: Image,
      childNodes: children,
      props: {
        url: serializeImage(node, 800),
        alt: node.alt,
      },
    }),
    textareaForm: ({ node, children }) => ({
      component: TextareaForm,
      childNodes: children,
      props: node,
    }),
    inputForm: ({ node, children }) => ({
      component: InputForm,
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
    qaBlock: ({ node, children }) => ({
      component: QABlock,
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
  },
};
