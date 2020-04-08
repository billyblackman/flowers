import { Flower } from "./Flower.js"
import { useFlowers } from "./FlowerProvider.js"

const contentTarget = document.querySelector(".flowers")

export const FlowerList = () => {

    const allTheFlowers = useFlowers()

    const render = () => {
        
        contentTarget.innerHTML = allTheFlowers.map(flowerObject => {

            return Flower(flowerObject)
        })
        .join(`<br>`)
    }
    render()
}