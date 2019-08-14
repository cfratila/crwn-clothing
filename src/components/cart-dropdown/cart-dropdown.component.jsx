import React from 'react';
import { connect } from 'react-redux';

import CustomButtom from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './cart-dropdown.styles.scss';

const CartDropDown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))
      }
    </div>
    <CustomButtom>GO TO  CHECKOUT</CustomButtom>
  </div>
);

const mapStateToProps = state => ({
  cartItems: selectCartItemsCount(state)
})

export default connect(mapStateToProps)(CartDropDown);
