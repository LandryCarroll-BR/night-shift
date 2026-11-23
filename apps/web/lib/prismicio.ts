import {
  createClient as baseCreateClient,
  type ClientConfig,
} from "@prismicio/client"
import prismicConfig from "../prismic.config.json"

export const repositoryName = prismicConfig.repositoryName

export const createClient = (config: ClientConfig = {}) => {
  return baseCreateClient(repositoryName, {
    routes: prismicConfig.routes,
    ...config,
  })
}
