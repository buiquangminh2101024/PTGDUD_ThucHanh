import './App.css'
import { Link, Routes, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setTheme } from './components/data'
import CounterApp from './components/CounterApp'
import TodoList from './components/TodoList'
import ShoppingCart from './components/ShoppingCart'
import SignUp from './components/SignUp'
import Login from './components/Login'
import UserMenu from './components/userMenu'
import EditUserInfo from './components/EditUserInfo'
import { useState } from 'react'
function App() {
  const dispatch = useDispatch()
  const theme = useSelector(state => state.data.theme)
  const isLoggedIn = useSelector(state => state.data.isLoggedIn)
  const user = useSelector(state => state.data.user)
  const [canShowSignUp, setCanShowSignUp] = useState(false)
  const [canShowLogin, setCanShowLogin] = useState(false)
  const [canShowUserMenu, setCanShowUserMenu] = useState(false)
  const [canShowSetUsetInfo, setCanShowSetUserInfo] = useState(false)
  return (
    <div className={`h-screen ${theme.bgOutside + ' ' + theme.text}`}>
      <div className='flex justify-center'>
        <div className='flex gap-4 items-center font-bold'>
          <Link to='/' className='hover:text-[20px]'>Home</Link>
          <Link to='/CounterApp' className='hover:text-[20px]'>Counter App</Link>
          <Link to='/TodoList' className='hover:text-[20px]'>To-do List</Link>
          <span className='hover:text-[20px] hover:cursor-pointer' onClick={event => dispatch(setTheme())}>Change Theme</span>
          <Link to='/ShoppingCart' className='hover:text-[20px]'>Shopping Cart</Link>
          {
            !isLoggedIn &&
            <span className='hover:text-[20px] hover:cursor-pointer' onClick={event => setCanShowSignUp(true)}>Đăng kí</span>
          }
          {
            !isLoggedIn &&
            <span className='hover:text-[20px] hover:cursor-pointer' onClick={event => setCanShowLogin(true)}>Đăng nhập</span>
          }
          {
            isLoggedIn &&
            <div className='hover:text-[20px] hover:cursor-pointer relative' onClick={event => setCanShowUserMenu(!canShowUserMenu)}>
              User: {user.tk}
              {
                canShowUserMenu && <UserMenu setCanShow={setCanShowSetUserInfo}/>
              }
            </div>
          }
        </div>
      </div>
      <div className='flex justify-center'>
        <Routes>
          <Route path='/CounterApp' element={<CounterApp />} />
          <Route path='/TodoList' element={<TodoList />} />
          <Route path='/ShoppingCart' element={<ShoppingCart />} />
        </Routes>
        {
          canShowSignUp &&
          <SignUp setCanShow={setCanShowSignUp} />
        }
        {
          canShowLogin &&
          <Login setCanShow={setCanShowLogin} />
        }
        {
          canShowSetUsetInfo &&
          <EditUserInfo setCanShow={setCanShowSetUserInfo} user={user} />
        }
      </div>
    </div>
  )
}

export default App
