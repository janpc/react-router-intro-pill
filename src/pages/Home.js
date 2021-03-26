import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import BeerList from "../components/BeerList";
import { setBeersOptions } from "../redux/beers/beersActions";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setBeersOptions({ mode: "normal", page: 1 }));
  }, [dispatch]);

  return (
    <div>
      <main className="container mt-4">
        <section className="row mb-2">
          <div className="col">
            <BeerList title="Punk API" />
            <hr />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
