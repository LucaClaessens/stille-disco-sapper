import sanityClient from '@sanity/client'
import { api } from '../../studio/sanity.json'
const { projectId, dataset } = api

const client = sanityClient({
  projectId,
  dataset,
  token: "skIUpdCGXRCcJ2QQaMGUHL6eG88ynOIQNzUmU1FTZgyMTDItuJeL4c7WdsG6Qd61dxqQ6svUMOk54kAwaVudL1DFFlaqIhf2Gvv75tX5cPr8wIcYAWlhM1P8aXNWRzQEoUvLVa9RohU9VyUTH38EA7dWqhe32Atcwu1JTu0hMkmidVigpzk5",
  useCdn: true
})

export default client
