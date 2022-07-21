import React from 'react'
import ContentLoader from 'react-content-loader'

const FullFoodBlockSkeleton: React.FC = () => (
	<ContentLoader
		className='full__block'
		speed={2}
		width={1200}
		height={400}
		viewBox='0 0 1240 414'
		backgroundColor='#b5b5b5'
		foregroundColor='#bdbdbd'
	>
		<rect x='0' y='0' rx='5' ry='5' width='620' height='414' />
		<rect x='670' y='18' rx='5' ry='5' width='165' height='34' />
		<rect x='670' y='60' rx='5' ry='5' width='187' height='35' />
		<rect x='670' y='206' rx='5' ry='5' width='79' height='33' />
		<rect x='670' y='263' rx='10' ry='10' width='135' height='46' />
		<rect x='723' y='271' rx='5' ry='5' width='62' height='28' />
		<rect x='813' y='271' rx='5' ry='5' width='62' height='28' />
		<rect x='670' y='337' rx='6' ry='6' width='230' height='17' />
		<rect x='670' y='366' rx='5' ry='5' width='240' height='18' />
	</ContentLoader>
)

export default FullFoodBlockSkeleton
