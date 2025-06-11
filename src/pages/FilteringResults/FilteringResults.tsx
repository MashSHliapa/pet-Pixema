import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import type { Action, ThunkDispatch } from '@reduxjs/toolkit';
import type { RootState } from '../../redux/store';
import { clearSearchState, fetchSearchCard } from '../../redux/catalogSlice';
import { Loading } from '../../components/Loading/Loading';
import { CatalogCard } from '../../components/CatalogCard/CatalogCard';
import type { DataCatalogResponse } from '../../types/interfaces';

export function FilteringResults() {
  const location = useLocation();
  const dispatch = useDispatch<ThunkDispatch<DataCatalogResponse, null, Action>>();
  const { request } = useParams<{ request: string }>();

  const { data: posts, loading, error } = useSelector((state: RootState) => state.catalog);

  const isBtnSort = location.state?.isBtnSort ?? false;

  const { yearFrom = null, yearTo = null } = location.state || {};

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

  let filteredPosts = posts;

  if (yearFrom !== null && !isNaN(yearFrom)) {
    filteredPosts = filteredPosts.filter((item) => (Number(item.Year) || 0) >= yearFrom);
  }
  if (yearTo !== null && !isNaN(yearTo)) {
    filteredPosts = filteredPosts.filter((item) => (Number(item.Year) || 0) <= yearTo);
  }

  // Сортировка по году, если включена
  if (isBtnSort) {
    filteredPosts = filteredPosts.slice().sort((a, b) => (Number(a.Year) || 0) - (Number(b.Year) || 0));
  }

  // Рендер карточек
  const filteringResults = filteredPosts.map((item) => <CatalogCard key={item.imdbID} post={item} />);

  return (
    <div className="catalog">
      <div className="catalog__container _container">
        <div className="catalog__body">
          <div className="catalog__cards">{filteringResults}</div>
        </div>
      </div>
    </div>
  );
}
