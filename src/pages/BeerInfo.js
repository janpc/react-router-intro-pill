import React, { useEffect, useContext } from "react";
import { useParams, Redirect, useLocation } from "react-router-dom";

import BeerInfoRender from "../components/BeerInfoRender";
import useDataApi from "../hooks/useDataApi";

import { BeersContext } from "../contexts/BeersContexts";

function BeerInfo() {
  const { data } = useContext(BeersContext);
  const { beerId } = useParams();
  const { pathname } = useLocation();
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
  };

  useEffect(() => {
    getBeerData();
  }, []);

  return (
    <div>
      <main className="container mt-4">
        <section className="row mb-2">
          <div className="col">
            {!isLoading && beerData !== undefined && beerData !== null ? (
              <div className="align-items-center">
                <BeerInfoRender beer={beerData[0]} />
              </div>
            ) : isError ? (
              <Redirect to="/error/1" />
            ) : (
              <h2>loading...</h2>
            )}
            <hr />
          </div>
        </section>
      </main>
    </div>
  );
}

export default BeerInfo;
