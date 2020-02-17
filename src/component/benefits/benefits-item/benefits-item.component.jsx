import React, { Component } from 'react';
import './benefits-item.css'

const BenefitsItem = ({imageUrl, title, text}) =>(
    <table class="benefitsTable">
        <thead>
            <tr>
                <th></th>
                <th></th>
                <th></th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td className="separator"><img src={imageUrl} height="228" width="147" alt="" /></td>
                <td className="blank"></td>
                <td>
                  <h3>{title}</h3>
                  <p>{text}</p><br/><a href="#">Saiba Mais</a>
                </td>
            </tr>
        </tbody>
    </table>
);

export default BenefitsItem;