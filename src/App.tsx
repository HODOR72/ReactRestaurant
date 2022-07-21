import 'swiper/css'
import '../src/scss/style.scss'
import React from 'react'
import { Routes, Route } from 'react-router'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
const Cart = React.lazy(() => import('./pages/Cart'))
const NotFound = React.lazy(() => import('./pages/NotFound'))
const FullFoodBlock = React.lazy(() => import('./pages/FullFood'))

function App() {
	return (
		<Routes>
			<Route path='/' element={<MainLayout />}>
				<Route path='' element={<Home />}></Route>
				<Route
					path='cart'
					element={
						<React.Suspense
							fallback={
								<div className='loading-text'>
									Идет загрузка, пожалуйста подождите.
								</div>
							}
						>
							<Cart />
						</React.Suspense>
					}
				></Route>
				<Route
					path='food/:id'
					element={
						<React.Suspense
							fallback={
								<div className='loading-text'>
									Идет загрузка, пожалуйста подождите.
								</div>
							}
						>
							<FullFoodBlock />
						</React.Suspense>
					}
				></Route>
				<Route
					path='*'
					element={
						<React.Suspense
							fallback={
								<div className='loading-text'>
									Идет загрузка, пожалуйста подождите.
								</div>
							}
						>
							<NotFound />
						</React.Suspense>
					}
				></Route>
			</Route>
		</Routes>
	)
}

export default App
