import React from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../redux/store'
import { Swiper, SwiperSlide } from 'swiper/react'
import { InfoBlock, FoodBlock, ContactsBlock } from '../components'
import { fetchFoodBlocks } from '../redux/slices/foodBlockSlice'
import { Skeleton } from '../components/foodBlock/Skeleton'
import HeaderBackground from '../assets/img/header-bg.jpg'
import { foodBlockT } from '../components/types'
import { getFoodBlocks } from '../redux/slices/selectors'

const dishNames = ['Холодные закуски', 'блюда на углях', 'супы']

const Home: React.FC = () => {
	const dispatch = useAppDispatch()

	React.useEffect(() => {
		if (!items.length) {
			dispatch(fetchFoodBlocks())
		}
	}, [])

	const { items, status } = useSelector(getFoodBlocks)
	return (
		<>
			<section className='food'>
				<img
					src={HeaderBackground}
					alt='background-img'
					className='food__background-img'
				/>
				{status === 'error' ? (
					<div>Ничего не найдено.</div>
				) : (
					dishNames.map((dishName, id) => (
						<React.Fragment key={id}>
							<div className='container'>
								<h1 className='mark-title food__title' key={id}>
									{dishName}
								</h1>
							</div>
							<Swiper
								spaceBetween={20}
								slidesPerView={'auto'}
								speed={700}
								className='food__swiper'
							>
								{status === 'loading'
									? [...new Array(10)].map((_, id) => (
											<SwiperSlide className='food__cart' key={id}>
												<Skeleton />
											</SwiperSlide>
									  ))
									: items.map((block: foodBlockT) =>
											block.title === dishName ? (
												<SwiperSlide className='food__cart' key={block.id}>
													<FoodBlock {...block} />
												</SwiperSlide>
											) : (
												''
											)
									  )}
							</Swiper>
						</React.Fragment>
					))
				)}
			</section>
			<InfoBlock />
			<ContactsBlock />
		</>
	)
}
export default Home
