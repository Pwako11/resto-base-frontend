import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {deleteProduct} from '../actions/product.js';

const ProductCard = (props) =>{

return(

    props.product ?
    <div className ="productcard">
        <p>{`Name: ${props.product.attributes.name}`}</p>
        <p>{`Price: $ ${props.product.attributes.price}`}</p>
        <br/>
        <p>{`Description: ${props.product.attributes.description}`}</p>

        <Link to={`/products/${props.product.id}/edit`}>Edit this product</Link>
        <br/>
        <button className="btn btn-secondary" onClick={()=>props.deleteProduct(props.products, props.product, props.history)}>Delete this Product</button>    
        <>
            <button className="btn btn-secondary" onClick={() => props.history.goBack()}>Back</button>
        </>
         
    </div> :
    
    <p> It seems you havent created any Products for your Restaurant. Select create a Product from the navigation bar to get started. </p>
    )

}



const mapStateToProps = (state) => {

    return {
    products: state.product
    }
}

export default connect(mapStateToProps, {deleteProduct}) (ProductCard)