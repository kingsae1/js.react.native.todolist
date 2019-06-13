import React, {Component} from 'react';
import {
    KeyboardAvoidingView
} from 'react-native';

import Option from './OptionIndex';
import Input from './InputIndex';

import {footer} from '../../Constants/Styles.json';

export default class FooterComp extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={footer.keyboardView}>
                <Option/>
                <Input/>
            </KeyboardAvoidingView>
        );
    }
}
