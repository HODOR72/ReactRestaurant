import React from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../redux/store'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FoodBlock } from '../components'
import { Skeleton } from './foodBlock/Skeleton'
import { foodBlockT } from './types'
import { fetchFoodBlocks } from '../redux/slices/foodBlockSlice'
import { getFoodBlocks } from '../redux/slices/selectors'

const PopularFood = ({ id = '0' }) => {
	const dispatch = useAppDispatch()
	const { items, status } = useSelector(getFoodBlocks)
	React.useEffect(() => {
		if (!items.length) {
			dispatch(fetchFoodBlocks())
		}
	}, [])
	return (
		<>
			<Swiper
				spaceBetween={20}
				slidesPerView={'auto'}
				speed={700}
				className='food__swiper'
			>
				{status === 'loading'
					? [...new Array(7)].map(
							(
								_,
								id // 6 - NUMBER OF POPULAR FOOD BLOCKS
							) => (
								<SwiperSlide className='food__cart' key={id}>
									<Skeleton />
								</SwiperSlide>
							)
					  )
					: items.map((block: foodBlockT) =>
							block.popular && block.id !== id ? (
								<SwiperSlide className='food__cart' key={block.id}>
									<FoodBlock {...block} />
								</SwiperSlide>
							) : (
								''
							)
					  )}
			</Swiper>
		</>
	)
}

export default PopularFood
