import boughtTvs from "./boughtTvs.js";
import soldTvs from "./soldTvs.js";

function remaining() {

    return boughtTvs() - soldTvs();
}

export default remaining;