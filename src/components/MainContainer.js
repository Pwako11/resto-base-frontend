import React from 'react';
import {connect} from 'react-redux';

const MainContainer = () => {

    return (
        <div className="mainContainer">
            <p> What would you like to do today? </p>

            <p>Choose the options in the navigation bar to view your product list or add products to your list.  </p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.product  
    }
}

export default connect(mapStateToProps) (MainContainer);