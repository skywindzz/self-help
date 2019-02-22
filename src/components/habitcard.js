import React, { useState } from 'react'

const HabitCard = () => {
    const [habitName, changeHabitName] = useState('')
    const [priority, changePriority] = useState('')
    const [fourLaws, changeFourLaws] = useState([])
    const [duration, changeDuration] = useState('')
    const [time, changeTime] = useState('')
    const [inverse, inverseToTrue] = useState(false)

    function submitHabit () {
        console.log('clicked')
    }

    return (
        <div>
            <div>name: <input value={habitName} /></div>
            <div>Priority(1 - 5): <input value={priority} /> </div>
            
            <div>Inverse habit?: <input type='checkbox' value={inverse}/></div>
            <div>
                <div>Make it obvious: <input value={fourLaws[0]} /></div>
                <div>Make it attractive: <input value={fourLaws[1]} /></div>
                <div>Make it easy: <input value={fourLaws[2]} /></div>
                <div>Make it satisfying:<input value={fourLaws[3]} /></div>
            </div>

            <div>Minimum Duration: <input value={duration} /></div>
            <div>Scheduled Time : <input value={time} /> </div>

            <button onClick={submitHabit}>submit habit card</button>
        </div>
    )
}

export default HabitCard