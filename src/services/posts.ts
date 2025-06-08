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

export const requestSearchCards = async (request: string) => {
  const { data } = await client.get('?' + keyEndpoint + '&s=' + request);
  if (data.Response === 'False') {
    throw new Error(data.Error); // Передаём ошибку в rejected
  }
  return data.Search;
};
