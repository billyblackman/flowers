let relationships = []

export const useNurseryFlowerRelationships = () => relationships.slice()

export const getNurseryFlowerRelationships = () => fetch("http://localhost:8088/nurseryFlowerRelationships")
    .then(response => response.json())
    .then(data => relationships = data)