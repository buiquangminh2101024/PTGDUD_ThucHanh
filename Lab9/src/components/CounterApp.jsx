import { useSelector, useDispatch } from 'react-redux'
import { incCount, descCount } from './data'

const CounterApp = () => {
    const dispatch = useDispatch()
    const count = useSelector(state => state.data.count)
    return (
        <>
            <div className='w-[600px] h-[200px] flex flex-col items-center justify-center gap-4 border-2 border-gray-300 rounded-2xl shadow-[0_0_7px]'>
                <h2 className='font-bold text-[30px]'>Nhấn hai nút ở dưới để tăng giảm giá trị</h2>
                <div className='w-1/2 flex items-center justify-around'>
                    <button className='px-4 py-3 bg-amber-500 rounded-2xl hover:cursor-pointer active:bg-amber-600' onClick={event => dispatch(descCount())}>Giảm</button>
                    <span>{count}</span>
                    <button className='px-4 py-3 bg-amber-500 rounded-2xl hover:cursor-pointer active:bg-amber-600' onClick={event => dispatch(incCount())}>Tăng</button>
                </div>
            </div>
        </>
    )
}

export default CounterApp