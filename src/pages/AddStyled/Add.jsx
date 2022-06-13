import { AddContainer, AddForm } from './AddStyled';

const AddPage = () => {
  return (
    <AddContainer>
      <h1 className='title'>Add Bill</h1>
      <AddForm>
        <label>Enter Number of People:</label>
        <input type='number' placeholder='Number of People' />
        <label>Enter the price</label>
        <input type='number' placeholder='Price Amount' />
        <button>Add</button>
      </AddForm>
    </AddContainer>
  );
};

export default AddPage;
