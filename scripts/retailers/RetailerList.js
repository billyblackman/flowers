import { useRetailers } from "./RetailerProvider.js"
import { Retailer } from "./Retailer.js"
import { useDistributors } from "../distributors/DistributorProvider.js"
import { useNurseries } from "../nurseries/NurseryProvider.js"
import { useDistributorNurseryRelationships } from "../DistributorNurseryRelationshipProvider.js"
import { useFlowers } from "../flowers/FlowerProvider.js"
import { useNurseryFlowerRelationships } from "../NurseryFlowerRelationshipProvider.js"

const contentTarget = document.querySelector(".retailers")

export const retailerList = () => {
    
    const allTheRetailers = useRetailers()
    const allTheFlowers = useFlowers()
    const allTheDistributors = useDistributors()
    const allTheNurseries = useNurseries()
    const allTheDistributorNurseryRelationships = useDistributorNurseryRelationships()
    const allTheNurseryFlowerRelationships = useNurseryFlowerRelationships()

    const render = () => {

        contentTarget.innerHTML = allTheRetailers.map(retailerObject => {

            //Find the distributor for each retailer

            const theMatchingDistributor = allTheDistributors.find(distributor => retailerObject.distributorId === distributor.id)

            //Filter the distributor/nursery relationships and return an array of the matching distributor's nursery relationships

            const theMatchingDistributorNurseryRelationships = allTheDistributorNurseryRelationships.filter(relationship => theMatchingDistributor.id === relationship.distributorId)

            //Map over the array of the distributor's nursery relationships and return an array of the matching nurseries

            const theMatchingNurseries = theMatchingDistributorNurseryRelationships.map( relationship => {
                return allTheNurseries.find(nursery => relationship.nurseryId === nursery.id)
            })

            //Filter the nursery/flower relationships and return an array of the matching nursery's flower relationships

            const theMatchingNurseryFlowerRelationships = theMatchingNurseries.map( nursery => {
                return allTheNurseryFlowerRelationships.filter( relationship => nursery.id === relationship.nurseryId)
            })

            //Map over the array of the nursery's flower relationships and return an array of the flowers they produce

            const theMatchingFlowers = theMatchingNurseryFlowerRelationships.flat().map( relationship => {
                return allTheFlowers.find( flower => relationship.flowerId === flower.id)
            })
            
            //Pass the retailer, its distributor, and the distributor's nursery sources into Retailer()
         
            return Retailer(retailerObject, theMatchingDistributor, theMatchingNurseries, theMatchingFlowers)
        })
        .join(`<br>`)
    }
    render()
}