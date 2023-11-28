import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/TodoSlice'

export default function AddTask() {

  const [tache, setTache] = useState('')
  const dispatch = useDispatch()
  return (
    <div>
        <input type="text" name="tache" id="tache" value={tache} onChange={(e) => setTache(e.target.value)}/>
        <button onClick={() => dispatch(addTask(tache))}>Ajouter</button>
    </div>
  )
}
