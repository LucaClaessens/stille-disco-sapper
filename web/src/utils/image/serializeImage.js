import urlBuilder from "@sanity/image-url";
import client from "./../../sanityClient";

export default function (source, width = 400) {
    return urlBuilder(client).image(source).width(width).auto("format").url();
}