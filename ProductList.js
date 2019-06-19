import React, {Component} from 'react';
import { Product } from './Product';

export class ProductList extends Component {
    constructor(props){
        super(props);
 



        this.state = {
            selectedProducts:[

            ],
            products:[   
                {
                    id:1,
                    name:'Vivo',
                    price:15000
                },
                {
                    id:2,
                    name:'Samsung',
                    price:20000
                },
                {
                    id:3,
                    name:'I-Phone',
                    price:40000
                }
            ]
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(product) {
        
        this.setState({
            selectedProducts: this.state.selectedProducts.concat([product]),
            products:this.state.products.filter(selectedProduct => product.id !== selectedProduct.id )
        });
    }

    
    render(){
                return (
                <div className="row">
                   <h1>Number of Products : {this.state.products.length}</h1>
                   {
                       this.state.products.map(product =>
                        <Product key={product.id} data = {product} click={this.handleSubmit}/>
                    )}
                </div>
            );
    }
}