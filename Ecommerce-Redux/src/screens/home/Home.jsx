import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../../components/productCard/ProductCard';

const Home = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.escuelajs.co/api/v1/products')
      .then((res) => {
        setAllProducts(res.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Welcome to Our Store</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allProducts.map((item) => (
          <ProductCard
            key={item.id}
            image={item.images}
            title={item.title}
            price={item.price}
            description={item.description}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
