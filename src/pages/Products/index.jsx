import React from 'react'
import '../styles.css'
import Button from '@mui/material/Button';
import AddProducts from '../../components/Modal/AddProductModal'
import UpdateProduct from '../../components/forms/UpdateProduct'

import { useState, useEffect } from 'react'

const Products = () => {
  const [products, setProducts] = useState([]);

  async function deleteProduct(id) {
    try {
      // console.log(id)
      const res = await fetch(`http://localhost:5000/api/seller/product/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          jwtToken: localStorage.getItem("jwtToken")
        }
      }

      );

      setProducts(products.filter(products => products.productId !== id));
    } catch (err) {
      console.error(err.message);
    }
  }

  const getProducts = async () => {
    const res = await fetch("http://localhost:5000/api/seller/product", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        jwtToken: `${localStorage.getItem('jwtToken')}`,
      }
    })
    const results = await res.json();

    if (!results) {
      throw new Error('Data could not be fetched!')
    } else {
      setProducts(results);
    }

  }

  useEffect(() => {
    getProducts();
  }, []);

  // function update(id){
  //     console.log(id);
  // }

  return (
    <div>
      <AddProducts />
      <div className='dashboard-content'>
        {/* <DashboardHeader
                btnText="New Order" /> */}

        <div className='dashboard-content-container'>
          <div className='dashboard-content-header'>
            <h2>Product List</h2>
          </div>

          <table>
            <thead>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Weigth</th>
              <th>Update</th>
              <th>Delete</th>
            </thead>
            {products.length !==0 ?
              <tbody>
                {products.map(product => (
                  <tr key={product.productId}>
                    <td>{product.productId}</td>
                    <td>{product.name}</td>
                    <td>{product.unitPrice}</td>
                    <td>{product.weight}</td>
                    {/* <td><button onClick={()=> update(product.productId)}>Update</button></td> */}
                    <td><UpdateProduct product={product} /></td>
                    {/* <td><Modal id = {product.productId}/></td> */}
                    <td><span><Button onClick={() => deleteProduct(product.productId)}>Delete</Button></span></td>
                  </tr>
                ))}
              </tbody>
              : <p><center>Product list is empty</center></p>}
          </table>
        </div>
      </div>
    </div>
  )
}

export default Products
