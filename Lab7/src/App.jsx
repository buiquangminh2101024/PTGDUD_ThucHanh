import { useEffect, useState } from 'react'
import { Link, NavLink, Routes, Route } from 'react-router-dom'
import Logo from './assets/Logo.png'
import CardOverview from './components/CardOverview'
import DetailedReport from './components/DetailedReport'
import OtherPage from './components/OtherPage'
import { useSelector, useDispatch } from 'react-redux'
import { fecthData } from './data/data'
import './App.css'

const nav = ['Dashboard', 'Project', 'Teams', 'Analytics', 'Messages', 'Integrations']

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
        <div className='col-span-2 flex flex-col items-center px-4 py-6 border-e-[1px] border-gray-200'>
          <div className='w-full h-[40px]'>
            <img src={Logo} alt="Lỗi hình ảnh" className='' />
          </div>
          <div className='w-full flex flex-col gap-3 items-center'>
            {
              nav.map(i =>
                <NavLink
                  key={i}
                  className={({isActive}) => (`w-full rounded-lg h-[40px] text-[15px] font-bold px-6 py-1 flex items-center ${isActive? 'bg-pink-400 text-white': 'text-gray-400'}`)}
                  to={`/${i == 'Dashboard' ? '' : i}`}
                  onClick={event => setSelectedNav(i)}
                >
                  {i}
                </NavLink>)
            }
          </div>
          <div className='flex-auto flex flex-col justify-end w-full'>
            <div className='bg-purple-50 rounded-lg w-full h-[300px]'>
              a
            </div>
          </div>
        </div>
        <div className='col-span-10 grid grid-rows-12'>
          <div className='row-span-1 px-6 flex items-center justify-between border-b-[1px] border-gray-200'>
            <div className='font-bold text-[20px] text-pink-500'>{selectedNav}</div>
            <div></div>
          </div>
          <div className='row-span-4 p-6 flex flex-col gap-4'>
            <div className='font-bold text-[20px]'>Overview</div>
            <div className='grid grid-cols-3 gap-5 flex-auto'>
              {
                overviewData?.map(i => <CardOverview key={i.id} data={i} />)
              }
            </div>
          </div>
          <div className='row-span-7 px-6 flex flex-col items-center gap-6'>
            <Routes>
              <Route path='/' element={<DetailedReport data={reportData}/>}/>
              <Route path='/:page' element={<OtherPage/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </>
  )
}

export default App