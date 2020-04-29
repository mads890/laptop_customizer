import React, { Component } from 'react';
import slugify from 'slugify';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

class FeatureItem extends Component {
    render() {
        const feature = this.props.feature
        const item = this.props.item
        return (
            <div key={this.props.id} className="feature__item">
                <input
                  type="radio"
                  id={this.props.id}
                  className="feature__option"
                  name={slugify(feature)}
                  checked={item.name === this.props.selected[feature].name}
                  onChange={e => this.props.updateFeature(feature, item)}
                />
                <label htmlFor={this.props.id} className="feature__label">
                  {item.name} ({USCurrencyFormat.format(item.cost)})
                </label>
              </div>
        );
    }
}

export default FeatureItem;