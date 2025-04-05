import { useEffect, useState } from 'react'
import close from '../assets/close.svg'
import { useDispatch } from 'react-redux'
import { editUserAsync, fecthData } from '../data/data'

const EditUser = ({ user, setCanShow }) => {
    const dispatch = useDispatch()

    const [customerName, setCustomerName] = useState(user.customerName)
    const [error1, setError1] = useState()
    const [company, setCompany] = useState(user.company)
    const [orderValue, setOrderValue] = useState(user.orderValue)
    const [error3, setError3] = useState()
    const orderDateInput = (date) => {
        const date1 = date.split('-')
        return new Date(date1[0], date1[1] - 1, parseInt(date1[2]) + 2).toISOString().split('T')[0]
    }
    const [orderDate, setOrderDate] = useState(orderDateInput(user.orderDate.split('T')[0]))
    const [status, setStatus] = useState(user.status)

    const handlingName = (name) => {
        const reg = /[A-Z][a-z\.]+( [A-Z][a-z\.]+)*/
        const isName = reg.test(name)
        if (isName) {
            setError1()
            return true
        }
        setError1("* Tên phải có chữ hoa ở đầu")
        return false
    }

    const handlingFloat = (number) => {
        const reg = /^\d+\.?\d{0,2}$/
        const isNumber = reg.test(number)
        if (isNumber) {
            setError3()
            return true
        }
        setError3("* Giá trị chỉ được nằm trong khoảng x+.xx")
        return false
    }

    const handlingEdit = () => {
        if (!handlingFloat(orderValue) || !handlingName(customerName)) {
            return
        }
        const date = orderDate.split('-')
        dispatch(editUserAsync({ id: user.id, customerName: customerName, company: company, orderValue: parseFloat(orderValue), orderDate: new Date(date[0], date[1] - 1, date[2]).toISOString(), status: status }))
    }

    return (
        <div className="w-full h-full p-4 flex flex-col">
            <div className="h-[40px] w-full flex items-center justify-between">
                <div className="font-bold text-[20px]">Sửa thông tin: {user.customerName}</div>
                <div>
                    <img src={close} alt="" className='hover:cursor-pointer hover:bg-pink-400 rounded-full' onClick={event => setCanShow(false)} />
                </div>
            </div>
            <div className="flex-auto w-full">
                <form action="" className='w-full h-full pt-6' onSubmit={event => {
                    event.preventDefault()
                    handlingEdit()
                    setCanShow(false)
                    }}>
                    <div className='w-full grid grid-cols-2 gap-4'>
                        Customer Name:
                        <div className='w-full'>
                            <input type="text" className='border-2 px-2 rounded-lg w-full' value={customerName} onChange={event => setCustomerName(event.target.value)} />
                            <span className='text-red-600'>{error1}</span>
                        </div>
                        Company:
                        <div className='w-full'>
                            <input type="text" className='border-2 px-2 rounded-lg w-full' value={company} onChange={event => setCompany(event.target.value)} />
                        </div>
                        Order Value:
                        <div className='w-full'>
                            <input type="text" className='border-2 px-2 rounded-lg w-full' value={orderValue} onChange={event => setOrderValue(event.target.value)} />
                            <span className='text-red-600'>{error3}</span>
                        </div>
                        Order Date:
                        <input type="date" name="" id="" className='border-2 rounded-lg' value={orderDate} onChange={event => setOrderDate(event.target.value)} />
                        Status:
                        <select name="" id="" className='border-2 rounded-lg' value={status} onChange={event => setStatus(event.target.value)}>
                            <option value="New">New</option>
                            <option value="In-progress">In-progress</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>
                </form>
            </div>
            <div className="h-[40px] w-full flex items-center justify-end">
                <button className='border-2 p-2 rounded-xl hover:cursor-pointer border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white'
                    onClick={event => {
                        handlingEdit()
                        setCanShow(false)
                    }}
                >
                    Thay đổi
                </button>
            </div>
        </div>
    )
}

export default EditUser