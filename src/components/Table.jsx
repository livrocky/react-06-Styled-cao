import { useEffect, useState } from 'react';

function BillsList() {
  //   console.log('BillsList ran ===');
  const [billsArray, setBillsArray] = useState([]);

  async function getBills() {
    // const resp = await fetch('https://believed-shore-vanadium.glitch.me');
    const resp = await fetch('db/db.json');
    const dataInJs = await resp.json();
    setBillsArray(dataInJs);
  }
  useEffect(() => {
    getBills();
  });
  return (
    <div className='display'>
      <h1 className='title'>Bills List</h1>
      <table>
        <thead>
          <tr>
            <th>Bill id</th>
            <th>Number of People</th>
            <th>Price</th>
          </tr>
        </thead>
        {billsArray.length === 0 && <h2>Loading Bills ...</h2>}
        {billsArray.map((bObj) => (
          <tr>
            <td>{bObj.id}</td>
            <td>{bObj.people}</td>
            <td>{bObj.price}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default BillsList;
