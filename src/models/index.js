// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Email, Client, Creator } = initSchema(schema);

export {
  Email,
  Client,
  Creator
};