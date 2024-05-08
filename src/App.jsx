import './App.css';
import sold from './helpers/soldTvs.js';
import bought from "./helpers/boughtTvs.js";
import {bestSellingTv} from "./constants/inventory.js";

function App() {
  return (
      <>
          <h1>Tech it easy dashboard</h1>

          <h2>Verkoopoverzicht</h2>
          <div className="card-container">
              <div className="card card-green">
                  <p>Aantal verkochte producten</p>
                  <p>{sold()}</p>
              </div>
              <div className="card card-blue">
                  <p>Aantal ingekochte producten</p>
                  <p>{bought()}</p>
              </div>
              <div className="card card-red">
                  <p>Aantal te verkopen producten</p>
                  <p>{bought() - sold()}</p>
              </div>
          </div>

          <h2>Best verkochte tv</h2>
          <div className="card-container">
              <div className="card card-colourless">
                  <p>{bestSellingTv.type}</p>
              </div>
          </div>
      </>
  );
}

export default App;
