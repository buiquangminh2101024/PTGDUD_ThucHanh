import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Link, NavLink, Routes, Route, data } from 'react-router-dom'
import axios from 'axios'
import Logo from './assets/Logo.png'
import CardOverview from './components/CardOverview'
import './App.css'

const nav = ['Dashboard', 'Project', 'Teams', 'Analytics', 'Messages', 'Integrations']

function App() {
  const [selectedNav, setSelectedNav] = useState("Dashboard")
  const [overviewData, setOverviewData] = useState()

  useEffect(() => {
    const fecthData = async () => {
      try {
        const respond = await axios.get('http://localhost:8000/overview')
        setOverviewData(respond.data)
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu', error)
      }
    }
    fecthData()
  }, [])

  return (
    <>
      <div className='grid grid-cols-12 min-w-screen min-h-screen'>
        <div className='col-span-2 flex flex-col items-center px-4 py-6'>
          <div className='w-full h-[40px]'>
            <img src={Logo} alt="Lỗi hình ảnh" className='' />
          </div>
          <div className='w-full flex flex-col gap-3 items-center'>
            {
              nav.map(i =>
                <NavLink
                  key={i}
                  className={({isActive}) => (`w-full rounded-lg h-[40px] text-[15px] font-bold px-6 py-1 flex items-center ${isActive? 'bg-pink-400 text-white': 'text-gray-400'}`)}
                  to={`/${i}`}
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
          <div className='row-span-1 flex items-center justify-between'>
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
            <div className='flex items-center justify-between w-full'>
              <div className='font-bold text-[20px]'>Detailed report</div>
              <div className='flex gap-4'>
                <button className='border-2 rounded-md border-pink-400 py-2 px-4 hover:cursor-pointer'>Import</button>
                <button className='border-2 rounded-md border-pink-400 py-2 px-4 hover:cursor-pointer'>Export</button>
              </div>
            </div>
            <div className='w-full'>
              <table className='w-full'>
                <thead>
                  <tr>
                    <th className='border-2'>a</th>
                    <th className='border-2'>b</th>
                    <th className='border-2'>c</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='border-2'>1</td>
                    <td className='border-2'>1</td>
                    <td className='border-2'>1</td>
                  </tr>
                  <tr>
                    <td className='border-2'>2</td>
                    <td className='border-2'>2</td>
                    <td className='border-2'>2</td>
                  </tr>
                  <tr>
                    <td className='border-2'>3</td>
                    <td className='border-2'>3</td>
                    <td className='border-2'>3</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
