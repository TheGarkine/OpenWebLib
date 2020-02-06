import { Observable } from 'graphql-typed-client'

/** My description */
export interface RootQuery {
  /** A typical Hello World! */
  hello: String | null
  allDocuments: (Document | null)[] | null
  biblatex: (Biblatex | null)[] | null
  __typename: 'RootQuery'
}

/** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
export type String = string

/** A document */
export interface Document {
  uuid: String
  title: String | null
  biblatexId: Int | null
  biblatex: Biblatex | null
  __typename: 'Document'
}

/** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
export type Int = number

/** Biblatex information for a document */
export interface Biblatex {
  uuid: String | null
  key: String | null
  author: String | null
  bookauthor: String | null
  editor: String | null
  afterword: String | null
  annotator: String | null
  commentator: String | null
  forward: String | null
  introduction: String | null
  tranlsator: String | null
  holder: String | null
  institution: String | null
  organization: String | null
  publisher: String | null
  title: String | null
  indextitle: String | null
  booktitle: String | null
  maintitle: String | null
  journaltitle: String | null
  issuetitle: String | null
  eventtitle: String | null
  reprinttitle: String | null
  series: String | null
  volume: String | null
  number: String | null
  part: String | null
  issue: String | null
  volumes: String | null
  edition: String | null
  version: String | null
  pubstate: String | null
  pages: String | null
  pagetotal: String | null
  pagination: String | null
  date: String | null
  eventdate: String | null
  urldate: String | null
  location: String | null
  venue: String | null
  url: String | null
  doi: String | null
  eid: String | null
  eprint: String | null
  eprinttype: String | null
  type: String | null
  entrysubtype: String | null
  addendum: String | null
  note: String | null
  howpublished: String | null
  language: String | null
  isan: String | null
  isbn: String | null
  ismn: String | null
  isrn: String | null
  issn: String | null
  iswc: String | null
  abstract: String | null
  annotation: String | null
  file: String | null
  library: String | null
  label: String | null
  shorthand: String | null
  shorthandintro: String | null
  __typename: 'Biblatex'
}

export interface RootMutation {
  createDocument: CreateDocument | null
  __typename: 'RootMutation'
}

export interface CreateDocument {
  ok: Boolean | null
  document: Document | null
  __typename: 'CreateDocument'
}

/** The `Boolean` scalar type represents `true` or `false`. */
export type Boolean = boolean

/** My description */
export interface RootQueryRequest {
  /** A typical Hello World! */
  hello?: boolean | number
  allDocuments?: DocumentRequest
  biblatex?: BiblatexRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** A document */
export interface DocumentRequest {
  uuid?: boolean | number
  title?: boolean | number
  biblatexId?: boolean | number
  biblatex?: BiblatexRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** Biblatex information for a document */
export interface BiblatexRequest {
  uuid?: boolean | number
  key?: boolean | number
  author?: boolean | number
  bookauthor?: boolean | number
  editor?: boolean | number
  afterword?: boolean | number
  annotator?: boolean | number
  commentator?: boolean | number
  forward?: boolean | number
  introduction?: boolean | number
  tranlsator?: boolean | number
  holder?: boolean | number
  institution?: boolean | number
  organization?: boolean | number
  publisher?: boolean | number
  title?: boolean | number
  indextitle?: boolean | number
  booktitle?: boolean | number
  maintitle?: boolean | number
  journaltitle?: boolean | number
  issuetitle?: boolean | number
  eventtitle?: boolean | number
  reprinttitle?: boolean | number
  series?: boolean | number
  volume?: boolean | number
  number?: boolean | number
  part?: boolean | number
  issue?: boolean | number
  volumes?: boolean | number
  edition?: boolean | number
  version?: boolean | number
  pubstate?: boolean | number
  pages?: boolean | number
  pagetotal?: boolean | number
  pagination?: boolean | number
  date?: boolean | number
  eventdate?: boolean | number
  urldate?: boolean | number
  location?: boolean | number
  venue?: boolean | number
  url?: boolean | number
  doi?: boolean | number
  eid?: boolean | number
  eprint?: boolean | number
  eprinttype?: boolean | number
  type?: boolean | number
  entrysubtype?: boolean | number
  addendum?: boolean | number
  note?: boolean | number
  howpublished?: boolean | number
  language?: boolean | number
  isan?: boolean | number
  isbn?: boolean | number
  ismn?: boolean | number
  isrn?: boolean | number
  issn?: boolean | number
  iswc?: boolean | number
  abstract?: boolean | number
  annotation?: boolean | number
  file?: boolean | number
  library?: boolean | number
  label?: boolean | number
  shorthand?: boolean | number
  shorthandintro?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface RootMutationRequest {
  createDocument?:
    | [
        {
          /** Document title */
          title?: String | null
        },
        CreateDocumentRequest,
      ]
    | CreateDocumentRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface CreateDocumentRequest {
  ok?: boolean | number
  document?: DocumentRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

const RootQuery_possibleTypes = ['RootQuery']
export const isRootQuery = (obj: { __typename: String }): obj is RootQuery => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return RootQuery_possibleTypes.includes(obj.__typename)
}

const Document_possibleTypes = ['Document']
export const isDocument = (obj: { __typename: String }): obj is Document => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Document_possibleTypes.includes(obj.__typename)
}

const Biblatex_possibleTypes = ['Biblatex']
export const isBiblatex = (obj: { __typename: String }): obj is Biblatex => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Biblatex_possibleTypes.includes(obj.__typename)
}

const RootMutation_possibleTypes = ['RootMutation']
export const isRootMutation = (obj: { __typename: String }): obj is RootMutation => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return RootMutation_possibleTypes.includes(obj.__typename)
}

const CreateDocument_possibleTypes = ['CreateDocument']
export const isCreateDocument = (obj: { __typename: String }): obj is CreateDocument => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return CreateDocument_possibleTypes.includes(obj.__typename)
}

/** My description */
export interface RootQueryPromiseChain {
  /** A typical Hello World! */
  hello: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  allDocuments: {
    execute: (request: DocumentRequest, defaultValue?: (Document | null)[] | null) => Promise<(Document | null)[] | null>
  }
  biblatex: {
    execute: (request: BiblatexRequest, defaultValue?: (Biblatex | null)[] | null) => Promise<(Biblatex | null)[] | null>
  }
}

/** My description */
export interface RootQueryObservableChain {
  /** A typical Hello World! */
  hello: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  allDocuments: {
    execute: (request: DocumentRequest, defaultValue?: (Document | null)[] | null) => Observable<(Document | null)[] | null>
  }
  biblatex: {
    execute: (request: BiblatexRequest, defaultValue?: (Biblatex | null)[] | null) => Observable<(Biblatex | null)[] | null>
  }
}

/** A document */
export interface DocumentPromiseChain {
  uuid: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  title: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  biblatexId: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
  biblatex: BiblatexPromiseChain & {
    execute: (request: BiblatexRequest, defaultValue?: Biblatex | null) => Promise<Biblatex | null>
  }
}

/** A document */
export interface DocumentObservableChain {
  uuid: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  title: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  biblatexId: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
  biblatex: BiblatexObservableChain & {
    execute: (request: BiblatexRequest, defaultValue?: Biblatex | null) => Observable<Biblatex | null>
  }
}

/** Biblatex information for a document */
export interface BiblatexPromiseChain {
  uuid: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  key: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  author: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  bookauthor: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  editor: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  afterword: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  annotator: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  commentator: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  forward: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  introduction: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  tranlsator: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  holder: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  institution: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  organization: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  publisher: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  title: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  indextitle: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  booktitle: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  maintitle: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  journaltitle: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  issuetitle: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  eventtitle: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  reprinttitle: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  series: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  volume: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  number: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  part: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  issue: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  volumes: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  edition: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  version: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  pubstate: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  pages: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  pagetotal: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  pagination: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  date: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  eventdate: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  urldate: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  location: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  venue: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  url: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  doi: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  eid: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  eprint: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  eprinttype: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  type: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  entrysubtype: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  addendum: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  note: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  howpublished: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  language: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  isan: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  isbn: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  ismn: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  isrn: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  issn: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  iswc: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  abstract: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  annotation: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  file: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  library: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  label: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  shorthand: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  shorthandintro: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
}

/** Biblatex information for a document */
export interface BiblatexObservableChain {
  uuid: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  key: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  author: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  bookauthor: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  editor: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  afterword: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  annotator: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  commentator: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  forward: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  introduction: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  tranlsator: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  holder: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  institution: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  organization: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  publisher: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  title: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  indextitle: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  booktitle: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  maintitle: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  journaltitle: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  issuetitle: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  eventtitle: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  reprinttitle: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  series: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  volume: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  number: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  part: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  issue: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  volumes: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  edition: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  version: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  pubstate: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  pages: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  pagetotal: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  pagination: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  date: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  eventdate: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  urldate: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  location: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  venue: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  url: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  doi: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  eid: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  eprint: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  eprinttype: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  type: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  entrysubtype: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  addendum: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  note: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  howpublished: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  language: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  isan: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  isbn: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  ismn: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  isrn: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  issn: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  iswc: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  abstract: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  annotation: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  file: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  library: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  label: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  shorthand: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  shorthandintro: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
}

export interface RootMutationPromiseChain {
  createDocument: ((args?: {
    /** Document title */
    title?: String | null
  }) => CreateDocumentPromiseChain & {
    execute: (request: CreateDocumentRequest, defaultValue?: CreateDocument | null) => Promise<CreateDocument | null>
  }) &
    (CreateDocumentPromiseChain & {
      execute: (request: CreateDocumentRequest, defaultValue?: CreateDocument | null) => Promise<CreateDocument | null>
    })
}

export interface RootMutationObservableChain {
  createDocument: ((args?: {
    /** Document title */
    title?: String | null
  }) => CreateDocumentObservableChain & {
    execute: (request: CreateDocumentRequest, defaultValue?: CreateDocument | null) => Observable<CreateDocument | null>
  }) &
    (CreateDocumentObservableChain & {
      execute: (request: CreateDocumentRequest, defaultValue?: CreateDocument | null) => Observable<CreateDocument | null>
    })
}

export interface CreateDocumentPromiseChain {
  ok: { execute: (request?: boolean | number, defaultValue?: Boolean | null) => Promise<Boolean | null> }
  document: DocumentPromiseChain & {
    execute: (request: DocumentRequest, defaultValue?: Document | null) => Promise<Document | null>
  }
}

export interface CreateDocumentObservableChain {
  ok: { execute: (request?: boolean | number, defaultValue?: Boolean | null) => Observable<Boolean | null> }
  document: DocumentObservableChain & {
    execute: (request: DocumentRequest, defaultValue?: Document | null) => Observable<Document | null>
  }
}
