import React, { useEffect } from "react";
import { useParams, Redirect, useLocation } from "react-router-dom";

import BeerInfoRender from "../components/BeerInfoRender";
import useDataApi from "../hooks/useDataApi";

function BeerInfo({ fetchInfo }) {
  const { data } = fetchInfo;
  const { beerId } = useParams();
  const {pathname} = useLocation()
  const [{ data: beerData, isLoading, isError }, doFetch, setData] = useDataApi(
    ``,
    null
  );

  const getBeerData = () => {
    if (data) {
      setData(data.filter((beer) => beer.id === beerId));
    }
    if (!beerData) {
      doFetch(`https://api.punkapi.com/v2${pathname}`);
    }
  }

  useEffect(() => {
    getBeerData();
  }, []);

  return (
    <div>
      <main className="container mt-4">
        <section className="row mb-2">
          <div className="col">
            <div className="align-items-center">
              <h1 className="h3 m-0">Punk API</h1>
              <section className="beers">
                {isLoading || beerData === null ? (
                  <h2>loading...</h2>
                ) : isError ? (
                  <Redirect to="/error/1" />
                ) : (
                  <BeerInfoRender beer={beerData[0]} />
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

export default BeerInfo;
