import '../css/updateReady.css';

const UpdateReady = ({ todo, updateReadyInput, onUpdateInputChange, onUpdate }) => {
  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    onUpdate(todo.id)
    onUpdateInputChange('')
  }

  return (
    <form className='updateReady' onSubmit={handleUpdateSubmit}>
      <input type='text' value={updateReadyInput} onChange={(e) => onUpdateInputChange(e.target.value)} />
      <button type='submit'>Confirm</button>
    </form>
  );
};

export default UpdateReady;