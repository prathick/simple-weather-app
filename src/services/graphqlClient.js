import { GraphQLClient } from 'graphql-request';

const endpoint = 'http://localhost:4000/';
export const client = new GraphQLClient(endpoint, { headers: {} });
