import React from 'react';
import { Link } from 'gatsby';
import NewHabitCard from '../components/habitpage/newhabitcard';
import Navbar from '../components/navbar';
import HabitList from '../components/habitpage/habitList';

const Habit = () => (
  <div>
    <Navbar></Navbar>
    <div css={{ display: 'grid', justifyItems: 'center' }}>
      <Link to='/profile'>Go back to Profile page</Link>
      <NewHabitCard></NewHabitCard>
      <HabitList></HabitList>
      <p>
        checkboxes for tracking daily habits and also track how many consequtive
        days a person can do the habit(maybe add some graphic for each success
        day
      </p>
    </div>
  </div>
);

export default Habit;
