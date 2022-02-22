import '../css/updateReady.css';

const UpdateReady = (onUpdateSubmit) => {
  return (
    <form className='updateReady' onSubmit={onUpdateSubmit}>
      <input type='text' />
      <button type='submit' >Confirm</button>
    </form>
  )
}

export default UpdateReady;