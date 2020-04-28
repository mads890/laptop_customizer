import React, { Component } from 'react';
import CartItem from './CartItem';
import CartTotal from './CartTotal';

class CartMain extends Component {
    render() {
        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];
            return(
                <CartItem id={featureHash} key={featureHash} selectedOption={selectedOption} feature={feature} />
            )
            })
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                {summary}
                <CartTotal selected={this.props.selected} />
            </section>
        );
    }
}

export default CartMain;