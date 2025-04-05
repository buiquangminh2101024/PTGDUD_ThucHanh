import { configureStore, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const editUserAsync = (user) => async (dispatch) => {
  try {
    const result = await axios.put('http://localhost:8000/editUser', user);
    console.log(result)
    dispatch(fecthLastEditedUser())
  } catch (error) {
    console.error('Lỗi khi gửi dữ liệu', error);
  }
};

const modalSlice = createSlice({
  name: "canShow",
  initialState: { overviewData: [], reportData: [] },
  reducers: {
    setOverviewData: (state, action) => {
      state.overviewData = action.payload
    },
    setReportData: (state, action) => {
      state.reportData = action.payload
    },
    editUser: (state, action) => {
      const index = state.reportData.findIndex(user => user.id == action.payload.id)
      state.reportData[index] = {...state.reportData[index], ...action.payload}
    }
  }
})

export const { setOverviewData, setReportData, editUser } = modalSlice.actions

const canShowReducer = modalSlice.reducer

export const store = configureStore({
  reducer: { canShow: canShowReducer }
})

export const fecthData = () => async (dispatch) => {
  try {
    const respond = await axios.get('http://localhost:8000/overview')
    dispatch(setOverviewData(respond.data))
    const respond1 = await axios.get('http://localhost:8000/report')
    dispatch(setReportData(respond1.data))
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu', error)
  }
}

export const fecthLastEditedUser = () => async (dispatch) => {
  try {
    const respond = await axios.get('http://localhost:8000/editUser/lastEdit')
    dispatch(editUser(respond.data))
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu', error)
  }
}