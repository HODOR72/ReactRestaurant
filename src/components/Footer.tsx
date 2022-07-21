import { useSelector } from 'react-redux'
import { getActiveBurger } from '../redux/slices/headerSlice'

const Footer: React.FC = () => {
	const activeBurger = useSelector(getActiveBurger)
	const scrollToTopHandler = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}
	return (
		<footer className='footer'>
			<div className='footer__wrapper'>
				<div className='toScrollUp' onClick={scrollToTopHandler}></div>
				<div className='footer__block'>
					<div className='logo footer__logo'>LOGOS</div>
					<p className='gray-text footer__text'>
						© ООО СК «АПШЕРОН» Все права защищены. 2010-2020
					</p>
					<a href='##' className='footer__link'>
						Пользовательское соглашение
					</a>
					<a href='##' className='footer__link'>
						Карта сайта
					</a>
					<a href='##' className='footer__link'>
						Политика конфиденциальности
					</a>
				</div>
				<nav
					className={`footer__nav ${activeBurger ? 'footer__nav-active' : ''}`}
				>
					<ul className='footer__nav-list'>
						<li className='footer__nav-item'>
							<a href='##' className='footer__nav-link'>
								О ресторане
							</a>
						</li>
						<li className='footer__nav-item'>
							<a href='##' className='footer__nav-link'>
								Условия Доставки
							</a>
						</li>
						<li className='footer__nav-item'>
							<a href='##' className='footer__nav-link'>
								Возврат товара
							</a>
						</li>
						<li className='footer__nav-item'>
							<a href='##' className='footer__nav-link'>
								Акции
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</footer>
	)
}

export default Footer
