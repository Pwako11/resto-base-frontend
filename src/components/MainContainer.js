import React from 'react';
import {connect} from 'react-redux';

const MainContainer = ({products}) => {

    return (
        <div className="mainContainer">

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.product  
    }
}

export default connect(mapStateToProps) (MainContainer);