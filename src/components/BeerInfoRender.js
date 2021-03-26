import React from "react";

import { Link } from "react-router-dom";

function BeerCard({ beer }) {
  let info = printInfo(beer);
  function printInfo(info) {
    let infoToPrint = [];
    for (const x in info) {
      if (typeof info[x] !== "object") {
        infoToPrint.push(<h5 key={`${x}_${beer.id}`}>{x}</h5>);
        infoToPrint.push(<p key={`${x}_${beer.id}_content`}>{info[x]}</p>);
      } else {
        infoToPrint.push(<h5 key={`${x}_${beer.id}`}>{x}</h5>);
        infoToPrint.push(
          <div key={`${x}_${beer.id}_content`}>{printInfo(info[x])}</div>
        );
      }
    }
    return infoToPrint;
  }

  return (
    <div className="col">
      {<h1 className="h3 m-0">{beer ? beer.name : "undefined"}</h1>}
      <section className="beerInfo">
        {beer ? (
          <Link to={`/beers/find?brewed_after=${beer.first_brewed}`}>
            <h4 className="h6">{beer.first_brewed}</h4>
          </Link>
        ) : null}

        <div className="beerInfo__content">{info}</div>
      </section>
    </div>
  );
}

export default BeerCard;
