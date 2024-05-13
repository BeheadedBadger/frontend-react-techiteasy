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
              <h1>TECH IT EASY</h1>
              <h2>Verkoopoverzicht</h2>
              <div className="card-container">
                  <div className="card card-green">
                      <p>Aantal verkocht:</p>
                      <h2 className="card-text green-text">{sold()}</h2>
                  </div>
                  <div className="card card-blue">
                      <p>Aantal ingekocht:</p>
                      <h2 className="card-text blue-text">{bought()}</h2>
                  </div>
                  <div className="card card-red">
                      <p>Aantal te verkopen:</p>
                      <h2 className="card-text red-text">{remainingTvs()}</h2>
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
