import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { editPrice } from '../../redux/slices/cartSlice'
import CartItem from './CartItem'
import { foodBlockT } from '../../components/types'
import EmptyCartSvg from '../../assets/img/empty-cart.svg'
import { getItems } from '../../redux/slices/selectors'

const Cart: React.FC = () => {
	const dispatch = useDispatch()
	const allPurchase = useSelector(getItems)
	const totalAmount = useSelector(
		(state: RootState) => state.cartSliceReducer.totalPrice
	)

	const numberOfPurchases = allPurchase.reduce(
		(prev, curr) => prev + curr.count,
		0
	)

	React.useEffect(() => {
		if (allPurchase.length) {
			dispatch(
				editPrice(
					allPurchase.reduce(
						(prev: number, curr: foodBlockT) => prev + curr.price * curr.count,
						0
					)
				)
			)
		} else {
			dispatch(editPrice(0))
		}
	}, [allPurchase])

	return (
		<section className='cart'>
			<div className='container cart__wrapper'>
				<div className='cart__intro'>
					<Link to='/' className='cart__link'>
						к выбору блюда
					</Link>
					<h1 className='mark-title cart__title'>
						Корзина
						<span>
							в корзине{' '}
							{numberOfPurchases === 0
								? 'отсутствует товар'
								: `${numberOfPurchases} товаров`}
						</span>
					</h1>
				</div>
				<div className='cart__blocks cart__blocks-backet'>
					{allPurchase.length > 0 ? (
						allPurchase.map(elem => <CartItem {...elem} />)
					) : (
						<div className='cart__blocks-empty'>
							<img src={EmptyCartSvg} alt='emprtyCart-svg' />
							<p className='cart__title'>Корзина пустая</p>
							<Link to='/' className='button'>
								Посмотреть меню
							</Link>
						</div>
					)}
				</div>
				<div className='cart__info'>
					<div className='cart__info-block'>
						<h4 className='cart__info-title'>
							<span className='gray-text'>Итого: </span>
							{totalAmount} ₽
						</h4>
						{totalAmount <= 1500 ? (
							<p className='cart__info-text'>
								До бесплатной доставки не хватает:{' '}
								<span>{1500 - totalAmount} ₽</span>
							</p>
						) : (
							<p className='cart__info-text'>Доставка бесплатная.</p>
						)}
					</div>
					<button className='button cart__info-button'>Оформить заказ</button>
				</div>
			</div>
		</section>
	)
}
export default Cart
