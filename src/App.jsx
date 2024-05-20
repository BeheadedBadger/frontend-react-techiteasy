import './App.css';
import sold from './helpers/soldTvs.js';
import bought from "./helpers/boughtTvs.js";
import title from "./helpers/generateBestSellerTitle.js";
import remainingTvs from "./helpers/remainingTvs.js";
import {showAsEuros} from "./helpers/showAsEuros.js";
import {bestSellingTv, inventory} from "./constants/inventory.js";
import {showAsScreenSizes} from "./helpers/showAsScreenSizes.js";
import {useState} from "react";

function App() {

    const [isShownPrice, showItemsSortedByPrice] = useState(false);
    const handleClickPrice = function () {
        showItemsSortedByBestSold(false);
        showItemsSortedByPrice(true);
        showItemsSortedByBestForSports(false);
    }


    const [isShownBestSeller, showItemsSortedByBestSold] = useState(false);
    const handleClickBestSeller = function () {
        showItemsSortedByBestSold(true);
        showItemsSortedByPrice(false);
        showItemsSortedByBestForSports(false);
    }

    const [isShowBestForSports, showItemsSortedByBestForSports] = useState(false);
    const handleClickSports = function () {
        showItemsSortedByBestSold(false);
        showItemsSortedByPrice(false);
        showItemsSortedByBestForSports(true);
    }

    function showTvs() {
        const listItems = inventory.map(item =>
            <li key={item.name}>
                <div className="card card-colourless">
                    <div className="image-container">
                        <img src={item.sourceImg} alt="Tv image" width="250"/>
                    </div>
                    <article>
                        <p>{item.name}</p>
                        <p>{showAsEuros(item.price)}</p>
                        <p>{showAsScreenSizes(item.availableSizes)}</p>
                    </article>
                </div>
            </li>
        );

        return <ul>{listItems}</ul>;
    }

    function ShowByBestSeller() {
        inventory.sort((a, b) => {
            return b.sold - a.sold;
        });

        return showTvs();
    }

    function ShowByPrice() {

        inventory.sort((a, b) => {
            return a.price - b.price;
        });

        return showTvs();
    }

    function ShowByBestForSports() {
        inventory.sort((a, b) => {
            return b.refreshRate - a.refreshRate;
        });

        return showTvs();
    }

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
                        <div className="image-container">
                            <img src={bestSellingTv.sourceImg} alt="Bestseller image" width="250"/>
                        </div>
                        <article>
                            <p>{title()}</p>
                            <p>{showAsEuros(bestSellingTv.price)}</p>
                            <p>{showAsScreenSizes(bestSellingTv.availableSizes)}</p>
                            <div className="feature-container">
                                <p><img src="../src/assets/check.png" alt="icon" width="16"/> wifi
                                    <img src="../src/assets/minus.png" alt="icon" width="16"/> speech
                                    <img src="../src/assets/check.png" alt="icon" width="16"/> hdr
                                    <img src="../src/assets/check.png" alt="icon" width="16"/> bluetooth
                                    <img src="../src/assets/minus.png" alt="icon" width="16"/> ambilight</p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>

            <article className="main">
                <article className="card-container">
                    <button onClick={handleClickBestSeller}>Meest verkocht eerst</button>
                    <button onClick={handleClickPrice}>Goedkoopste eerst</button>
                    <button onClick={handleClickSports}>Meest geschikt voor sport eerst</button>
                </article>

                {isShownPrice && (
                    <div>
                        {ShowByPrice()}
                    </div>
                )}

                {isShownBestSeller && (
                    <div>
                        {ShowByBestSeller()}
                    </div>
                )}

                {isShowBestForSports && (
                    <div>
                        {ShowByBestForSports()}
                    </div>
                )}
            </article>
        </div>
    );
}

export default App;