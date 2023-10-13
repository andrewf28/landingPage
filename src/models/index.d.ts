import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerEmail = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Email, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEmail = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Email, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Email = LazyLoading extends LazyLoadingDisabled ? EagerEmail : LazyEmail

export declare const Email: (new (init: ModelInit<Email>) => Email) & {
  copyOf(source: Email, mutator: (draft: MutableModel<Email>) => MutableModel<Email> | void): Email;
}

type EagerClient = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Client, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly name: string;
  readonly social_platforms?: (string | null)[] | null;
  readonly niches?: (string | null)[] | null;
  readonly website?: string | null;
  readonly ugc_platforms_question?: (string | null)[] | null;
  readonly ugc_platform_experience?: string | null;
  readonly marketing_emails?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyClient = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Client, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly name: string;
  readonly social_platforms?: (string | null)[] | null;
  readonly niches?: (string | null)[] | null;
  readonly website?: string | null;
  readonly ugc_platforms_question?: (string | null)[] | null;
  readonly ugc_platform_experience?: string | null;
  readonly marketing_emails?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Client = LazyLoading extends LazyLoadingDisabled ? EagerClient : LazyClient

export declare const Client: (new (init: ModelInit<Client>) => Client) & {
  copyOf(source: Client, mutator: (draft: MutableModel<Client>) => MutableModel<Client> | void): Client;
}

type EagerCreator = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Creator, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly name: string;
  readonly niches?: (string | null)[] | null;
  readonly social_platforms?: string | null;
  readonly ugc_platforms_question?: (string | null)[] | null;
  readonly ugc_platform_experience?: string | null;
  readonly social_urls?: (string | null)[] | null;
  readonly marketing_emails?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCreator = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Creator, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly name: string;
  readonly niches?: (string | null)[] | null;
  readonly social_platforms?: string | null;
  readonly ugc_platforms_question?: (string | null)[] | null;
  readonly ugc_platform_experience?: string | null;
  readonly social_urls?: (string | null)[] | null;
  readonly marketing_emails?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Creator = LazyLoading extends LazyLoadingDisabled ? EagerCreator : LazyCreator

export declare const Creator: (new (init: ModelInit<Creator>) => Creator) & {
  copyOf(source: Creator, mutator: (draft: MutableModel<Creator>) => MutableModel<Creator> | void): Creator;
}