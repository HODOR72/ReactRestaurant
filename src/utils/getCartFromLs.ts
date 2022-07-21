export const getCartFromLs = () => {
	const data = localStorage.getItem('cart-food')
	return data ? JSON.parse(data) : []
}