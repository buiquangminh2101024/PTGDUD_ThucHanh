import './Header.css'

export default function Header() {
    return (
        <>
            <div className="header">
                <div className="search">
                    <img src="../img/Capture1.png" alt="" />
                    <div className='search-wrapper'>
                        <img src="../img/loupe.png" alt="" />
                        <input type="text" placeholder='cakescascsa'/>
                    </div>
                </div>
                <div className="nav">
                    <a href=''>What to cook</a>
                    <a href=''>Recipes</a>
                    <a href=''>Ingredents</a>
                    <a href=''>Occasions</a>
                    <a href=''>About Us</a>
                </div>
                <div className="cart">
                    <button >
                        <img src="../img/package-box.png" alt="" />
                        Your Recipe Box
                    </button>
                    <a href="">
                        <img src="../img/user.jfif" alt="" />
                    </a>
                </div>
            </div>
        </>
    )
}