import { useRetailers } from "./RetailerProvider.js"
import { Retailer } from "./Retailer.js"

const contentTarget = document.querySelector(".retailers")

export const retailerList = () => {
    
    const allTheRetailers = useRetailers()

    const render = () => {

        contentTarget.innerHTML = allTheRetailers.map(retailerObject => {
         
            return Retailer(retailerObject)
        })
        .join(`<br>`)
    }
    render()
}