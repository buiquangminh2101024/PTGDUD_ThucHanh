import { useState } from 'react'
import close from '../assets/close.svg'
import { useDispatch } from 'react-redux'
import { addUserAsync } from '../data/data'

const AddUser = ({ setCanShow }) => {
    const dispatch = useDispatch()

    const[imgFile, setImgFile] = useState()
    const [img, setImg] = useState()
    const [customerName, setCustomerName] = useState()
    const [error1, setError1] = useState()
    const [company, setCompany] = useState()
    const [orderValue, setOrderValue] = useState()
    const [error3, setError3] = useState()
    const [orderDate, setOrderDate] = useState(new Date().toISOString().split('T')[0])
    const [status, setStatus] = useState("New")

    const handlingImg = (img) => {
        const splitPath = img.value.split('.')
        const checkExtension = splitPath[splitPath.length - 1]
        if (checkExtension == 'png' || checkExtension == 'jpg') {
            const file = img.files[0];
            const imgP = img.value.split('\\')
            setImg(imgP[imgP.length - 1])
            const previewUrl = URL.createObjectURL(file);
            setImgFile(previewUrl);
        }
    }

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

    const handlingAdd = () => {
        if (!handlingFloat(orderValue) || !handlingName(customerName)) {
            return false
        }
        const date = orderDate.split('-')
        dispatch(addUserAsync({ customerName: customerName, company: company, orderValue: parseFloat(orderValue), orderDate: new Date(Date.UTC(date[0], date[1] - 1, date[2])).toISOString(), status: status, img: `cachedImg/${img}` }, imgFile))
        return true
    }

    return (
        <div className="w-full h-full p-4 flex flex-col">
            <div className="h-[40px] w-full flex items-center justify-between">
                <div className="font-bold text-[20px]">Thêm thông tin:</div>
                <div>
                    <img src={close} alt="" className='hover:cursor-pointer hover:bg-pink-400 rounded-full' onClick={event => setCanShow(false)} />
                </div>
            </div>
            <div className="flex-auto w-full">
                <form action="" className='w-full h-full pt-6' onSubmit={event => {
                    event.preventDefault()
                    if(handlingAdd())
                        setCanShow(false)
                    }}>
                    <div className='w-full grid grid-cols-2 gap-4'>
                    Ảnh đại diện:
                        <div className='w-[60px] aspect-square relative border-2 border-black rounded-full overflow-hidden'>
                            <input type="file" name="" id="" className='absolute top-0 left-0 opacity-0 w-full h-full' onChange={event => handlingImg(event.target)} />
                            {img ?
                                <div className='w-full h-full'>
                                    <img src={imgFile} alt="" className='w-full h-full' />
                                </div> :
                                <div className='w-full h-full text-[10px] text-center'>Chọn ảnh bạn muốn</div>
                            }
                        </div>
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
                        if(handlingAdd())
                            setCanShow(false)
                    }}
                >
                    Thay đổi
                </button>
            </div>
        </div>
    )
}

export default AddUser