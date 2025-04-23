import { useSelector, useDispatch } from 'react-redux'
import { addItem, updateQuantity, removeItem } from './data'

const ItemCard = ({ item }) => {
    const theme = useSelector(state => state.data.theme)
    const dispatch = useDispatch()
    var stars = ''
    for (var i = 0; i < item.stars; i++)
        stars += '⭐ '
    return (
        <div
            className={`border rounded-2xl px-2 w-[calc(100%-10px)] hover:w-full ${theme.bgInside + ' ' + theme.bgInsideHover} flex justify-between`}
            onClick={event => {
                if (item.quantity == undefined) //tránh nhấn nút xóa xong tự động nhấn thêm vào card
                    dispatch(addItem(
                        { ...item, quantity: 1 }
                    ))
            }}
        >
            <div>
                <h2>{item.name}</h2>
                <div>{stars}</div>
                <span>{item.price}</span>
            </div>
            {
                item.quantity &&
                <div className='flex flex-col items-end pt-2'>
                    <div className='flex gap-4'>
                        quantity:
                        <input type="number" name="" id="" className={`w-[50px] rounded-md outline-0 border-[1px] focus:border-3 px-1 ${theme.borderInputHover}`}
                            value={item.quantity} onChange={event => {
                                if (event.target.value <= 0)
                                    dispatch(removeItem(item))
                                const i = { ...item, quantity: event.target.value }
                                dispatch(updateQuantity(i))
                            }}
                        />
                    </div>
                    <button className='px-2 py-1 bg-amber-500 rounded-md hover:cursor-pointer active:bg-amber-600'
                        onClick={event => {
                            dispatch(removeItem(item))
                        }}
                    >
                        Xóa
                    </button>
                </div>
            }
        </div>
    )
}

const ShoppingCart = () => {
    const theme = useSelector(state => state.data.theme)
    const items = useSelector(state => state.data.items)
    const cartItems = useSelector(state => state.data.cartItems)
    return (
        <div className='flex flex-col gap-8 items-center'>
            <div className={`w-[600px] h-[250px] flex flex-col items-center overflow-y-scroll gap-4 border-2 border-gray-300 rounded-2xl ${theme.bgInside} shadow-[0_0_7px]`}>
                <h2 className='font-bold text-[30px]'>Danh sách sản phẩm đã chọn</h2>
                {
                    cartItems.map(i => (
                        <div className='w-[calc(100%-50px)] flex justify-center' key={i.name}>
                            <ItemCard item={i} />
                        </div>
                    ))
                }
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                {
                    items.map(i => (
                        <div className='w-[260px] flex justify-center' key={i.name}>
                            <ItemCard item={i} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ShoppingCart