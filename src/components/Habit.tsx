import React from 'react'
import styles from './Habit.module.css'

import '../styles/global.css'

interface HabitProps {
  completed: number
}

function Habit({completed}: HabitProps) {
  return (
    <div className="bg-zinc-900 w-10 h-10 text-white rounded m-2">{completed}</div>
  )
}

export default Habit