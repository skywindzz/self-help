import React from "react"
import { Link } from "gatsby"
import HabitCard from '../components/habitcard'
import Navbar from '../components/navbar'
import HabitList from '../components/habitList'

const Habit = () => (
    <div>
        <Navbar></Navbar>
        <HabitList></HabitList>
        <HabitCard></HabitCard>
        <Link to="/">Go back to the homepage</Link>
    </div>
)

export default Habit