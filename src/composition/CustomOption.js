import React, { Component } from 'react';
import slugify from 'slugify';
import FeatureItem from './FeatureItem';


class CustomOption extends Component {
    render() {

        const feature = this.props.feature
        const features = this.props.features
        const options = features[feature].map(item => {
            const itemHash = slugify(JSON.stringify(item));
            return (
              <FeatureItem key={itemHash} id={itemHash} feature={feature} item={item} selected={this.props.selected} updateFeature={this.props.updateFeature} />
            );
        });
        return (
            <fieldset className="feature" key={this.props.id}>
                  <legend className="feature__name">
                    <h3>{feature}</h3>
                  </legend>
                  {options}
            </fieldset>
        );
    }
}

export default CustomOption;