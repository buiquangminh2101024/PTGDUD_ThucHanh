import { useParams } from 'react-router-dom'
import Table from './Table'

const DetailedReport = ({data}) => {
    const pageName = useParams()
    return (
        <>
            <div className='flex items-center justify-between w-full'>
                <div className='font-bold text-[20px]'>Detailed report</div>
                <div className='flex gap-4'>
                    <button className='border-2 rounded-md border-pink-400 py-2 px-4 hover:cursor-pointer text-pink-400'>Import</button>
                    <button className='border-2 rounded-md border-pink-400 py-2 px-4 hover:cursor-pointer text-pink-400'>Export</button>
                </div>
            </div>
            <div className='w-full'>
                <Table data={data} />
            </div>
        </>
    )
}

export default DetailedReport