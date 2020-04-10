import { useRetailers } from "./RetailerProvider.js"
import { Retailer } from "./Retailer.js"
import { useDistributors } from "../distributors/DistributorProvider.js"
import { useNurseries } from "../nurseries/NurseryProvider.js"
import { useDistributorNurseryRelationships } from "../DistributorNurseryRelationshipProvider.js"

const contentTarget = document.querySelector(".retailers")

export const retailerList = () => {
    
    const allTheRetailers = useRetailers()
    const allTheDistributors = useDistributors()
    const allTheNurseries = useNurseries()
    const allTheDistributorNurseryRelationships = useDistributorNurseryRelationships()

    const render = () => {

        contentTarget.innerHTML = allTheRetailers.map(retailerObject => {

            //Find the distributor for each retailer

            const theMatchingDistributor = allTheDistributors.find(distributor => retailerObject.distributorId === distributor.id)

            //Filter the distributor/nursery relationship and return an array of the matching distributor's nursery relationships

            const theMatchingDistributorNurseryRelationships = allTheDistributorNurseryRelationships.filter(relationship => theMatchingDistributor.id === relationship.distributorId)

            //Map over the array of the distributor's nursery relationships and return an array of the matching nurseries

            const theMatchingNurseries = theMatchingDistributorNurseryRelationships.map( relationship => {
                    return allTheNurseries.find(nursery => relationship.nurseryId === nursery.id)
                })

            //Pass the retailer, its distributor, and the distributor's nursery sources into Retailer()
         
            return Retailer(retailerObject, theMatchingDistributor, theMatchingNurseries)
        })
        .join(`<br>`)
    }
    render()
}