import { queryAPI, weakMap } from './100-weak';

const endpoint = { protocol: 'http', name: 'getUsers' };
weakMap.get(endpoint);

try {
  queryAPI(endpoint);
  console.log(weakMap.get(endpoint));

  queryAPI(endpoint);
  console.log(weakMap.get(endpoint));

  queryAPI(endpoint);
  queryAPI(endpoint);
  queryAPI(endpoint);
  queryAPI(endpoint);
} catch (error) {
  console.error(error.message);
}
