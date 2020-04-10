export const Retailer = (retailerObject, distributorObject, nurseryArray, flowerArray) => {
    return `
        <h4>${retailerObject.name}</h4>
        <div>Distributor: ${distributorObject.name}</div>
            <div>Source Nurseries: 
                <ul>
                    ${
                        nurseryArray.map(nursery => `<li>${nursery.name}</li>`).join("")
                    }
                </ul>
            <div>Available Flowers: 
                <ul>
                    ${
                        flowerArray.map(flower => `<li>${flower.color} ${flower.commonName}</li>`).join("")
                    }
                </ul>
            </div>
        </div>
    `
}