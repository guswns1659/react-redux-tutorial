import '../css/updateReady.css';

const UpdateReady = ({todo, updateReadyInput, onUpdateReadyChange, onUpdateSubmit}) => {
  // console.log('todo = ', todo)
  // console.log('onUpdateReadyChange = ', onUpdateReadyChange)

  return (
    <form className='updateReady' onSubmit={(e) => onUpdateSubmit(e, todo.id)}>
      <input type='text' value={updateReadyInput} onChange={onUpdateReadyChange}/>
      <button type='submit' >Confirm</button>
    </form>
  )
}

export default UpdateReady;