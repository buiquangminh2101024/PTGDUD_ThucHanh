import { configureStore, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const urlLan = `http://192.168.1.2:8000`
let canLan = false
const urlPublic = `https://843z3mcs-8000.asse.devtunnels.ms`
let canPublic = false
try {
  const result = axios.get('http://192.168.1.2:8000/overview/overview')
  canLan = true
} catch (error) {
  console.error("Không lấy được từ lan")
}
try {
  const result = axios.get(`${urlPublic}/overview`)
  canPublic = true
} catch (error) {
  console.error("Không lấy được từ public")
}

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
  const url = `${canPublic? urlPublic: canLan? urlLan : 'http://localhost:8000'}/editUser`
  try {
    const formData = await toForm(user, imgURL)
    const result = await axios.put(url, formData, {
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
  const url = `${canPublic? urlPublic: canLan? urlLan : 'http://localhost:8000'}/addUser`
  try {
    const formData = await toForm(user, imgURL)
    const result = await axios.post(url, formData, {
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
  const url = `${canPublic? urlPublic: canLan? urlLan : 'http://localhost:8000'}`
  try {
    const respond = await axios.get(`${url}/overview`)
    dispatch(setOverviewData(respond.data))

    var respond1 = await axios.get(`${url}/report`)
    const reportList = await Promise.all(respond1.data.map(async (i) => {
      const rpd = await axios.get(`${url}/report/images/${i.img}`, { responseType: "blob" })
      const imgUrl = rpd.data;
      return { ...i, imgFile: URL.createObjectURL(imgUrl) };
    }));
    dispatch(setReportData(reportList))
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu', error)
  }
}

export const fecthLastEditedUser = () => async (dispatch) => {
  const url = `${canPublic? urlPublic: canLan? urlLan : 'http://localhost:8000'}`
  try {
    const respond = await axios.get(`${url}/editUser/lastEdit`)
    const imgFile = await axios.get(`${url}/report/images/${respond.data.img}`, { responseType: "blob" })
    dispatch(editUser({ ...respond.data, imgFile: URL.createObjectURL(imgFile.data) }))
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu', error)
  }
}

export const fecthLastAddedUser = () => async (dispatch) => {
  const url = `${canPublic? urlPublic: canLan? urlLan : 'http://localhost:8000'}`
  try {
    const respond = await axios.get(`${url}/addUser/lastAdd`)
    const imgFile = await axios.get(`${url}/report/images/${respond.data.img}`, { responseType: "blob" })
    dispatch(addUser({ ...respond.data, imgFile: URL.createObjectURL(imgFile.data) }))
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu', error)
  }
}