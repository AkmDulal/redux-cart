import React from 'react'

import { Container, Row } from 'react-bootstrap'
import { BiCart, BiHeart, BiSearchAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { Input } from 'antd';
import {useSelector} from "react-redux";
import currencyFormatter from "currency-formatter";
import { Rate } from 'antd';



function median(values){
	values.sort(function(a,b){
  	return a-b;
  });
  var half = Math.floor(values.length / 2);
  
  if (values.length % 2)
  	return values[half];
  else
  	return (values[half - 1] + values[half]) / 2.0;
}

// just declare array
let nums1 = [1,3];
let nums2 = [2];

// array concatenation
let medianArray = nums1.concat(nums2);

// find the median 
console.log(median(medianArray));


function Card() {
    const {products} = useSelector(state => state.ProductsReducer)
    console.log(products, "products products")
    return (
        <div>
            <div className="row">
            <div id="w">
                <div id="page">
                <table id="cart">
                    <thead>
                    <tr>
                        <th className="first">Photo</th>
                        <th className="second">Qty</th>
                        <th className="third">Product</th>
                        <th className="fourth">Line Total</th>
                        <th className="fifth">&nbsp;</th>
                    </tr>
                    </thead>
                    <tbody>

                    {products.map(product => (
                        <tr className="productitm">
                            <td><img src={product.image} className="thumb" /></td>
                            <td><input type="number" value="1" min="0" max="99" className="qtyinput" /></td>
                            <td> {product.category } </td>     
                            <td> {product.price } </td>     
                            <td><span className="remove"><img src="https://i.imgur.com/h1ldGRr.png" alt="X" /></span></td>
                        </tr>
                    ))}
                        <tr className="checkoutrow">
                            <td colspan="5" className="checkout"><button id="submitbtn">Checkout Now!</button></td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Card
