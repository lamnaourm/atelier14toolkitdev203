import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Task from './Task'

export default function ListTasks() {

  const taches = useSelector(state => state.todo.tasks)
  return (
    <div>
      {taches.map(t => 
        <Task key={t.id} tache={t} />
        )}
    </div>
  )
}
