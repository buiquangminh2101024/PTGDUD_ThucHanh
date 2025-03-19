import { useEffect, useMemo, useRef, useState } from 'react'
import './Search.css'
import Menu from '../assets/menu.png'

const Search = () => {
    const [isOpen, setOpen] = useState(false)
    const handleOnClickFilter = (event, i) => {
        event.preventDefault()

        setOpen(!isOpen)
    }
    const slider = useRef()
    const maxTime = 100
    const minTime = 0
    const [cookTimeFrom, setCookTimeFrom] = useState(minTime)
    const [cookTimeTo, setCookTimeTo] = useState(maxTime)
    const [trigger, setTrigger] = useState()
    const left = useRef()
    const right = useRef()
    const track = useRef()
    const handleSlider = () => {
        var start = 0.72
        var end = -6.2
        var forleft = (cookTimeFrom - minTime) / (maxTime - minTime) * 100
        left.current.style.left = `${forleft + (end - start) / 100 * forleft + start}%`//(end - start) / 100 * forleft + start là đường thẳng
        var forright = (cookTimeTo - minTime) / (maxTime - minTime) * 100
        right.current.style.left = `${forright + (end - start) / 100 * forright + start}%`

        const leftRect = left.current.getBoundingClientRect();
        const rightRect = right.current.getBoundingClientRect();
        
        track.current.style.left = left.current.style.left
        var trackwidth = rightRect.left - leftRect.left + leftRect.width
        track.current.style.width = `${trackwidth == 0? '99%' : `${trackwidth}px`}`
    }
    useEffect(() => {
        handleSlider()
    }, [])
    const handleRange = (lower = cookTimeFrom, upper = cookTimeTo) => {
        if (lower > upper) return
        if (lower <= upper) {
            setCookTimeFrom(lower)
            setCookTimeTo(upper)
        }
    }
    return (
        <>
            <div className="bg-white dark:bg-gray-800 dark:text-white w-sm border-[1px] border-gray-300 rounded-md">
                <div className="p-4 flex gap-3 items-center">
                    <img src={Menu} alt="" className='w-6 h-6' />
                    <span className='font-black text-[1.5em]'>Filter</span>
                </div>
                <div className='p-4 border-b-[1px] border-gray-300'>
                    <div className='flex items-center justify-between font-bold h-8'>
                        Type
                        <a href="#" onClick={event => handleOnClickFilter(event)}>
                            <svg className="w-4 h-4 ms-3 text-pink-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={`${isOpen ? 'M1 5 5 1 9 5' : 'm1 1 4 4 4 -4'}`} />
                            </svg>
                        </a>
                    </div>
                    <div className={`${isOpen ? 'block' : 'hidden'} grid grid-cols-2`}>
                        <div className='flex gap-2 items-center'><input type="checkbox" name="type" id="" className='w-4 h-10 checked:accent-pink-500' />Pan-fried</div>
                        <div className='flex gap-2 items-center'><input type="checkbox" name="type" id="" className='w-4 h-10 checked:accent-pink-500' />Stir-fried</div>
                        <div className='flex gap-2 items-center'><input type="checkbox" name="type" id="" className='w-4 h-10 checked:accent-pink-500' />Grilled</div>
                        <div className='flex gap-2 items-center'><input type="checkbox" name="type" id="" className='w-4 h-10 checked:accent-pink-500' />Roasted</div>
                        <div className='flex gap-2 items-center'><input type="checkbox" name="type" id="" className='w-4 h-10 checked:accent-pink-500' />Sauteed</div>
                        <div className='flex gap-2 items-center'><input type="checkbox" name="type" id="" className='w-4 h-10 checked:accent-pink-500' />Baked</div>
                        <div className='flex gap-2 items-center'><input type="checkbox" name="type" id="" className='w-4 h-10 checked:accent-pink-500' />Steamed</div>
                        <div className='flex gap-2 items-center'><input type="checkbox" name="type" id="" className='w-4 h-10 checked:accent-pink-500' />Stewed</div>
                    </div>
                </div>
                <div className='p-4 border-b-[1px] border-gray-300'>
                    <div className='flex items-center justify-between font-bold h-8'>
                        Time
                        <a href="#" onClick={event => handleOnClickFilter(event)}>
                            <svg className="w-4 h-4 ms-3 text-pink-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={`${isOpen ? 'M1 5 5 1 9 5' : 'm1 1 4 4 4 -4'}`} />
                            </svg>
                        </a>
                    </div>
                    <div className={`${isOpen ? 'block' : 'hidden'}`}>
                        <div className={`flex flex-col gap-4`}>
                            <div className="relative h-[5px] my-[30px] bg-pink-300 rounded-2xl range-slider" onChange={event => handleSlider()}>
                                <span className="h-full absolute bg-pink-500" ref={track}></span>
                                <input type="range" name="min-val" className="absolute w-full bg-none top-1/2 -translate-y-1/2 appearance-none" min={minTime} max={maxTime} value={cookTimeFrom} onChange={event => handleRange(event.target.value)} />
                                <input type="range" name="max-val" className="absolute w-full bg-none top-1/2 -translate-y-1/2 appearance-none" min={minTime} max={maxTime} value={cookTimeTo} onChange={event => handleRange(undefined, event.target.value)} />
                                <div className={`absolute -top-[35px]`} ref={left}>{cookTimeFrom}</div>
                                <div className={`absolute -top-[35px]`} ref={right}>{cookTimeTo}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Search