import React, { Component } from 'react';
import './products-item.css'

const ProductItem = ({ imageUrl, title, text}) =>(
    <div class="card-column">
        <img src={imageUrl} alt=""/>
        <h5>{title}</h5>
        <p>{text}</p>
        <a href="">Saiba Mais</a>
    </div>
)

export default ProductItem;