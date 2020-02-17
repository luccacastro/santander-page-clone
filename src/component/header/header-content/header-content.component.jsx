import React from 'react';
import './header-content.css'

export const HeaderContent = props => (
    <div className="intro">
      <h1>Investir em educação é o nosso negócio e acreditar em você é o que nos move</h1>
      <div className="red-block">
        <h4>Santander Universidades</h4>
        <ul>
          <li>Gaste R$ 50 por mês e fique livre de anuidade no cartão de crédito</li>
          <li>Bolsa de estudos para alunos de universidades parceiras</li>
        </ul>
        <div class="buttons-option">
          <a href="#" className="btn ghost white-text">Quero abrir uma conta  <i class="arrow-forward"></i></a>

          <a href="#" className="btn ghost-inverse white-text">Faca um cartao <i class="arrow-forward"></i></a>
        </div>
      </div>
    </div>
);
