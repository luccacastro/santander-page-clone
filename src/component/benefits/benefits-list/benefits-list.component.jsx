import React, {Component} from 'react';
import './benefits-list.css'
import BenefitsItem from '../benefits-item/benefits-item.component';


class BenefitsList extends React.Component {
    constructor(){
        super();

        this.state={
           benefits:[
               {
                   imageUrl: 'https://cms.santander.com.br/sites/WPS/imagem/imagem-universidades-financiamentomedicina/19-08-14_162649_P_santander-pass.jpg',
                   title: 'Financiamento Graduação Medicina',
                   text: 'O boleto da mensalidade chegou e deu frio na barriga? Temos a solução com parcelas menores do que as mensalidades e o dobro do tempo para pagar. ',
               },
               {
                    imageUrl: 'https://cms.santander.com.br/sites/WPS/imagem/imagem-universidades-financiamentoposgradu/19-08-14_164212_P_santander-pass.jpg',
                    title: 'Financiamento Pós-Graduação',
                    text: 'A gente te ajuda a ampliar seus conhecimentos e acelerar sua carreira! Financie sua pós-graduação ou MBA. Veja como é fácil! ',
                },
                {
                    imageUrl: 'https://cms.santander.com.br/sites/WPS/imagem/imagem-universidades-crediuniversitario/19-08-14_165923_P_santander-pass.jpg',
                    title: 'Credi Universidade',
                    text: 'O folego financeiro para apoiar sua jornada em qualquer momento do ano letivo, com até dois meses de carência e 36 meses para pagar!',
                },
                {
                    imageUrl: 'https://cms.santander.com.br/sites/WPS/imagem/imagem-universidade-pass/19-08-14_170933_P_santander-pass.jpg',
                    title: 'Santander Pass',
                    text: 'Seu cartão em forma de pulseira, adesivo, e tag de relógio. Você faz pagamentos sem colocar o cartão na máquina, usando a tecnologia por aproximação. ',
                },
           ]
        }
    }

    render() { 
        let list = (
            <div class="container-benefits">
                <h3>Conheça os benefícios de ser Santander</h3>
            {
                this.state.benefits.map(({imageUrl, text , title}) => (
                    <BenefitsItem imageUrl={imageUrl} text={text} title={title}/>
                ))
            }
        </div>
        )
        
        return list;
    }
}
 
export default BenefitsList;