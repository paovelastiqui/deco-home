import { Link } from 'react-router-dom'
import { useCounter } from '../hooks/useCounter'

export const ItemDetail = ({ item }) => {
    const { count, increment, decrement, reset } = useCounter(1, item.stock, 1)

    const handleAddToCart = () => {
        console.log(`Estoy comprando ${count} de ${item.name}`)
        console.log("Producto agregado al carrito")
    }
    return (

        <div className="bg-white p-8 rounded-lg max-w-md">
            <Link to={'/'}>
                <button className="absolute top-4 right-4 text-gray-700 hover:text-gray-900">Cerrar</button>
            </Link>

            <img className="w-full h-64 object-cover mb-6" src={`../img/${item.img}`} alt={`${item.category}`} />
            <div className="text-center">
                <h2 className="text-2x1 font-bold mb-2">{item.category} {item.name}</h2>
                <p className="text-gray-700 mb-2 font-semibold">Tamaño: {item.sizes}</p>
                <p className="text-gray-700 mb-2 font-semibold">Material: {item.material}</p>
                <p className="text-gray-700 mb-2 font-semibold">Stock: {item.stock}</p>
                <p className="text-gray-700 mb-2 font-semibold">Precio: ${item.price}</p>
                <div className="container mx-auto mt-8">
                    <div className="flex items-center justify-center space-x-4">
                        <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={decrement}>
                            -
                        </button>
                        <span className="text-xl font-bold">{count}</span>
                        <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={increment}>
                            +
                        </button>
                        <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={reset}>
                            Reset
                        </button>
                        <Link to={'/checkout'}>
                            <button className="bg-gray-800 text-white px-4 py-2 rounded" onClick={handleAddToCart}>
                                Agregar al carrito
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}