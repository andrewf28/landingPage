// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Client, Creator } = initSchema(schema);

export {
  Client,
  Creator
};