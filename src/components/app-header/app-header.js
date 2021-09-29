import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import './app-header.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const AppHeader = ({dollars}) => {
    return (
        <header className="header">
            <Link to ={'/'} className = "header__link">Menu</Link>
            <Link to = "/cart" className = "header__link">
                <img className="header__cart" src={cartIcon} alt="cart"></img>
                Total: {dollars} $
            </Link>
        </header>
    )
};

const mapStateToProps = (state) => {
    return {
        dollars: state.dollars
    }
}
const mapDispatchToProps = {}

export default connect(mapStateToProps,mapDispatchToProps)(AppHeader);