import OnionSvg from '../assets/img/onion.svg'
import FlashSvg from '../assets/img/flash.svg'
import ChefSvg from '../assets/img/chef.svg'

const InfoBlock: React.FC = () => {
	return (
		<section className='info'>
			<div className='container'>
				<div className='info__blocks'>
					<div className='info__block'>
						<h3 className='info__title'>Наше кафе</h3>
						<p className='gray-text info__text'>
							Мы расположены в одном из самых живописных мест города — на берегу
							реки, это ваш оазис в черте города, куда можно сбежать от шумного
							и пыльного мегаполиса. Мы, действительно уникальные, ведь все
							продумано до мелочей: проект построен из дикого закарпатского
							сруба, камин в основном зале ресторана и панорамные окна с видом
							на реку, уютные беседки на берегу реки и лучшая видовая террасса,
							шатер с посадкой на 200 человек, сказочный детский домик и
							бассейн.
						</p>
						<a href='##' className='info-link'>
							Посмотреть меню
						</a>
					</div>
					<div className='info__block'>
						<div className='info__cart'>
							<img src={OnionSvg} alt='onion-svg' />
							<p className='info__description'>Свежайшие продукты</p>
						</div>
						<div className='info__cart'>
							<img src={FlashSvg} alt='flash-svg' />
							<p className='info__description'>Быстрая доставка</p>
						</div>
						<div className='info__cart'>
							<img src={ChefSvg} alt='chef-svg' />
							<p className='info__description'>Лучшие повара</p>
						</div>
						<div className='info__cart'>
							<img src={OnionSvg} alt='onion-svg' />
							<p className='info__description'>Свежайшие продукты</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default InfoBlock
