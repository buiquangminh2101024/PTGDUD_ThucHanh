import Button1 from '../assets/Button 1509.png'
import Button2 from '../assets/Button 1529.png'
import Button3 from '../assets/Button 1530.png'

const button = [Button1, Button2, Button3]

const CardOverview = ({ data }) => {
    return (
        <div className={`rounded-lg px-6 py-3 flex justify-between ${data.backgroundColor}`}>
            <div className="flex flex-col justify-between">
                <h3 className="font-bold text-[16px]">{data.title}</h3>
                <h1 className="font-bold text-[30px]">
                    {data.title == "New customer" ? "" : "$"}
                    {data.amount}
                </h1>
                <div>
                    <span className="text-green-700 font-bold">{data.periodOfChange}%{" "}</span>
                    period of change
                </div>
            </div>
            <div>
                <img src={button[data.id - 1]} alt="" />
            </div>
        </div>
    )
}
export default CardOverview