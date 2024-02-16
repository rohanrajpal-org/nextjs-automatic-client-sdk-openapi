import type { paths } from './petstore';
import createClient from 'openapi-fetch';

export let { GET, POST, PATCH, PUT, DELETE, HEAD, TRACE } = createClient<paths>(
  {
    baseUrl: 'https://petstore3.swagger.io/api/v3',
    // headers: { authorization: `Bearer ${bearerToken}` } Add your auth here, not needed for public APIs like petstore in this example
  },
);
