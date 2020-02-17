import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HeaderBackground } from './component/header/header-img/header-background.component';
import { HeaderLogo } from './component/header/header-logo/header-logo.component';
import { HeaderContent } from './component/header/header-content/header-content.component';
import ProductList from './component/products/product-list/product-list.component';
import CreditCardTable from './component/credit-card/credit-card.component';
import BenefitsList from './component/benefits/benefits-list/benefits-list.component';

function App() {
  return (
    <div className="App-header">
      <HeaderBackground>
        <HeaderLogo/>
        <HeaderContent/>
      </HeaderBackground>
      <div class="container-main">
        <ProductList/>
        <CreditCardTable />
      
        <BenefitsList/>

      </div>
    </div>
    
  );
}

export default App;
