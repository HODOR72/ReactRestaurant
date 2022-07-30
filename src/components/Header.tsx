import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getItems } from '../redux/slices/selectors'
import { getActiveBurger, setActiveBurger } from '../redux/slices/headerSlice'
import { foodBlockT } from './types'
import ShoppingBagSvg from '../assets/img/shopping-bag.svg'

const Header: React.FC = () => {
	const dispatch = useDispatch()
	let isMounted = React.useRef(false)
	const allPurchase = useSelector(getItems)
	const activeBurger = useSelector(getActiveBurger)
	const body = document.body
	let scrollPosition = 0
	React.useEffect(() => {
		if (isMounted.current) {
			const json = JSON.stringify(allPurchase)
			localStorage.setItem('cart-food', json)
		}
		isMounted.current = true
	}, [allPurchase])

	const numberOfPurchase = allPurchase.reduce(
		(prev: number, curr: foodBlockT) => prev + curr.count,
		0
	)

	const activateBurger = () => {
		dispatch(setActiveBurger(!activeBurger))

		scrollPosition = window.pageYOffset
		body.style.overflow = 'hidden'
		body.style.position = 'fixed'
		body.style.top = `-${scrollPosition}px`
		body.style.width = '100%'
	}

	const closeBurger = () => {
		dispatch(setActiveBurger(false))

		body.style.removeProperty('overflow')
		body.style.removeProperty('position')
		body.style.removeProperty('top')
		body.style.removeProperty('width')
		window.scrollTo(0, scrollPosition)
	}

	return (
		<header className='header'>
			<div className='container'>
				<nav className='header__navbar menu'>
					<div
						className={`burger ${activeBurger ? 'active-burger' : ''}`}
						onClick={activateBurger}
					>
						<span></span>
					</div>
					<div className='logo header__logo'>
						<Link to='/' onClick={closeBurger}>
							LOGOS
						</Link>
					</div>
					<div className='header__contacts'>
						<span>Конакты:</span>
						<p className='header__text'>+7 (917) 510-57-59</p>
					</div>
					<Link to='/cart' className='button-cart' onClick={closeBurger}>
						Корзина
						<span>
							{numberOfPurchase !== 0 ? (
								numberOfPurchase >= 99 ? (
									'99+'
								) : (
									numberOfPurchase
								)
							) : (
								<img src={ShoppingBagSvg} alt='shoppingBag-svg' />
							)}
						</span>
					</Link>
				</nav>
			</div>
		</header>
	)
}

export default Header
