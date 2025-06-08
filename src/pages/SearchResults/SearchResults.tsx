import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { CatalogCard } from '../../components/CatalogCard/CatalogCard';
import { clearSearchState, fetchSearchCard } from '../../redux/catalogSlice';
import { Loading } from '../../components/Loading/Loading';
import type { Action, ThunkDispatch } from '@reduxjs/toolkit';
import type { RootState } from '../../redux/store';
import type { DataCatalogResponse } from '../../types/interfaces';

export function SearchResults() {
  const { data: posts, loading, error } = useSelector((state: RootState) => state.catalog);
  const dispatch = useDispatch<ThunkDispatch<DataCatalogResponse, null, Action>>();
  const { request } = useParams<{ request: string }>();

  useEffect(() => {
    dispatch(clearSearchState());
    if (request) {
      dispatch(fetchSearchCard({ request: request }));
    }
  }, [dispatch, request]);

  if (loading) {
    return (
      <div className="catalog__loading">
        <Loading />
      </div>
    );
  }

  if (error) {
    return <div className="text-danger">{error}</div>;
  }

  const searchResultCards = posts.map((item) => <CatalogCard key={item.imdbID} post={item} />);

  return (
    <div className="catalog">
      <div className="catalog__container _container">
        <div className="catalog__body">
          <div className="catalog__cards">{searchResultCards}</div>
        </div>
      </div>
    </div>
  );
}
