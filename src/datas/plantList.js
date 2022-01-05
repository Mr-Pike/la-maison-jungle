import monstera from '../assets/monstera.jpg'
import lyrata from '../assets/lyrata.jpg'
import pothos from '../assets/pothos.jpg'
import succulent from '../assets/succulent.jpg'
import olivier from '../assets/olivier.jpg'
import basil from '../assets/basil.jpg'
import mint from '../assets/mint.jpg'
import calathea from '../assets/calathea.jpg'
import cactus from '../assets/cactus.jpg'

export const plantList = [
	{
		name: 'monstera',
		category: 'classique',
		id: '1ed',
        isBestSale: true,
        isSpecialOffer: false,
        light: 2,
		water: 3,
        cover: monstera,
		price: 15
	},
	{
		name: 'ficus lyrata',
		category: 'classique',
		id: '2ab',
        isBestSale: false,
        isSpecialOffer: false,
        light: 3,
		water: 1,
        cover: lyrata,
		price: 16
	},
	{
		name: 'pothos argenté',
		category: 'classique',
		id: '3sd',
        isBestSale: false,
        isSpecialOffer: true,
        light: 1,
		water: 2,
        cover: pothos,
		price: 9
	},
	{
		name: 'calathea',
		category: 'classique',
		id: '4kk',
		isBestSale: false,
        isSpecialOffer: false,
		light: 2,
		water: 3,
		cover: calathea,
		price: 20
	},
	{
		name: 'olivier',
		category: 'extérieur',
		id: '5pl',
        isBestSale: false,
        isSpecialOffer: false,
		light: 3,
		water: 1,
        cover: olivier,
		price: 6
	},
	{
		name: 'cactus',
		category: 'plante grasse',
		id: '8fp',
        isBestSale: false,
        isSpecialOffer: false,
		light: 2,
		water: 2,
        cover: cactus,
		price: 6
	},
	{
		name: 'basilique',
		category: 'extérieur',
		id: '7ie',
        isBestSale: false,
        isSpecialOffer: true,
		light: 2,
		water: 3,
        cover: basil,
		price: 5
	},
	{
		name: 'succulente',
		category: 'plante grasse',
		id: '9vn',
        isBestSale: false,
        isSpecialOffer: false,
		light: 2,
		water: 1,
        cover: succulent,
		price: 8
	},
	{
		name: 'menthe',
		category: 'extérieur',
		id: '6uo',
		isBestSale: false,
        isSpecialOffer: false,
		light: 2,
		water: 2,
		cover: mint,
		price: 4
	}
]