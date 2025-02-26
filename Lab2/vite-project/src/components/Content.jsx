import './Content.css'

export default function Content() {
    return (
        <>
            <div className='content'>
                <div className='aside'>
                    <div className='filter'>
                        <img src="../img/menu.png" alt="" />
                        <h3>FILTER</h3>
                    </div>
                    <div className='filter_choice'>
                        <div className='filter_name'>
                            <h5>Type</h5>
                            <img src="../img/down-arrow.png" alt="" />
                        </div>
                        <div className='filter_content'>
                            <div><input type="checkbox" name="Pan-fired" id="" />Pan-fired</div>
                            <div><input type="checkbox" name="Stir-fired" id="" />Stir-fired</div>
                            <div><input type="checkbox" name="Grilled" id="" />Grilled</div>
                            <div><input type="checkbox" name="Roasted" id="" />Roasted</div>
                            <div><input type="checkbox" name="Sauteed" id="" />Sauteed</div>
                            <div><input type="checkbox" name="Baked" id="" />Baked</div>
                            <div><input type="checkbox" name="Steamed" id="" />Steamed</div>
                            <div><input type="checkbox" name="Stewed" id="" />Stewed</div>
                        </div>
                    </div>
                    <div className='other'>
                        <img src="../img/Capture2.png" alt="" />
                    </div>
                </div>
                <div className='section'>
                    <img src="../img/Capture3.png" alt="" />
                </div>

            </div>
        </>
    )
}