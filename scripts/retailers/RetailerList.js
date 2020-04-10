import { useRetailers } from "./RetailerProvider.js"
import { Retailer } from "./Retailer.js"
import { useDistributors } from "../distributors/DistributorProvider.js"

const contentTarget = document.querySelector(".retailers")

export const retailerList = () => {
    
    const allTheRetailers = useRetailers()
    const allTheDistributors = useDistributors()

    const render = () => {

        contentTarget.innerHTML = allTheRetailers.map(retailerObject => {

            //Find the distributor for each retailer

            const theMatchingDistributor = allTheDistributors.find(distributor => retailerObject.distributorId === distributor.id)
         
            return Retailer(retailerObject, theMatchingDistributor)
        })
        .join(`<br>`)
    }
    render()
}