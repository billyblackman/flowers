export const Retailer = (retailerObject, distributorObject, nurseryArray) => {
    return `
        <h4>${retailerObject.name}</h4>
        <div>Distributor: ${distributorObject.name}</div>
        <div>Source Nurseries: 
            <ul>
            ${
                nurseryArray.map(nursery => `<li>${nursery.name}</li>`).join("")
            }
            </ul>
            
        </div>
    `
}