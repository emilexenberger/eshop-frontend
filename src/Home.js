import React, { useState, useEffect } from 'react';
import EshopItems from './components/EshopItems';

const Home = () => {
  const [eshopItems, setEshopItems] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8080/eshop/items')
      .then(res => res.json())
      .then(data => {
        setEshopItems(data);
        setIsPending(false);
      });
  }, []);

  return (
    <div className='Home'>
      {isPending && <div>Loading...</div>}
      {!isPending && <EshopItems eshopItems={eshopItems} />}
    </div>
  );
}

export default Home;
