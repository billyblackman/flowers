export const Retailer = (retailerObject, distributorObject) => {
    return `
        <h4>${retailerObject.name}</h4>
        <div>Distributor: ${distributorObject.name}</div>
    `
}