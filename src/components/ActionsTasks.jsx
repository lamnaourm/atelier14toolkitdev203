import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteAll, deleteNoTerm, deleteTerm } from '../redux/TodoSlice'

export default function ActionsTasks() {

  const dispatch = useDispatch()
  return (
    <div>
        <button onClick={() => dispatch(deleteAll())}>Tous</button>
        <button onClick={() => dispatch(deleteTerm())}>Terminès</button>
        <button onClick={() => dispatch(deleteNoTerm())}>Non Terminès</button>
    </div>
  )
}
