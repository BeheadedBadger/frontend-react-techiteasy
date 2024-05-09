import './App.css';
import sold from './helpers/soldTvs.js';
import bought from "./helpers/boughtTvs.js";
import title from "./helpers/generateBestSellerTitle.js";
import remainingTvs from "./helpers/remainingTvs.js";
import {showAsEuros} from "./helpers/showAsEuros.js";
import {bestSellingTv} from "./constants/inventory.js";
import {showAsScreenSizes} from "./helpers/showAsScreenSizes.js";

function App() {
  return (
      <div className="background">
          <div className="main">
              <h1>Tech it easy dashboard</h1>
              <hr/>

              <h2>Verkoopoverzicht</h2>
              <div className="card-container">
                  <div className="card card-green">
                      <p>Aantal verkochte producten</p>
                      <h2 className="green-text">{sold()}</h2>
                  </div>
                  <div className="card card-blue">
                      <p>Aantal ingekochte producten</p>
                      <h2 className="blue-text">{bought()}</h2>
                  </div>
                  <div className="card card-red">
                      <p>Aantal te verkopen producten</p>
                      <h2 className="red-text">{remainingTvs()}</h2>
                  </div>
              </div>
              <hr/>

              <h2>Best verkochte tv</h2>
              <div className="card-container">
                  <div className="card card-colourless">
                      <p>{title()}</p>
                      <p>{showAsEuros(bestSellingTv.price)}</p>
                      <p>{showAsScreenSizes(bestSellingTv.availableSizes)}</p>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;
