import { useParams } from "react-router-dom"

const OtherPage = () => {
    const pageName = useParams()
    return (
        <div className='flex items-center justify-between w-full'>
            <div className='font-bold text-[20px]'>{pageName.page}</div>
        </div>
    )
}

export default OtherPage