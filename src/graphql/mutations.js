/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createClient = /* GraphQL */ `
  mutation CreateClient(
    $input: CreateClientInput!
    $condition: ModelClientConditionInput
  ) {
    createClient(input: $input, condition: $condition) {
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
export const updateClient = /* GraphQL */ `
  mutation UpdateClient(
    $input: UpdateClientInput!
    $condition: ModelClientConditionInput
  ) {
    updateClient(input: $input, condition: $condition) {
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
export const deleteClient = /* GraphQL */ `
  mutation DeleteClient(
    $input: DeleteClientInput!
    $condition: ModelClientConditionInput
  ) {
    deleteClient(input: $input, condition: $condition) {
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
export const createCreator = /* GraphQL */ `
  mutation CreateCreator(
    $input: CreateCreatorInput!
    $condition: ModelCreatorConditionInput
  ) {
    createCreator(input: $input, condition: $condition) {
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
export const updateCreator = /* GraphQL */ `
  mutation UpdateCreator(
    $input: UpdateCreatorInput!
    $condition: ModelCreatorConditionInput
  ) {
    updateCreator(input: $input, condition: $condition) {
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
export const deleteCreator = /* GraphQL */ `
  mutation DeleteCreator(
    $input: DeleteCreatorInput!
    $condition: ModelCreatorConditionInput
  ) {
    deleteCreator(input: $input, condition: $condition) {
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
