const AddPage = () => {
  return (
    <div>
      <h1 className='title'>AddPage</h1>
      <form className='add-form'>
        <label>Enter Number of People:</label>
        <input type='number' placeholder='Number of People' />
        <label>Enter the price</label>
        <input type='number' placeholder='Price Amount' />
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddPage;
