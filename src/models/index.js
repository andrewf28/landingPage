// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { BlogPost, Email, Client, Creator } = initSchema(schema);

export {
  BlogPost,
  Email,
  Client,
  Creator
};