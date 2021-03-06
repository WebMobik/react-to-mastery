import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { auth } from '../../firebase/firebase';

import './header.style.scss';
import { ReactComponent as Logo } from './crown.svg';

const Header = ({currentUser, hidden}) => (
    <div className="header">
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/checkout'>
                    CHECKOUT
                </Link>
                {currentUser ? (
                    <div className='option' onClick={()=>auth.signOut()}>
                        SIGN OUT
                    </div>
                    ) : (
                    <Link className='option' to='/sign-in'>
                        SIGN IN
                    </Link>
                    )
                }
                <CartIcon />
           </div>
           {
               hidden ? null :
               <CartDropdown />
           }
           
    </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: {hidden} }) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);