import { AddContainer, AddForm, Title } from './AddStyled';

const AddPage = () => {
  return (
    <AddContainer>
      <Title>Title</Title>
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
