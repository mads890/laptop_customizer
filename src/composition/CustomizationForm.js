import React, { Component } from 'react';
import CustomOption from './CustomOption';

class CustomizationForm extends Component {
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            return (
                <CustomOption key={featureHash} id={featureHash} feature={feature} selected={this.props.selected} updateFeature={this.props.updateFeature} />
            )
            });
        return (
            <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
            </form>
        );
    }
}

export default CustomizationForm;