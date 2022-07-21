import React from 'react'
import FacebookSvg from '../assets/img/facebook.svg'
import VkSvg from '../assets/img/vk.svg'
import YoutubeSvg from '../assets/img/youtube.svg'
import InstagramSvg from '../assets/img/instagram.svg'

const ContactsBlock: React.FC = () => {
	return (
		<section className='contacts'>
			<div className='container'>
				<div className='contacts__carts'>
					<h4 className='title contacts__title'>Конакты</h4>
					<div className='contacts__cart'>
						<address className='contacts__adress'>
							<span className='gray-text contacts__descripton'>Наш адрес:</span>
							<br />
							<p className='contacts__text contacts__adress-text'>
								МО, городской округ Красногорск, село Ильинкое,
								Экспериментальная улица, 10
							</p>
							<span className='gray-text contacts__descripton'>
								Наша почта:
							</span>
							<p className='contacts__text contacts__adress-text'>
								72arkhipov@mail.ru
							</p>
						</address>
					</div>
					<div className='contacts__cart'>
						<a href='##' className='button contacts__btn'>
							ЗАБРОНИРОВАТЬ СТОЛ
						</a>
						<div className='contacts__cart-application'>
							<p className='contacts__tel'>+7 (917) 510-57-59</p>
							<span className='gray-text'>Звоните или оставляйте заявку</span>
						</div>
					</div>
					<div className='contacts__cart'>
						<p className='contacts__text'>Мы в соц сетях:</p>
						<img
							src={FacebookSvg}
							alt='facebook-svg'
							className='contact__soical-img'
						/>
						<img src={VkSvg} alt='vk-svg' className='contact__soical-img' />
						<img
							src={YoutubeSvg}
							alt='youtube-svg'
							className='contact__soical-img'
						/>
						<img
							src={InstagramSvg}
							alt='instagram-svg'
							className='contact__soical-img'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ContactsBlock
