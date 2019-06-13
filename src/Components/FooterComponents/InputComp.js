import React, {Component} from 'react';

import {View, TextInput} from 'react-native';
import {Button, Text} from 'native-base';

import {footer} from '../../Constants/Styles.json';

class InputComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typing: '',
            inputBottom: 70
        };
    }

    render() {
        return (
            <View style={{
                ...footer.inputView,
                "height": this.state.inputBottom,
            }}>
                <TextInput
                    value={this.state.typing}
                    style={footer.input}
                    underlineColorAndroid="transparent"
                    placeholder="Add a new task"
                    placeholderTextColor="#828282"
                    autoCorrect={false}
                    returnKeyType="done"
                    keyboardAppearance={'dark'}

                    onChangeText={
                        text => {
                            this.setState({
                                typing: text
                            });
                        }
                    }
                    onFocus={
                        () => {
                            this.props.optionChange(true);
                            this.setState({
                                inputBottom: 50
                            });
                        }
                    }
                    onBlur={
                        () => {
                            this.props.optionChange(false);
                            this.props.toggleChange(false);
                            this.setState({
                                toggle: false,
                                inputBottom: 70
                            });
                        }
                    }
                />
                <Button dark style={footer.addButton} onPress={
                    () => {
                        this.props.addTodo({
                            id: this.props.list.length,
                            text: this.state.typing,
                            complete: false,
                            dueDate: new Date()
                        });

                        this.props.toggleChange(false);

                        this.setState({
                            typing: ''
                        });
                    }}>
                    <Text style={footer.buttonText}>ADD</Text>
                </Button>
            </View>
        );
    }
}

export default InputComp;