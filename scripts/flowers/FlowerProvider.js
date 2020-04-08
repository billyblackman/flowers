let flowers = []

export const useFlowers = () => flowers.slice()

 export const getFlowers = () => {
    return fetch("http://localhost:8088/flowers")
        .then(response => response.json())
        .then(response => flowers = response)
}