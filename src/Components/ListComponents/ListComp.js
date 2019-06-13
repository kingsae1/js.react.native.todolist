import React, {Component} from 'react';
import {Text} from 'react-native';
import {Content, Separator} from 'native-base';
import {ACTION} from "../../Actions/Action";
import Color from '../../Constants/Styles.json';
import TableComp from './TableComp';

export default class ListComp extends Component {
    constructor(props) {
        super(props);
    }

    checkTagText = (id) => {
        switch (id) {
            case 'Today' :
            case 'Future' :
            case 'Complete':
                return true;

            default:
                return false;

        }
    };

    updateListComp = () => {
        const todoList = this.props.list;
        let tagList = [];

        for (let i = 0; i < todoList.length; i++) {
            if(!this.checkTagText(todoList[i].id)) {
                tagList.push(
                    <TableComp
                        id={todoList[i].id}
                        text={todoList[i].text}
                        complete={todoList[i].complete}
                        dueDate={todoList[i].dueDate}
                    />
                );
            } else {
                tagList.push(
                    <Separator key={todoList[i].id} style={Color.list.separator.color}>
                        <Text style={Color.list.separator.text}>{todoList[i].text}</Text>
                    </Separator>
                );
            }
        }

        return tagList;
    };

    render() {
        return (
            <Content scrollEnabled={true} style={Color.list.background}>
                {this.updateListComp()}
            </Content>
        );
    }
}
