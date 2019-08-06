import React, { useState } from 'react'
  
class NewHabitCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            habitName : '',
            priority : 0,
            inverse : false,
            fourLaws :[],
            duration : '',
            time : ''
        };

        function submitHabit () {
            console.log('setting up here');
        } 
    }
    

    render() {
    return (
        <div css={{ lineHeight: '2.3rem', fontFamily: 'sans-serif', display: 'grid', borderStyle: 'solid', borderWidth: '1px', borderRadius: '10px', width: '80%', justifyContent: 'center', boxShadow: '5px 10px #aaaaaa' }}>
            <span css={{ fontSize: '2.5em', marginTop: '0.5em', marginBottom: '0.5em' }}>New Habit Card</span>
            <div>Name: <input value={this.habitName} /></div>
            <div>Priority(1 - 5): <input value={this.priority} /> </div>
            
            <div>Inverse habit?: <input type='checkbox' value={this.inverse} /></div>
            <div>
                <div>Make it obvious: <input value={this.fourLaws[0]} /></div>
                <div>Make it attractive: <input value={this.fourLaws[1]} /></div>
                <div>Make it easy: <input value={this.fourLaws[2]} /></div>
                <div>Make it satisfying:<input value={this.fourLaws[3]} /></div>
            </div>

            <div>Minimum Duration: <input value={this.UNSAFE_componentWillMountduration} /></div>
            <div>Scheduled Time : <input value={this.time} /> </div>

            <button onClick={this.submitHabit} css={{ marginBottom: '2rem', borderColor: 'lightgreen' }}>submit habit card</button>
        </div>
    )
    }
}

export default NewHabitCard