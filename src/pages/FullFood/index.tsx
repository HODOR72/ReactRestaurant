import React from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useAppDispatch } from '../../redux/store'
import { ContactsBlock } from '../../components'
import { PopularFood } from '../../components'
import { addItem } from '../../redux/slices/cartSlice'
import FullFoodBlockSkeleton from './FullFoodBlockSkeleton'
import { foodBlockT } from '../../components/types'

const FullFoodBlock: React.FC = () => {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()

	const [foodBlock, setFoodBlock] = React.useState<foodBlockT>()
	const { id } = useParams()

	function addToCart() {
		if (foodBlock) dispatch(addItem(foodBlock))
	}

	React.useEffect(() => {
		async function fetchFoodBlock() {
			try {
				const { data } = await axios.get(
					`https://62cd9fbe066bd2b699295f7d.mockapi.io/items/${id}`
				)
				setFoodBlock(data)
			} catch (error) {
				console.log('Ошибка при получении пиццы!')
				navigate('/')
			}
		}
		fetchFoodBlock()
		window.scrollTo(0, 0)
	}, [navigate])
	if (!foodBlock) {
		return (
			<>
				<div className='container'>
					<section className='full'>
						<Link to='/' className='full__link'>
							Вернуться назад
						</Link>
						{[...new Array(1)].map((_, index) => (
							<FullFoodBlockSkeleton key={index} />
						))}
					</section>
					<h1 className='mark-title food__title' key={id}>
						С ЭТИМ ТОВАРОМ ПОКУПАЮТ
					</h1>
				</div>
				<PopularFood />
				<ContactsBlock />
			</>
		)
	}
	return (
		<>
			<div className='container'>
				<section className='full'>
					<Link to='/' className='full__link'>
						Вернуться назад
					</Link>
					<div className='full__block'>
						<div className='full__block-pic'>
							<img src={foodBlock.imageUrl} alt='foodBlock-img' />
						</div>
						<div className='full__block-info'>
							<div className='full__block-description'>
								<h1 className='full__title'>{foodBlock.name}</h1>
								<p className='gray-text full__text'>{foodBlock.description}</p>
							</div>
							<p className='white-text full__text'>Вес: {foodBlock.weight}г</p>
							<div className='full__buy'>
								<a href='##' className='button-buy' onClick={addToCart}>
									В корзину
								</a>
								<p className='full__price'>{foodBlock.price} ₽</p>
							</div>
							<div className='full__carts'>
								<div className='full__cart'>
									<p className='gray-text'>Белки</p>
									<p className='white-text'>17.23</p>
								</div>
								<div className='full__cart'>
									<p className='gray-text'>Жиры</p>
									<p className='white-text'>7.63</p>
								</div>
								<div className='full__cart'>
									<p className='gray-text'>Углеводы</p>
									<p className='white-text'>22.35</p>
								</div>
								<div className='full__cart'>
									<p className='gray-text'>Ккал</p>
									<p className='white-text'>{foodBlock.weight}</p>
								</div>
								<div className='full__cart'>
									<p className='gray-text'>Вес</p>
									<p className='white-text'>{foodBlock.weight} г</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<h1 className='mark-title food__title' key={id}>
					С ЭТИМ ТОВАРОМ ПОКУПАЮТ
				</h1>
			</div>
			<PopularFood id={foodBlock.id} />
		</>
	)
}

export default FullFoodBlock
