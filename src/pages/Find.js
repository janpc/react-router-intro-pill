import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setBeersOptions } from "../redux/beers/beersActions";

import BeerList from "../components/BeerList";
import FindForm from "../components/FindForm";


function Find() {
  const { search } = useLocation();
  const brewed_after = new URLSearchParams(search).get("brewed_after");
  const dispatch = useDispatch();

  useEffect(() => {
    if (brewed_after) {
      dispatch(setBeersOptions({ mode: "find", page: 1, search: search }));
    }
  }, [dispatch, brewed_after, search]);

  return (
    <div>
      <main className="container mt-4">
        <section className="row mb-2">
          <div className="col">
            {brewed_after !== null ? (
              <BeerList title={`Brewed After: ${brewed_after}`} />
            ) : (
              <FindForm />
            )}
            <hr />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Find;
