import React, { useState } from 'react'

const HabitCard = () => {
     
    const [habitName, changeHabitName] = useState('')
    const [priority, changePriority] = useState('')
    const [fourLaws, changeFourLaws] = useState([])
    const [duration, changeDuration] = useState('')
    const [time, changeTime] = useState('')
    const [inverse, inverseToTrue] = useState(false)
    
    {/*in this component you'll take the input of the user and save it into the habitCard object 
on the parent which is the */}
    
    function submitHabit () {
        console.log('setting up here')
    } 
    return (
        <div css={{ lineHeight: '2.3rem', fontFamily: 'sans-serif', display: 'grid', borderStyle: 'solid', borderWidth: '1px', borderRadius: '10px', width: '80%', justifyContent: 'center', boxShadow: '5px 10px #aaaaaa' }}>
            <span css={{ fontSize: '2.5em', marginTop: '0.5em', marginBottom: '0.5em' }}>New Habit Card</span>
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

            <button onClick={submitHabit} css={{ marginBottom: '2rem', borderColor: 'lightgreen' }}>submit habit card</button>
        </div>
    )
}

export default HabitCard