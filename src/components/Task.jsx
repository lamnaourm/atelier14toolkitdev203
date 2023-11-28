import React from 'react'
import { useDispatch } from 'react-redux'
import { ModifTask, deleteTask } from '../redux/TodoSlice'

export default function Task({ tache }) {

  const dispatch = useDispatch()

  return (
    <div className='tache'>
      <h5 className={tache.completed ? 'barre' : undefined}>{tache.task}</h5>
      <div>
        <button onClick={() => dispatch(ModifTask(tache.id))}>Modifier</button>
        <button onClick={() => dispatch(deleteTask(tache.id))}>Supprimer</button>
      </div>
    </div>
  )
}
