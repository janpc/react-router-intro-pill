import React, { useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import BeerInfoRender from "../components/BeerInfoRender";
import { setBeersOptions } from "../redux/beers/beersActions";

function BeerInfo() {
  const { beerId } = useParams();

  const dispatch = useDispatch();
  const { data } =  useSelector(state => state.beers);

  const{
    isLoading, data: results, isError
  } = data;

  useEffect(() => {
    dispatch(setBeersOptions({ mode: "beerInfo", id: beerId }));
  }, [dispatch, beerId]);

  return (
    <div>
      <main className="container mt-4">
        <section className="row mb-2">
          <div className="col">
            {!isLoading && results !== undefined && results !== null ? (
              <div className="align-items-center">
                <BeerInfoRender beer={results[0]} />
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
