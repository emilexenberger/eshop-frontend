import React, { useState, useEffect } from 'react';
import EshopItems from './components/EshopItems';

const Home = () => {
  const [eshopItems, setEshopItems] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/eshop/items')
      .then(res => {
        if(!res.ok) {
          throw Error('Could not fetch the data for that resource');
        }
        return res.json()
      })
      .then(data => {
        setEshopItems(data);
        setIsPending(false);
        setError(null);
      })
      .catch(err => {
        setIsPending(false);
        setError(err.message);
      })
  }, []);

  return (
    <div className='Home'>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {!error && !isPending && <EshopItems eshopItems={eshopItems} />}
    </div>
  );
}

export default Home;
