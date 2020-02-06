import { Client, ClientOptions } from 'graphql-typed-client'
import {
  RootQueryRequest,
  RootQueryPromiseChain,
  RootQuery,
  RootMutationRequest,
  RootMutationPromiseChain,
  RootMutation,
} from './schema'
export declare const createClient: (
  options: ClientOptions,
) => Client<
  RootQueryRequest,
  RootQueryPromiseChain,
  RootQuery,
  RootMutationRequest,
  RootMutationPromiseChain,
  RootMutation,
  never,
  never,
  never
>
