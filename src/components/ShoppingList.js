import { useState } from 'react'
import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem'
import Categories from './Categories'

function ShoppingList({ cart, updateCart }) {

    const [activeCategory, setActiveCategory] = useState('')
    // Méthode 1.
    // const categories = plantList.reduce(function (categoryArray, currentValue) {
    //     if (categoryArray.indexOf(currentValue['category']) === -1) {
    //         categoryArray.push(currentValue['category'])
    //     }
    //     return categoryArray
    // }, [])

    // Méthode 2.
    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

    function addToCart(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

    return (
        <div className='lmj-shopping-list'>
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>

            <ul className='lmj-plant-list'>
                {plantList.map(({ id, cover, name, water, light, price, category }) =>
                        !activeCategory || activeCategory === category ? (
                            <div key={id}>
                                <PlantItem
                                    cover={cover}
                                    name={name}
                                    water={water}
                                    light={light}
                                    price={price}
                                />
                                <button onClick={() => addToCart(name, price)}>Ajouter</button>
                            </div>
                        ) : null
                    )}
            </ul>
        </div>
    )
}

export default ShoppingList