import './Input.css'
import { useState } from 'react'

export default function Input(props) {
    const {setInvestMoney} = props
    const {setRate} = props
    const {setGoal} = props
    return (
        <>
            <div className='flex-between'>
                Input your invest money: 
                <input type="text" onChange={event => setInvestMoney(parseFloat(event.target.value))}/>
            </div>
            <div className='flex-between'>
                Input rate: 
                <input type="text" onChange={event => setRate(parseFloat(event.target.value))}/>
            </div>
            <div className='flex-between'>
                Input your goal: 
                <input type="text" onChange={event => setGoal(parseFloat(event.target.value))}/>
            </div>
        </>
    )
}