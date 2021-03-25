import React from "react";

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
      <div className="border p-3 mb-3">{info}</div>
    </div>
  );
}

export default BeerCard;
