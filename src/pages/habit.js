import React from "react"
import { Link } from "gatsby"
import HabitCard from '../components/habitcard'
import Navbar from '../components/navbar'
import HabitList from '../components/habitList'

const Habit = () => (
    <div>
        <Navbar></Navbar>
        <div css={{ display:'grid', justifyItems: 'center' }}>
            <HabitCard></HabitCard>
            
            <Link to="/">Go back to the homepage</Link>
            <HabitList></HabitList>
        </div>
    </div>
)

export default Habit