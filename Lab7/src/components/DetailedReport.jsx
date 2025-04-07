import { useParams } from 'react-router-dom'
import Table from './Table'
import Modal from './Modal'
import AddUser from './AddUser'
import { useRef, useState } from 'react'
import Download from '../assets/Download.png'
import MoveUp from '../assets/Move up.png'
import File from '../assets/File text 1.png'

const DetailedReport = ({ data }) => {
    const pageName = useParams()
    const [canShow, setCanShow] = useState(false)

    const input = useRef()
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage, setUsersPerPage] = useState(6)
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = data.slice(indexOfFirstUser,
        indexOfLastUser);

    const buttoncss = 'border-2 rounded-md border-pink-400 py-2 px-4 hover:cursor-pointer text-pink-400 hover:bg-pink-400 hover:text-white flex gap-2 items-center'
    return (
        <>
            <div className='flex items-center justify-between w-full'>
                <div className='font-bold text-[20px] flex items-center gap-2'>
                    <div><img src={File} alt="" className='w-[25px] h-[25px]'/></div>
                    Detailed report
                </div>
                <div className='flex gap-4'>
                    <button className={buttoncss}><img src={Download} alt="" />Import</button>
                    <button className={buttoncss}><img src={MoveUp} alt="" />Export</button>
                    <button className={buttoncss} onClick={event => setCanShow(true)}>Add user</button>
                </div>
            </div>
            <div className='w-full'>
                <Table data={currentUsers} />
            </div>
            <div className='flex w-full pb-6 px-3 justify-between'>
                <div className='flex items-center'>{data.length} results</div>
                {
                    data.length > 0 && (
                        <div className="flex justify-center">
                            {<button//Nút skip về từ đầu
                                className={`w-[35px] h-[35px] rounded-full hover:bg-pink-400 hover:text-white`}
                                onClick={() => setCurrentPage(1)}
                            >
                                {"<<"}
                            </button>}
                            {<button//Nút lùi về 1 trang
                                className={`w-[35px] h-[35px] rounded-full hover:bg-pink-400 hover:text-white`}
                                onClick={() => setCurrentPage(1 == currentPage ? currentPage : currentPage - 1)}
                            >
                                {"<"}
                            </button>}
                            {[...Array(Math.ceil(data.length /
                                usersPerPage))].map(
                                    (_, index) => (
                                        index < 2 || index >= Math.ceil(data.length / usersPerPage) - 2 ?//các trang đầu và các trang cuối
                                            <button
                                                key={index}
                                                className={`w-[35px] h-[35px] rounded-full ${currentPage === index + 1 ? "bg-pink-400 text-white" : ""}`}
                                                onClick={() => setCurrentPage(index + 1)}
                                            >
                                                {index + 1}
                                            </button> :
                                            index > currentPage - 3 && index < currentPage + 1 ?// từ trang trước trang chọn 1 trang tới trang sau 1 trang
                                                <button
                                                    key={index}
                                                    className={`w-[35px] h-[35px] rounded-full ${currentPage === index + 1 ? "bg-pink-400 text-white" : ""}`}
                                                    onClick={() => setCurrentPage(index + 1)}
                                                >
                                                    {index + 1}
                                                </button> :
                                                index == currentPage - 3 || index == currentPage + 1 ?//khoảng cách từ trang đầu tới trang được chọn và trang cuối tới trang được đại diện bằng ...
                                                    <div
                                                        key={index}
                                                        className='w-[35px] h-[35px] border rounded-full'
                                                    >
                                                        ...
                                                    </div> :
                                                    ""
                                    )
                                )}
                            {<button//Nút tiến thêm 1 trang
                                className={`w-[35px] h-[35px] rounded-full hover:bg-pink-400 hover:text-white`}
                                onClick={() => setCurrentPage(Math.ceil(data.length / usersPerPage) == currentPage ? currentPage : currentPage + 1)}
                            >
                                {">"}
                            </button>}
                            {<button//Nút skip về cuối
                                className={`w-[35px] h-[35px] rounded-full hover:bg-pink-400 hover:text-white`}
                                onClick={() => setCurrentPage(Math.ceil(data.length / usersPerPage))}
                            >
                                {">>"}
                            </button>}
                            <form action="" onSubmit={event => {
                                event.preventDefault()
                                setCurrentPage(Math.max(Math.min(Math.ceil(data.length / usersPerPage), input.current.value), 1))
                                input.current.value = undefined
                            }}>
                                <input type="number" name="" id="" ref={input}
                                    className={`py-1 border rounded focus:bg-pink-400 focus:text-white w-[70px]`}
                                />
                            </form>
                        </div>
                    )
                }
            </div>
            {canShow ?
                <Modal setCanShow={setCanShow}>
                    <AddUser setCanShow={setCanShow} />
                </Modal> :
                ""
            }
        </>
    )
}

export default DetailedReport