import { getFlowers } from "./flowers/FlowerProvider.js";
import { FlowerList } from "./flowers/FlowerList.js";
import { getRetailers } from "./retailers/RetailerProvider.js";
import { retailerList } from "./retailers/RetailerList.js";

getFlowers()
    .then(FlowerList)

getRetailers()
    .then(retailerList)