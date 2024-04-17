import React from 'react';

const EshopItems = ({ eshopItems }) => {

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   fetch('http://localhost:8080/', {
  //     method: 'POST',
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(eshopItems)
  //   })
  // }

  return (
    <div>
      <h1 className='text-center'>EshopItems</h1>
      <div className='row'>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Product code</th>
              <th>Product name</th>
              <th>Volume</th>
              <th>Price</th>
              {/* <th>Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {
              eshopItems.map(eshopItem => (
                eshopItem.volume > 0 &&
                <tr key={eshopItem.id}>
                  <td>{eshopItem.productCode}</td>
                  <td>{eshopItem.productName}</td>
                  <td>{eshopItem.volume}</td>
                  <td>{eshopItem.price}</td>
                  {/* <td class="align-middle">
                    <form onSubmit={handleSubmit} class="d-flex">
                      <input type="number" min="1" step="1" value="1" max={eshopItem.volume} class="form-control col-3 mr-3"/>
                      <button type="submit" class="btn btn-primary btn-sm">Add to cart</button>
                    </form>
                  </td> */}
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EshopItems;
