import { client } from '../utils/client';
import { keyEndpoint } from '../api';

export const requestCatalog = async () => {
  const { data } = await client.get('?' + keyEndpoint + '&s=star');
  return data.Search;
};

export const requestItemCard = async (imdbID: string) => {
  const { data } = await client.get('?i=' + imdbID + '&' + keyEndpoint);
  return data;
};
