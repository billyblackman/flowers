let distributorNurseryRelationships = []

export const useDistributorNurseryRelationships = () => distributorNurseryRelationships.slice()

export const getDistributorNurseryRelationships = () => fetch("http://localhost:8088/distributorNurseryRelationships")
    .then(response => response.json())
    .then(data => distributorNurseryRelationships = data)