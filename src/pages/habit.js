import React from "react"
import { Link } from "gatsby"
import HabitCard from '../components/habitcard'

const Habit = () => (
    <div>
        <HabitCard></HabitCard>
        <Link to="/">Go back to the homepage</Link>
    </div>
)

export default Habit