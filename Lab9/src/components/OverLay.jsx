import { useState } from "react"
const OverLay = ({children, setCanShow}) => {
    return (
        <div className="h-screen w-screen bg-black opacity-50 fixed top-0 left-0" onClick={event => setCanShow(false)}>
            {children}
        </div>
    )
}

export default OverLay