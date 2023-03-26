import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
import './Cosmetics.css'
const Cosmetics = () => {
    const products = [
        {
          "id": "641f8d214d8279af4b560e8b",
          "picture": "https://sdcdn.io/mac/de/mac_sku_NXNT01_1x1_0.png?width=200&height=200",
          "price": 37,
          "name": "Rhoda Henderson",
          "brand": "EXPOSA"
        },
        {
          "id": "641f8d21b27c8d6fc4113100",
          "picture": "https://sdcdn.io/mac/de/mac_sku_NXNT01_1x1_0.png?width=200&height=200",
          "price": 39,
          "name": "Louella Herman",
          "brand": "SOLGAN"
        },
        {
          "id": "641f8d21497dc8eb40b69651",
          "picture": "https://sdcdn.io/mac/de/mac_sku_NXNT01_1x1_0.png?width=200&height=200",
          "price": 31,
          "name": "Morrow Gaines",
          "brand": "EMOLTRA"
        },
        {
          "id": "641f8d21d809aa8f461b5394",
          "picture": "https://sdcdn.io/mac/de/mac_sku_NXNT01_1x1_0.png?width=200&height=200",
          "price": 23,
          "name": "Barnett Lott",
          "brand": "NIKUDA"
        },
        {
          "id": "641f8d213f1775433f38054b",
          "picture": "https://sdcdn.io/mac/de/mac_sku_NXNT01_1x1_0.png?width=200&height=200",
          "price": 27,
          "name": "Melva Schultz",
          "brand": "BISBA"
        },
        {
          "id": "641f8d21606aa21f0845ec17",
          "picture": "https://sdcdn.io/mac/de/mac_sku_NXNT01_1x1_0.png?width=200&height=200",
          "price": 40,
          "name": "Mooney Horn",
          "brand": "KLUGGER"
        }
      ]
    
    return (
        <div  className='grid-container'>
            {
                products.map(product=> <Cosmetic key={product.id} product={product}></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;