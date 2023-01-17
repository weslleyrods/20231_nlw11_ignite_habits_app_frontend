import React from 'react'
import styles from './Habit.module.css'

import '../styles/global.css'


interface HabitProps {
  completed: number
}

function Habit({completed}: HabitProps) {
  return (
    <div className="bg-zinc-900">{completed}</div>
  )
}

export default Habit