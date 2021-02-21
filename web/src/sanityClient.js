import sanityClient from '@sanity/client';
import { api } from '../../studio/sanity.json';
const { projectId } = api;
const { SANITY_STUDIO_API_DATASET } = process.env;

const client = sanityClient({
  projectId,
  dataset: SANITY_STUDIO_API_DATASET,
  token: "skIUpdCGXRCcJ2QQaMGUHL6eG88ynOIQNzUmU1FTZgyMTDItuJeL4c7WdsG6Qd61dxqQ6svUMOk54kAwaVudL1DFFlaqIhf2Gvv75tX5cPr8wIcYAWlhM1P8aXNWRzQEoUvLVa9RohU9VyUTH38EA7dWqhe32Atcwu1JTu0hMkmidVigpzk5",
  useCdn: true
})

export default client
