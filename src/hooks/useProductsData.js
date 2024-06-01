import { useEffect } from 'react';
import { useGlobal } from '../context/GlobalContext';

//
const useProductsData = () => {
  const { products, setProducts } = useGlobal();

  useEffect(() => {
    // Simulate API call
    const fetchProducts = async () => {
      try {
        setTimeout(() => {
          setProducts([
            {
              id: 1,
              customerName: 'product1',
              price: 100,
              lastModified: '24/5/2024 (11:07 PM)',
            },
            {
              id: 2,
              customerName: 'product2',
              price: 210,
              lastModified: '24/5/2024 (11:30 PM)',
            },
            {
              id: 3,
              customerName: 'product3',
              price: 300,
              lastModified: '24/5/2024 (11:45 PM)',
            },
          ]);
        }, 1000);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [setProducts]);

  return products;
};

export default useProductsData;
