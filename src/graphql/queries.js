/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getClient = /* GraphQL */ `
  query GetClient($id: ID!) {
    getClient(id: $id) {
      id
      email
      website
      social_platforms
      niches
      name
      ugc_platforms_question
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listClients = /* GraphQL */ `
  query ListClients(
    $filter: ModelClientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        website
        social_platforms
        niches
        name
        ugc_platforms_question
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCreator = /* GraphQL */ `
  query GetCreator($id: ID!) {
    getCreator(id: $id) {
      id
      email
      social_platforms
      niches
      name
      ugc_platforms_question
      social_urls
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCreators = /* GraphQL */ `
  query ListCreators(
    $filter: ModelCreatorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCreators(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        social_platforms
        niches
        name
        ugc_platforms_question
        social_urls
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
