import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const Products = ({products, history}) => {

    let path;

    if (typeof history === 'undefined'){
        path = ""
    }else{
        path = history.location.pathname
    };


    const productHeading = path ==="/products" ? <h5>Here is your product list. Select a product for more options</h5> : "" ;
    
    const productCards = products.length > 0 ?  
     products.map(p => (<li><Link key={p.id} to ={`/products/${p.id}`}>{p.attributes.name} </Link><br/></li>))  : null

    return(
        <div className="products">
            {productHeading}
            <ol>
                {productCards}
            </ol>
        </div>
    )
}

const mapStateToProps = state => {

    return {
        products: state.product
    }
}

export default connect(mapStateToProps) (Products)