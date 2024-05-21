// eslint-disable-next-line react/prop-types
import './Feature.css';

function Feature( {hasFeature, title} ) {
    let icon;

    if (hasFeature === true) {
        icon = "../../src/assets/check.png";
    }
    else {
        icon = "../../src/assets/minus.png";
    }

    return (<span className="feature"> <img src={icon} alt="icon" width="16"/> <p>{title}</p></span>)
}

export default Feature;
