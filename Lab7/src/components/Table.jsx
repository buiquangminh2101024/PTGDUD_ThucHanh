import img1 from '../assets/Avatar.png'
import img2 from '../assets/Avatar (1).png'
import img3 from '../assets/Avatar (2).png'
import img4 from '../assets/Avatar (3).png'
import img5 from '../assets/Avatar (4).png'
import img6 from '../assets/Avatar (5).png'
import create from '../assets/create.png'
import './Table.css'
import { useState } from 'react'

const reportImg = [img1, img2, img3, img4, img5, img6]

const color = [
    {
        id: "New",
        color: ["bg-blue-200", "text-blue-600"]
    },
    {
        id: "In-progress",
        color: ["bg-yellow-100", "text-yellow-600"]
    },
    {
        id: "Completed",
        color: ["bg-green-200", "text-green-600"]
    }
]

const Table = ({ data }) => {
    const [ischecked, setCheck] = useState([])

    const handleCheck = (id) => {
        console.log(id)
        if (ischecked.find(j => j == id) != undefined)
            setCheck(ischecked.filter(i => i != id))
        else
            setCheck([...ischecked, id])
    }

    return (
        <table className='w-full rounded-lg outline-[1px] outline-gray-300 overflow-hidden'>
            <thead>
                <tr className='h-[50px]'>
                    <th className='px-4 bg-gray-200'>
                        <input type="checkbox" className='size-4' name="select" id="" onChange={event => setCheck(event.target.checked ? data.map(i => i.id) : [])} />
                    </th>
                    <th className='text-left text-gray-600 bg-gray-200'>CUSTOMER NAME</th>
                    <th className='text-left text-gray-600 bg-gray-200'>COMPANY</th>
                    <th className='text-left text-gray-600 bg-gray-200'>ORDER VALUE</th>
                    <th className='text-left text-gray-600 bg-gray-200'>ORDER DATE</th>
                    <th className='text-gray-600 bg-gray-200'>STATUS</th>
                    <th className='bg-gray-200'></th>
                </tr>
            </thead>
            <tbody>
                {
                    data == undefined ? undefined :
                        data.map(i => {
                            var date = new Date(i.orderDate)
                            var statusColor = color.find(j => j.id == i.status).color
                            return (
                                <tr key={i.id} className='h-[50px] border-b-[1px] border-gray-100'>
                                    <td className='px-4'>
                                        <div className='flex items-center justify-center'>
                                            <input
                                                type="checkbox"
                                                className='size-4'
                                                name="select" id=""
                                                checked={ischecked.find(j => j == i.id) != undefined}
                                                onChange={event => handleCheck(i.id)}
                                            />
                                        </div>
                                    </td>
                                    <td>
                                        <div className='flex items-center gap-4 font-bold'>
                                            <img src={reportImg[i.img]} alt="" />
                                            {i.customerName}
                                        </div>
                                    </td>
                                    <td>{i.company}</td>
                                    <td>${i.orderValue}</td>
                                    <td className='text-gray-500'>{date.getDate()}/{date.getMonth()}/{date.getFullYear()}</td>
                                    <td>
                                        <div className='flex items-center justify-center h-full'>
                                            <div className={`rounded-full w-fit text-center p-1 ${statusColor[0]} ${statusColor[1]}`}>{i.status}</div>
                                        </div>
                                    </td>
                                    <td>
                                        <button className='hover:cursor-pointer clicked rounded-full p-1'>
                                            <img src={create} alt="" />
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                }
            </tbody>
        </table>
    )
}

export default Table