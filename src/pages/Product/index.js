import React,{Component } from 'react';
import api from '../../services/api'

import './styles.css'

export default class Product extends Component {
    state={
        product:{}
    }

    async componentDidMount(){

        const {id} = this.props.match.params

        let response = await api.get(`/products/${id}`)

        this.setState({product:response.data})
    }
    
	render() {
        const {product} = this.state

        return (
            <div className="product-info">
                <h1>{product.title}</h1>
                <p>{product.description}
                <a href={product.url}>
                    URL:{product.url}
                </a>
                </p>
            </div>
        )
    }
}
