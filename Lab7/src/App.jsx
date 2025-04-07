import { useEffect, useState } from 'react'
import { Link, NavLink, Routes, Route } from 'react-router-dom'
import Logo from './assets/Logo.png'
import CardOverview from './components/CardOverview'
import DetailedReport from './components/DetailedReport'
import OtherPage from './components/OtherPage'
import { useSelector, useDispatch } from 'react-redux'
import { fecthData } from './data/data'
import img2 from './assets/Folder.png'
import img3 from './assets/Groups.png'
import img4 from './assets/Pie chart.png'
import img5 from './assets/Chat.png'
import img6 from './assets/Code.png'
import Search from './assets/Search.png'
import Bell from './assets/Bell 1.png'
import Question from './assets/Question 1.png'
import Avatar from './assets/Avatar 313.png'
import Group from './assets/Group.png'
import Square from './assets/Squares four 1.png'
import './App.css'

const nav = ['Dashboard', 'Project', 'Teams', 'Analytics', 'Messages', 'Integrations']
const imgNav = ['', img2, img3, img4, img5, img6]

function App() {
  const [selectedNav, setSelectedNav] = useState("Dashboard")
  const overviewData = useSelector(state => state.canShow.overviewData)
  const reportData = useSelector(state => state.canShow.reportData)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fecthData())
  }, [])

  return (
    <>
      <div className='grid grid-cols-12 min-h-screen'>
        <div className='col-span-2 flex flex-col gap-5 items-center px-4 py-6 border-e-[1px] border-gray-200'>
          <div className='w-full h-[40px]'>
            <img src={Logo} alt="Lỗi hình ảnh" className='' />
          </div>
          <div className='w-full flex flex-col gap-3 items-center'>
            {
              nav.map((i, index) =>
                <NavLink
                  key={i}
                  className={({ isActive }) => (`w-full rounded-lg h-[40px] text-[15px] font-bold px-4 py-1 flex gap-2 items-center ${isActive ? 'bg-pink-400 text-white' : 'text-gray-400'}`)}
                  to={`/${i == 'Dashboard' ? '' : i}`}
                  onClick={event => setSelectedNav(i)}
                >
                  {
                    imgNav[index] && <div>
                      <img src={imgNav[index]} alt="" />
                    </div>
                  }
                  {i}
                </NavLink>)
            }
          </div>
          <div className='flex-auto flex flex-col justify-end w-full'>
            <div className='bg-purple-50 rounded-lg w-full h-[320px] px-2 py-3 flex flex-col items-center gap-2'>
              <div className='w-full'><img src={Group} alt="" className='w-[90%]' /></div>
              <h2 className='text-[20px] font-bold'>V2.0 is available</h2>
              <button className='border-[1px] rounded-lg border-blue-500 text-blue-500 hover:text-white bg-white hover:bg-blue-500 w-full h-[40px] hover:cursor-pointer'>Try now</button>
            </div>
          </div>
        </div>
        <div className='col-span-10 grid grid-rows-12'>
          <div className='row-span-1 px-6 flex items-center justify-between border-b-[1px] border-gray-200'>
            <div className='font-bold text-[20px] text-pink-500'>{selectedNav}</div>
            <div className='flex gap-3'>
              <div className='flex bg-gray-100 items-center py-1 pe-3 rounded-lg w-[300px] h-[35px]'>
                <img src={Search} alt="" className='w-[16px] h-[16px] mx-2' />
                <input type="text" placeholder='Search...' className='outline-0 flex-auto' />
              </div>
              <button className='hover:cursor-pointer w-[24px] h-[25px]'><img src={Bell} alt="" className='w-full h-full' /></button>
              <button className='hover:cursor-pointer w-[24px] h-[25px]'><img src={Question} alt="" className='w-full h-full' /></button>
              <button className='hover:cursor-pointer'><img src={Avatar} alt="" className='w-full h-full' /></button>
            </div>
          </div>
          <div className='row-span-4 p-6 flex flex-col gap-4'>
            <div className='font-bold text-[20px] flex items-center gap-2'>
              <div><img src={Square} alt="" className='w-[25px] h-[25px]'/></div>
              Overview
            </div>
            <div className='grid grid-cols-3 gap-5 flex-auto'>
              {
                overviewData?.map(i => <CardOverview key={i.id} data={i} />)
              }
            </div>
          </div>
          <div className='row-span-7 px-6 flex flex-col items-center gap-6'>
            <Routes>
              <Route path='/' element={<DetailedReport data={reportData} />} />
              <Route path='/:page' element={<OtherPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  )
}

export default App