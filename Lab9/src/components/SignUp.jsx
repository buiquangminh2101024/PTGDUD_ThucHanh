import { useSelector, useDispatch } from "react-redux"
import OverLay from "./OverLay"
import { useState } from "react"
import { addUserThunk, loginThunk } from "./data"

const SignUp = ({ setCanShow }) => {
    const dispatch = useDispatch()
    const theme = useSelector(state => state.data.theme)
    const [tk, setTK] = useState('')
    const [error1, setE1] = useState('')
    const [mk, setMK] = useState('')
    const [error2, setE2] = useState('')
    const [amk, setAMK] = useState('')
    const [error3, setE3] = useState('')
    const regexTK = /^[a-zA-Z_0-9]+$/;
    return (
        <>
            <OverLay setCanShow={setCanShow} />
            <div className={`w-[600px] h-fit py-6 flex flex-col items-center justify-center gap-4 border-2 border-gray-300 rounded-2xl ${theme.bgInside} shadow-[0_0_7px] fixed top-1/2 left-1/2 -translate-1/2`}>
                <h2 className='font-bold text-[30px]'>Đăng kí tài khoản</h2>
                <div className='w-1/2 grid grid-cols-2 gap-2'>
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
                    <span>Nhập lại mật khẩu:</span>
                    <div>
                        <input type="text" value={amk} onChange={event => setAMK(event.target.value)} className={`rounded-md outline-0 border-[1px] focus:border-3 px-1 ${theme.borderInputHover}`} />
                        <span className="text-red-500">{error3}</span>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <button
                        className='px-4 py-3 bg-amber-500 rounded-2xl hover:cursor-pointer active:bg-amber-600'
                        onClick={event => {
                            var canAdd = true
                            if (!regexTK.test(tk)) {
                                canAdd = false;
                                setE1('Tài khoản chỉ gồm các số, chữ không dâu và dấu _')
                            }
                            if (mk.length <= 5) {
                                canAdd = false
                                setE2('Mật khẩu phải trên 5 kí tự')
                            }
                            if (amk != mk) {
                                canAdd = false
                                setE3('Mật khẩu nhập lại phải giống với mật khẩu')
                            }
                            if (canAdd) {
                                setE1(''); setE2(''); setE3('');
                                const result = dispatch(addUserThunk({ tk: tk, mk: mk }))
                                if (!result) {
                                    setE1('Tài khoản bị trùng với người khác')
                                    return
                                }
                                setE1('')
                                dispatch(loginThunk({ tk: tk, mk: mk }))
                                setCanShow(false)
                            }
                        }}
                    >
                        Thêm
                    </button>
                </div>
            </div>
        </>
    )
}

export default SignUp