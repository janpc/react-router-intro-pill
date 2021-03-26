import React from "react";

import { Redirect } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux';

import BeerCard from "../components/BeerCard";
import { setBeersPage } from "../redux/beers/beersActions";

function BeerList({ title }) {
  const dispatch = useDispatch();
  const { data, page } =  useSelector(state => state.beers);

  const setPage=(pg)=>{
    dispatch(setBeersPage(pg));
  }

  const{
    isLoading, data: results, isError
  } = data;
  return (
    <div className="align-items-center">
      <h1 className="h3 m-0">{title}</h1>
      <div className="home__buttons">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          {"<"}
        </button>
        <span>{page}</span>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setPage(page + 1)}
        >
          {">"}
        </button>
      </div>
      <section className="beers">
        {isLoading || results == null ? (
          <h2>loading...</h2>
        ) : isError ? (
          <Redirect to="/error/1" />
        ) : (
          results.map((beer) => <BeerCard key={beer.id} beer={beer} />)
        )}
      </section>
    </div>
  );
}

export default BeerList;
