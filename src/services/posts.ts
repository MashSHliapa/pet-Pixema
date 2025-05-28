import { client } from '../utils/client';
import { catalogEndpoint } from '../api';

export const requestCatalog = async () => {
  const { data } = await client.get(catalogEndpoint);
  return data.Search;
};
