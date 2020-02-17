import React, { Component } from 'react';
import ProductItem from '../product-item/product-item.component';
import './product-list.css'

class ProductList extends React.Component{
    constructor(){
        super();

        this.state = {
            products: [
                {
                    title: 'Formação',
                    imageUrl: 'https://cms.santander.com.br/sites/WPS/imagem/imagem-universidades-formacao/19-08-14_131029_P_imagem.universidade.formacao.jpg',
                    text: 'Programas de bolsas de estudo nacionais e internacionais para estudantes de graduação, pós-graduação e professores universitários.',
                },
                {
                    title: 'Emprego',
                    imageUrl: 'https://cms.santander.com.br/sites/WPS/imagem/imagem-universidades-emprego/19-08-14_132236_P_image.jpg',                   
                    text: 'Programas de estágio e emprego em parceria com a Universia.',
                },
                {
                    title: 'Empreendedorismo',
                    imageUrl: 'https://cms.santander.com.br/sites/WPS/imagem/imagem-universidade-empreendedorismo/19-08-14_133208_P_image.jpg',
                    text: 'Programas de desenvolvimento de empreendedores, com mentoria, investimento financeiro e bolsas de estudo.',
                },
            ]
        }
    }
    render(){
        return(
            <div class="product-show">
                {
                    this.state.products.map(({title, imageUrl, text}) =>(
                        <ProductItem title={title} imageUrl={imageUrl} text= {text}/>
                    ))
                }
            </div>
        )
    }
}

export default ProductList;