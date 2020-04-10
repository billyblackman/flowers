let distributors = []

export const useDistributors = () => distributors.slice()

export const getDistributors = () => fetch("http://localhost:8088/distributors")
    .then(response => response.json())
    .then(data => distributors = data)