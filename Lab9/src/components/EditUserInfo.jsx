import { useSelector, useDispatch } from "react-redux";
import { setUserInfo } from "./data";
import { useState } from "react";
import OverLay from "./OverLay";

const EditUserInfo = ({user, setCanShow}) => {
    const dispatch = useDispatch()
    const theme = useSelector(state => state.data.theme)
    const [mk, setMK] = useState(user.mk)
    const [error1, setE1] = useState('')
    const [name, setName] = useState(user?.name == undefined? '' : user?.name)
    const [error2, setE2] = useState('')
    const [amk, setAMK] = useState('')
    const [error3, setE3] = useState('')
    const [isEditMK, setIsEditMK] = useState(false)
    const regexName = /^([À-ỴĐA-Z]{1}[à-ỵđa-z]*)( [À-ỴĐA-Z]{1}[à-ỵđa-z]*)*$/;
    return (
        <>
            <OverLay setCanShow={setCanShow} />
            <div className={`w-[600px] h-fit py-6 flex flex-col items-center justify-center gap-4 border-2 border-gray-300 rounded-2xl ${theme.bgInside} shadow-[0_0_7px] fixed top-1/2 left-1/2 -translate-1/2`}>
                <h2 className='font-bold text-[30px]'>Sửa Thông Tin Tài Khoản</h2>
                <div className='w-1/2 grid grid-cols-2 gap-2'>
                    <span>Tên tài khoản:</span>
                    <div>
                        <input type="text" value={user.tk} disabled className={`rounded-md outline-0 border-[1px] focus:border-3 px-1 ${theme.borderInputHover}`} />
                        <span className="text-red-500">{error1}</span>
                    </div>
                    <span>Mật khẩu:</span>
                    <div>
                        <input type="text" value={mk} onChange={event => { setMK(event.target.value);setIsEditMK(true)}} className={`rounded-md outline-0 border-[1px] focus:border-3 px-1 ${theme.borderInputHover}`} />
                        <span className="text-red-500">{error1}</span>
                    </div>
                    {
                        isEditMK &&
                        <>
                            <span>Mật khẩu:</span>
                            <div>
                                <input type="text" value={amk} onChange={event => setAMK(event.target.value)} className={`rounded-md outline-0 border-[1px] focus:border-3 px-1 ${theme.borderInputHover}`} />
                                <span className="text-red-500">{error3}</span>
                            </div>
                        </>
                    }
                    <span>Họ và tên:</span>
                    <div>
                        <input type="text" value={name} onChange={event => setName(event.target.value)} className={`rounded-md outline-0 border-[1px] focus:border-3 px-1 ${theme.borderInputHover}`} />
                        <span className="text-red-500">{error2}</span>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <button
                        className='px-4 py-3 bg-amber-500 rounded-2xl hover:cursor-pointer active:bg-amber-600'
                        onClick={event => {
                            var canAdd = true
                            if (mk.length <= 5) {
                                canAdd = false
                                setE1('Mật khẩu phải trên 5 kí tự')
                            }
                            if (amk != mk && isEditMK) {
                                canAdd = false
                                setE3('Mật khẩu nhập lại phải giống với mật khẩu')
                            }
                            if (!regexName.test(name)) {
                                canAdd = false
                                setE2('Tên phải có kí tự đầu trong mỗi chữ là hoa, kí tự sau là chữ thường và không được để khoảng trống ở đầu và cuối tên')
                            }
                            if (canAdd) {
                                setE1(''); setE2(''); setE3('')
                                dispatch(setUserInfo({tk: user.tk, mk: mk, name: name}))
                                setCanShow(false)
                            }
                        }}
                    >
                        Sửa thông tin
                    </button>
                </div>
            </div>
        </>
    )
}

export default EditUserInfo