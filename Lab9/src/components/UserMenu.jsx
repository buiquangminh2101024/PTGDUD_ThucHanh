import { useSelector, useDispatch } from "react-redux"
import { logout } from "./data"

const UserMenu = ({setCanShow}) => {
    const dispatch = useDispatch()
    const theme = useSelector(state => state.data.theme)
    const user = useSelector(state => state.data.user)
    return (
        <>
            <div className={`w-[130px] h-fit py-2 flex flex-col items-center justify-center gap-1 border-2 border-gray-300 rounded-2xl ${theme.bgInside} shadow-[0_0_7px] absolute top-[100%] left-1/2 -translate-x-1/2`}>
                <span className="hover:cursor-pointer hover:font-bold text-[15px] font-normal" onClick={event => setCanShow(true)}>Sửa thông tin</span>
                <hr className="w-full" />
                <span className="hover:cursor-pointer hover:font-bold text-[15px] font-normal" onClick={event => dispatch(logout())}>Thoát</span>
            </div>
        </>
    )
}

export default UserMenu