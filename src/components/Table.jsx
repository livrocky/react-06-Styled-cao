import { useEffect, useState } from 'react';

function BillsList() {
  //   console.log('BillsList ran ===');
  const [billsArray, setBillsArray] = useState([]);

  async function getBills() {
    const resp = await fetch('https://believed-shore-vanadium.glitch.me');
    const dataInJs = await resp.json();
    setBillsArray(dataInJs);
  }
  useEffect(() => {
    getBills();
  });
  return (
    <div className='display'>
      <h1>Bills List</h1>
      {billsArray.length === 0 && <h2>Loading Bills ...</h2>}
      {billsArray.map((bObj) => (
        <div key={bObj.id} className='bill'>
          <p className='people'>Number of people: {bObj.people}</p>
          <h2 className='price'>Price: {bObj.price} </h2>
        </div>
      ))}
    </div>
  );
}

export default BillsList;
