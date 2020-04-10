import { getFlowers } from "./flowers/FlowerProvider.js";
import { FlowerList } from "./flowers/FlowerList.js";
import { getRetailers } from "./retailers/RetailerProvider.js";
import { retailerList } from "./retailers/RetailerList.js";
import { getDistributors } from "./distributors/DistributorProvider.js";
import { getNurseries } from "./nurseries/NurseryProvider.js";
import { getDistributorNurseryRelationships } from "./DistributorNurseryRelationshipProvider.js";

getFlowers()
    .then(FlowerList)

getRetailers()
    .then(getDistributors)
    .then(getNurseries)
    .then(getDistributorNurseryRelationships)
    .then(retailerList)