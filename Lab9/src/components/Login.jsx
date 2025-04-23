import { useSelector, useDispatch } from "react-redux"
import OverLay from "./OverLay"
import { useState } from "react"
import { loginThunk } from "./data"

const Login = ({ setCanShow }) => {
    const dispatch = useDispatch()
    const theme = useSelector(state => state.data.theme)
    const [tk, setTK] = useState('')
    const [error1, setE1] = useState('')
    const [mk, setMK] = useState('')
    const [error2, setE2] = useState('')
    const [error3, setE3] = useState('')
    return (
        <>
            <OverLay setCanShow={setCanShow} />
            <div className={`w-[600px] h-fit py-6 flex flex-col items-center justify-center gap-4 border-2 border-gray-300 rounded-2xl ${theme.bgInside} shadow-[0_0_7px] fixed top-1/2 left-1/2 -translate-1/2`}>
                <h2 className='font-bold text-[30px]'>Đăng kí tài khoản</h2>
                <div className='w-1/2 grid grid-cols-2 gap-2'>
                    <span className="text-red-500 col-span-2">{error3}</span>
                    <span>Tên tài khoản:</span>
                    <div>
                        <input type="text" value={tk} onChange={event => setTK(event.target.value)} className={`rounded-md outline-0 border-[1px] focus:border-3 px-1 ${theme.borderInputHover}`} />
                        <span className="text-red-500">{error1}</span>
                    </div>
                    <span>Mật khẩu:</span>
                    <div>
                        <input type="text" value={mk} onChange={event => setMK(event.target.value)} className={`rounded-md outline-0 border-[1px] focus:border-3 px-1 ${theme.borderInputHover}`} />
                        <span className="text-red-500">{error2}</span>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <button
                        className='px-4 py-3 bg-amber-500 rounded-2xl hover:cursor-pointer active:bg-amber-600'
                        onClick={event => {
                            var canAdd = true
                            if (tk.length < 1) {
                                canAdd = false
                                setE2('Không được để thiếu')
                            }
                            if (mk.length < 1) {
                                canAdd = false
                                setE2('Không được để thiếu')
                            }
                            if (canAdd) {
                                setE1(''); setE2('');
                                const result = dispatch(loginThunk({ tk: tk, mk: mk }))
                                if(!result) {
                                    setE3('Thông tin đăng nhập không đúng')
                                    return
                                }
                                setCanShow(false)
                            }
                        }}
                    >
                        Đăng nhập
                    </button>
                </div>
            </div>
        </>
    )
}

export default Login