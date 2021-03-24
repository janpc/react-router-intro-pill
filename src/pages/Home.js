import React from "react";
import { Redirect } from "react-router-dom";

import BeerCard from "../components/BeerCard";

function Home({ fetchInfo }) {
  const { data, isLoading, isError } = fetchInfo;
  return (
    <div>
      <main className="container mt-4">
        <section className="row mb-2">
          <div className="col">
            <div className="align-items-center">
              <h1 className="h3 m-0">Punk API</h1>
              <section className="beers">
                {isLoading || data == null ? (
                  <h2>loading...</h2>
                ) : isError ? (
                  <Redirect to="/error/1" />
                ) : (
                  data.map((beer) => <BeerCard key={beer.id} beer={beer} />)
                )}
              </section>
            </div>
            <hr />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
