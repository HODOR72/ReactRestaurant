import { Link } from 'react-router-dom'

const NotFound: React.FC = () => {
	return (
		<div className='container loading-text'>
			<div style={{ marginBottom: '30px' }}>
				Произошла ошибка, ничего не найдено
			</div>
			<Link to='/react-app'>Вернутся на начальную страницу</Link>
		</div>
	)
}

export default NotFound
