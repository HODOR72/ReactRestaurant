import { foodBlockT } from '../types'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../redux/slices/cartSlice'
import { Link } from 'react-router-dom'
import { selectCartById } from '../../redux/slices/selectors'

function FoodBlock({
	id,
	imageUrl,
	name,
	weight,
	description,
	price,
}: foodBlockT) {
	const dispatch = useDispatch()
	const foodCart = useSelector(selectCartById(id))
	const foodBlock = arguments[0]
	const href = `/food/${id}`

	function addToCart() {
		dispatch(addItem(foodBlock))
	}

	return (
		<>
			{foodCart?.count && <div className='food__count'>{foodCart.count}</div>}
			<Link to={href}>
				<img src={imageUrl} alt='cart-img' className='food__cart-img' />
			</Link>
			<div className='food__info'>
				<div className='food__info-wrapper'>
					<h2 className='title food__cart-title'>{name}</h2>
					<p className='white-text food__cart-text'>Вес: {weight}г</p>
				</div>
				<p className='gray-text food__cart-description'>{description}</p>
				<div className='food__info-wrapper'>
					<button className='button-buy food__button' onClick={addToCart}>
						В корзину
					</button>
					<span className='food__cart-price'>{price} ₽</span>
				</div>
			</div>
		</>
	)
}

export default FoodBlock
