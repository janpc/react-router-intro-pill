import React from "react";
import { Redirect } from "react-router-dom";

import BeerCard from "../components/BeerCard";

function Home({ fetchInfo, page, setPage }) {
  const { data, isLoading, isError } = fetchInfo;
  return (
    <div>
      <main className="container mt-4">
        <section className="row mb-2">
          <div className="col">
            <div className="align-items-center">
              <h1 className="h3 m-0">Punk API</h1>
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
