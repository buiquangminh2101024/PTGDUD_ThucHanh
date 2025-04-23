import { useSelector, useDispatch } from 'react-redux'
import { addTodo, toggleTodo, removeTodo, removeTodoAll } from './data'
import { useState } from 'react'

const TodoList = () => {
    const dispatch = useDispatch()
    const todoList = useSelector(state => state.data.todoList)
    const theme = useSelector(state => state.data.theme)
    const [name, setName] = useState('')
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    return (
        <div className='flex flex-col gap-8'>
            <div className={`w-[600px] h-[250px] flex flex-col items-center justify-center gap-4 border-2 border-gray-300 rounded-2xl ${theme.bgInside} shadow-[0_0_7px]`}>
                <h2 className='font-bold text-[30px]'>Thêm danh sách công việc trong ngày</h2>
                <div className='w-1/2 grid grid-cols-2 gap-2'>
                    <span>Tên:</span>
                    <input type="text" value={name} onChange={event => setName(event.target.value)} className={`rounded-md outline-0 border-[1px] focus:border-3 px-1 ${theme.borderInputHover}`}/>
                    <span>Từ:</span>
                    <input type="time" name="" id="" value={from} onChange={event => setFrom(event.target.value)}  className={`rounded-md outline-0 border-[1px] focus:border-3 px-1 ${theme.borderInputHover}`}/>
                    <span>Đến:</span>
                    <input type="time" name="" id="" value={to} onChange={event => setTo(event.target.value)}  className={`rounded-md outline-0 border-[1px] focus:border-3 px-1 ${theme.borderInputHover}`}/>
                </div>
                <div className='flex gap-4'>
                    <button
                        className='px-4 py-3 bg-amber-500 rounded-2xl hover:cursor-pointer active:bg-amber-600'
                        onClick={event => dispatch(addTodo({
                            name: name,
                            from: from,
                            to: to,
                            complete: false
                        }))}
                    >
                        Thêm
                    </button>
                    <button
                        className='px-4 py-3 bg-amber-500 rounded-2xl hover:cursor-pointer active:bg-amber-600'
                        onClick={event => dispatch(removeTodoAll())}
                    >
                        Xóa hết
                    </button>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th className='border-[1px] border-gray-300'>Tên công việc</th>
                        <th className='border-[1px] border-gray-300'>Thời gian bắt đầu</th>
                        <th className='border-[1px] border-gray-300'>Thời gian kết thúc</th>
                        <th className='border-[1px] border-gray-300'>Hoàn thành</th>
                        <th className='border-[1px] border-gray-300'></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todoList.map(i => (
                            <tr key={i.name + i.from + i.to}>
                                <td className='border-[1px] border-gray-300'>
                                    <div className='flex items-center justify-center'>{i.name}</div>
                                </td>
                                <td className='border-[1px] border-gray-300'>
                                    <div className='flex items-center justify-center'>{i.from}</div>
                                </td>
                                <td className='border-[1px] border-gray-300'>
                                    <div className='flex items-center justify-center'>{i.to}</div>
                                </td>
                                <td className='border-[1px] border-gray-300'>
                                    <div className='flex items-center justify-center'>
                                        <input type="checkbox" name="" id="" checked={i.complete} onChange={event => {
                                            const todo = { ...i, complete: !i.complete }
                                            dispatch(toggleTodo(todo))
                                        }} />
                                    </div>
                                </td>
                                <td className='border-[1px] border-gray-300'>
                                    <div className='flex items-center justify-center'>
                                        <button className='bg-red-400 rounded-md hover:cursor-pointer active:bg-red-600' onClick={event => dispatch(removeTodo(i))}>Xóa</button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TodoList