import React, { useState } from 'react';

export default function OrderManagement() {


    const [customerID, setCustomerID] = useState('');
    const [productID, setProductID] = useState('');
    const [price, setPrice] = useState('');
    const [qty, setQty] = useState('');

    const handleOrderSubmit = async (e) => {
            e.preventDefault();

            try {
                const Order ={
                    customerID,
                    item:[{productID, price, qty}]

                }
            } catch (error) {
                console.error(error)
                alert(error.name)
            }

        console.log('Order Submitted');
        console.log('Product Id:', productID);
        console.log('Customer Id:', customerID);
        console.log('Price:', price);
        console.log('Quantity:', qty);
        
    }

    return (
        <>
            <p>Create Order</p>
            <form onSubmit={handleOrderSubmit}>
                <label htmlFor="cus_Id">Customer Id </label>
                <input type="text" id="cus_id" name="cus_id" value={customerID} onChange={(e) => setCustomerID(e.target.value)} required />
                <br />
                <label htmlFor="prod_id">Product Id </label>
                <input type="text" id="prod_id" name="prod_id" value={productID} onChange={(e) => setProductID(e.target.value)} required></input>
                <br/>
                <label htmlFor="price">Price </label>
                <input type="text" id="price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} required></input>
                <br />
                <label htmlFor="qty">QTY </label>
                <input type="text" id="qty" name="qty" value={qty} onChange={(e) => setQty(e.target.value)} required></input>
                <br />
                <input type="submit" value="submit"></input>

            </form>

        </>
    );
}