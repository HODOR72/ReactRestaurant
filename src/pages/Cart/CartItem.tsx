import { useDispatch } from 'react-redux'
import { addItem, deleteItem, reduceItem } from '../../redux/slices/cartSlice'
import { foodBlockT } from '../../components/types'
function CartItem({ id, imageUrl, name, description, price, count}: foodBlockT) {
	const dispatch = useDispatch()
	const foodBlock: foodBlockT = arguments[0]

	const addCount = () => {
		dispatch(addItem(foodBlock))
	}
	const reduceCount = () => {
		dispatch(reduceItem(id))
	}
	const deleteCount = () => {
		dispatch(deleteItem(id))
	}

	return (
		<>
			<div className='cart__block'>
				<img src={imageUrl} alt='cart-img' className='cart__img' />
				<div className='cart__block-wrapper'>
					<div className='cart__description'>
						<h2 className='title cart__description-title'>{name}</h2>
						<p className='gray-text cart__description-text'>{description}</p>
					</div>
					<div className='cart__block-ui'>
						<div className='cart__buttons-wrapper'>
							<button
								className='cart__button cart__button-minus'
								onClick={reduceCount}
								disabled={count === 1}
							></button>
							<p>{count < 99 ? count : '99+'}</p>
							<button
								className='cart__button cart__button-plus'
								onClick={addCount}
							></button>
						</div>
						<p>{count ? count * price : ''} ₽</p>
						<button
							className='cart__button cart__button-delete'
							onClick={deleteCount}
						></button>
					</div>
				</div>
			</div>
		</>
	)
}

export default CartItem
