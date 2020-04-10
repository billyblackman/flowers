let relationships = []

export const useNurseryFlowerRalationships = () => relationships.slice()

export const getNurseryFlowerRelationships = () => fetch("http://localhost:8088/nurseryFlowerRelationships")
    .then(response => response.json())
    .then(data => relationships = data)