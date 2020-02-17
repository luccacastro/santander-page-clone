import React, { Component } from 'react';
import './credit-card.css'

const CreditCardTable = (imgUrl, contentRow, anuidadeContent, beneficiosContent) => (
    <div class="credit-card-table">
    <table class="darkTable">
        <thead>
            <tr>
                <th class="padding">CARTÕES</th>
                <th class="space center"></th>
                <th class="left">ANUIDADE</th>
                <th class="space left">BENEFÍCIOS</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td><img src="https://cms.santander.com.br/sites/WPS/imagem/imagem-nova-loja-cartao-play/20-01-22_224159_P_cartoes_0002_play-2020.png" height="67" width="112" alt="" /></td>
                <td class="text">Universitário - Cartão Play</td>
                <td>12x de R$ 21,00 (Sem anuidade gastando R$ 50 em compras)</td>
                <td>Aumento programado do limite do seu cartão Play de acordo com o seu uso. Acompanhe em tempo real todas as compras do seu cartão pelo App Way. <br/><a href="#">Saiba Mais</a></td>
                
            </tr>
        </tbody>
    </table>
    </div>
);

export default CreditCardTable;