import { Header, Footer } from '../components'
import { Outlet } from 'react-router'

const MainLayout: React.FC = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	)
}

export default MainLayout
