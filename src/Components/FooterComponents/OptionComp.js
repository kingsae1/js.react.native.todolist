import React, {Component} from 'react';
import {
    View
} from 'react-native';

import {Text, ListItem, Body, Right, Switch} from 'native-base';
import DatePicker from 'react-native-date-picker-x';
import {footer} from '../../Constants/Styles.json';


export default class OptionComp extends Component {
    state = {
        date: new Date()
    };

    render() {
        return (
            <View style={{
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                backgroundColor: '#ffffff',
                opacity: this.props.isOption ? 1 : 0,
            }}>
                <ListItem>
                    <Body>
                    <Text style={footer.buttonText}>Due Date</Text>
                    </Body>
                    <Right>
                        <Switch
                            onValueChange={value => {
                                this.props.toggleChange(value);
                            }}
                            value={this.props.isToggle}
                        />
                    </Right>
                </ListItem>
                {this.props.isToggle ? (
                    <DatePicker
                        date={this.state.date}
                        onDateChange={date => this.setState({date})}
                        style={{
                            opacity: this.props.isToggle ? 1 : 0
                        }}
                    />
                ) : null}
            </View>
        );
    }
}