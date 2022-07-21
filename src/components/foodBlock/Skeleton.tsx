import ContentLoader from 'react-content-loader'

export const Skeleton = () => (
	<ContentLoader
		speed={2}
		width={325}
		height={410}
		viewBox='0 0 325 410'
		backgroundColor='#494544'
		foregroundColor='#504b4a'
	>
		<rect x='0' y='0' rx='5' ry='5' width='325' height='216' />
		<rect x='21' y='244' rx='0' ry='0' width='127' height='27' />
		<rect x='224' y='250' rx='0' ry='0' width='71' height='20' />
		<rect x='23' y='296' rx='0' ry='0' width='260' height='39' />
		<rect x='20' y='370' rx='0' ry='0' width='71' height='26' />
		<rect x='185' y='360' rx='10' ry='10' width='125' height='48' />
	</ContentLoader>
)
