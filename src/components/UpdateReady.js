import '../css/updateReady.css';

const UpdateReady = (updateReadyInput, onUpdateReadyChange, onUpdateSubmit) => {
  return (
    <form className='updateReady' onSubmit={onUpdateSubmit}>
      <input type='text' value={updateReadyInput} onChange={onUpdateReadyChange}/>
      <button type='submit' >Confirm</button>
    </form>
  )
}

export default UpdateReady;