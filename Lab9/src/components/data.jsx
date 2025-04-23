import { createSlice, configureStore } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

const themedark = { bgOutside: 'bg-[#202124]', bgInside: 'bg-[#292a2d]', text: 'text-white', bgInsideHover: 'hover:bg-[#2d2e31]', borderInputHover: 'focus:border-blue-200' }
const themelight = { bgOutside: 'bg-white', bgInside: 'bg-white', text: 'text-black', bgInsideHover: 'hover:bg-gray-100', borderInputHover: 'focus:border-blue-500' }
var isDark = true

const items = [
    {
        name: 'Cây chà ly',
        stars: 1,
        price: 10000
    },
    {
        name: 'Đồ dắt bếp',
        stars: 2,
        price: 10000
    },
    {
        name: 'Cây đẩy nước',
        stars: 3,
        price: 10000
    },
    {
        name: 'Cây xẻng',
        stars: 4,
        price: 10000
    },
    {
        name: 'Nồi cơm điện',
        stars: 5,
        price: 10000
    },
    {
        name: 'Tủ lạnh Panasonic',
        stars: 4,
        price: 10000
    }
]

const dataSlice = createSlice({
    name: 'data',
    initialState: { count: 0, todoList: [], theme: themelight, items: items, cartItems: [], users: [{tk: 'admin', mk: '123456'}], user: {}, isLoggedIn: false },
    reducers: {
        incCount: (state) => {
            state.count++
        },
        descCount: (state) => {
            state.count--
        },
        addTodo: (state, action) => {
            if (state.todoList.find(i => i.name == action.payload.name && i.from == action.payload.from && i.to == action.payload.to))
                return
            state.todoList.push(action.payload)
        },
        toggleTodo: (state, action) => {
            const index = state.todoList.findIndex(i => i.name == action.payload.name && i.from == action.payload.from && i.to == action.payload.to)
            if (index != -1) {
                state.todoList[index] = action.payload
            }
        },
        removeTodo: (state, action) => {
            state.todoList = state.todoList.filter(i => i.name != action.payload.name || i.from != action.payload.from || i.to != action.payload.to)
        },
        removeTodoAll: (state) => {
            state.todoList = []
        },
        setTheme: (state) => {
            isDark = !isDark
            if (isDark)
                state.theme = themelight
            else
                state.theme = themedark
        },
        addItem: (state, action) => {
            const index = state.cartItems.findIndex(i => i.name == action.payload.name)
            if (index != -1) {
                state.cartItems[index] = { ...action.payload, quantity: state.cartItems[index].quantity + 1 }
                return
            }
            state.cartItems.push(action.payload)
        },
        updateQuantity: (state, action) => {
            const index = state.cartItems.findIndex(i => i.name == action.payload.name)
            if (index != -1)
                state.cartItems[index] = action.payload
        },
        removeItem: (state, action) => {
            state.cartItems = state.cartItems.filter(i => i.name != action.payload.name)
        },
        removeItemAll: (state) => {
            state.cartItems = []
        },
        login: (state, action) => {
            state.user = action.payload
            state.isLoggedIn = true
        },
        logout: (state) => {
            state.isLoggedIn = false
        },
        setUserInfo: (state, aciton) => {
            state.user = aciton.payload
            const index = state.users.findIndex(i => i.tk = aciton.payload.tk)
            state.users[index] = aciton.payload
        },
        addUser: (state, aciton) => {
            state.users.push(aciton.payload)
        }
    }
})

export const addUserThunk = (newUser) => (dispatch, getState) => {
    var users = getState().data.users

    if (users.find(i => i.tk == newUser.tk))
        return false
    dispatch(addUser(newUser))
    return true
}

export const loginThunk = (user) => (dispatch, getState) => {
    var users = getState().data.users

    if (users.find(i => i.tk == user.tk && i.mk == user.mk) == undefined)
        return false
    dispatch(login(user))
    return true
}

export const {
    incCount, descCount,
    addTodo, toggleTodo, removeTodo, removeTodoAll,
    setTheme,
    addItem, updateQuantity, removeItem, removeItemAll,
    login, logout, setUserInfo, addUser
} = dataSlice.actions

export const dataRecuder = dataSlice.reducer

const dataStore = configureStore({
    reducer: {
        data: dataRecuder
    }
})

export default dataStore