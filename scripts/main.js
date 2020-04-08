import { getFlowers } from "./flowers/FlowerProvider.js";
import { FlowerList } from "./flowers/FlowerList.js";

getFlowers()
    .then(FlowerList)