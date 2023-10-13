/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEmail = /* GraphQL */ `
  mutation CreateEmail(
    $input: CreateEmailInput!
    $condition: ModelEmailConditionInput
  ) {
    createEmail(input: $input, condition: $condition) {
      id
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateEmail = /* GraphQL */ `
  mutation UpdateEmail(
    $input: UpdateEmailInput!
    $condition: ModelEmailConditionInput
  ) {
    updateEmail(input: $input, condition: $condition) {
      id
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteEmail = /* GraphQL */ `
  mutation DeleteEmail(
    $input: DeleteEmailInput!
    $condition: ModelEmailConditionInput
  ) {
    deleteEmail(input: $input, condition: $condition) {
      id
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createClient = /* GraphQL */ `
  mutation CreateClient(
    $input: CreateClientInput!
    $condition: ModelClientConditionInput
  ) {
    createClient(input: $input, condition: $condition) {
      id
      email
      name
      social_platforms
      niches
      website
      ugc_platforms_question
      ugc_platform_experience
      marketing_emails
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      name
      social_platforms
      niches
      website
      ugc_platforms_question
      ugc_platform_experience
      marketing_emails
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      name
      social_platforms
      niches
      website
      ugc_platforms_question
      ugc_platform_experience
      marketing_emails
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      name
      niches
      social_platforms
      ugc_platforms_question
      ugc_platform_experience
      social_urls
      marketing_emails
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      name
      niches
      social_platforms
      ugc_platforms_question
      ugc_platform_experience
      social_urls
      marketing_emails
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      name
      niches
      social_platforms
      ugc_platforms_question
      ugc_platform_experience
      social_urls
      marketing_emails
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
