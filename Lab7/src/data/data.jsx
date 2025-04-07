import { configureStore, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const blobFromObjectURL = async (objectURL) => {
  const response = await fetch(objectURL);
  const blob = await response.blob();
  return blob;
};

const toForm = async (user, imgURL) => {
  const imgBlob = await blobFromObjectURL(imgURL)
  const formData = new FormData();

  Object.entries(user).forEach(([key, value]) => {
    formData.append(key, value);
  });

  formData.append("imgFile", imgBlob)
  return formData
}

export const editUserAsync = (user, imgURL) => async (dispatch) => {
  try {
    const formData = await toForm(user, imgURL)
    const result = await axios.put('http://localhost:8000/editUser', formData, {
      headers: {
        "Content-Type": "multipart/form-data" // Để gửi FormData
      }
    });
    dispatch(fecthLastEditedUser())
  } catch (error) {
    console.error('Lỗi khi gửi dữ liệu', error);
  }
};

export const addUserAsync = (user, imgURL) => async (dispatch) => {
  try {
    const formData = await toForm(user, imgURL)
    const result = await axios.post('http://localhost:8000/addUser', formData, {
      headers: {
        "Content-Type": "multipart/form-data" // Để gửi FormData
      }
    });
    dispatch(fecthLastAddedUser())
  } catch (error) {
    console.error('Lỗi khi gửi dữ liệu', error);
  }
}

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
      state.reportData[index] = { ...state.reportData[index], ...action.payload }
    },
    addUser: (state, action) => {
      state.reportData.push(action.payload)
    }
  }
})

export const { setOverviewData, setReportData, editUser, addUser } = modalSlice.actions

const canShowReducer = modalSlice.reducer

export const store = configureStore({
  reducer: { canShow: canShowReducer }
})

export const fecthData = () => async (dispatch) => {
  try {
    const respond = await axios.get('http://localhost:8000/overview')
    dispatch(setOverviewData(respond.data))

    var respond1 = await axios.get('http://localhost:8000/report')
    const reportList = await Promise.all(respond1.data.map(async (i) => {
      const rpd = await axios.get(`http://localhost:8000/report/images/${i.img}`, { responseType: "blob" })
      const imgUrl = rpd.data;
      return { ...i, imgFile: URL.createObjectURL(imgUrl) };
    }));
    dispatch(setReportData(reportList))
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu', error)
  }
}

export const fecthLastEditedUser = () => async (dispatch) => {
  try {
    const respond = await axios.get('http://localhost:8000/editUser/lastEdit')
    const imgFile = await axios.get(`http://localhost:8000/report/images/${respond.data.img}`, { responseType: "blob" })
    dispatch(editUser({ ...respond.data, imgFile: URL.createObjectURL(imgFile.data) }))
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu', error)
  }
}

export const fecthLastAddedUser = () => async (dispatch) => {
  try {
    const respond = await axios.get('http://localhost:8000/addUser/lastAdd')
    const imgFile = await axios.get(`http://localhost:8000/report/images/${respond.data.img}`, { responseType: "blob" })
    dispatch(addUser({ ...respond.data, imgFile: URL.createObjectURL(imgFile.data) }))
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu', error)
  }
}