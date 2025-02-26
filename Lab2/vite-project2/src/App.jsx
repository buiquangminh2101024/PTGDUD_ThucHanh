import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './Components/Input'
import Table from './Components/Table'

function App() {
  const [investMoney, setInvestMoney] = useState('')
  const [rate, setRate] = useState('')
  const [goal, setGoal] = useState('')
  const [result, setResult] = useState([])

  const createResult = () => {
    let r = []
    let numberOfYear = new Date().getFullYear()
    let endYear = investMoney
    while(endYear < goal) {
        let money = endYear
        endYear *= (1+rate)
        r.push(
            {
                Year: numberOfYear,
                Money: money,
                Rate: rate,
                EndYear: endYear
            }
        )
        numberOfYear++
        setResult(r)
    }
  }
  return (
    <>
      <img src="../img/invest.webp" alt="" style={{width: "400px"}}/>
      <Input setInvestMoney = {setInvestMoney} setRate = {setRate} setGoal = {setGoal}></Input>
      <button onClick={createResult}>Click</button>
      <Table list = {result}></Table>
    </>
  )
}

export default App
