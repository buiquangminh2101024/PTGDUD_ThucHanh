const OverLay = ({setCanShow}) => {
    return (
        <div className={`fixed bg-black opacity-70 h-screen w-screen top-0 left-0 z-10`}
            onClick={event => setCanShow(false)}
        >

        </div>
    )
}

const Modal = ({setCanShow, children}) => {
    return (
        <>
            <OverLay setCanShow={setCanShow}/>
            <div className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[400px] h-[600px] z-20 rounded-2xl`}>
                {children}
            </div>
        </>
    )
}

export default Modal