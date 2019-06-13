import React, {Component} from 'react';
import {SwipeRow, View, Text, Icon, Button} from 'native-base';
import Color from '../../Constants/Styles.json';

export default class TableComp extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <SwipeRow
                leftOpenValue={75}
                rightOpenValue={-75}
                style={Color.list.background}
                left={
                    <Button success onPress={() => alert('Complete')}>
                        <Text style={Color.list.leftIconText}>Done !</Text>
                    </Button>
                }
                body={
                    <View style={Color.list.background}>
                        <Text style={Color.list.text}>{this.props.text}</Text>
                        {this.props.dueDate ? (
                            <Text style={Color.list.dueText}>
                                {String(this.props.dueDate)}</Text>
                        ) : null}
                    </View>
                }
                right={
                    <Button danger onPress={() => alert('Trash')}>
                        <Icon active name="trash"/>
                    </Button>
                }
            />
        );
    }
}