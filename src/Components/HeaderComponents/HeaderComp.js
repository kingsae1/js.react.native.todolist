import React, {Component} from 'react';
import {
    Header,
    Title,
    Subtitle,
    Button,
    Right,
    Body,
    Icon
} from 'native-base';

import {displayName} from '../../Constants/App.json';
import Styles from '../../Constants/Styles.json';

export default class HeaderComp extends Component {
    constructor(props) {
        super(props);
        const week = new Array('일', '월', '화', '수', '목', '금', '토');
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1;
        const day = today.getDate();
        const dayName = week[today.getDay()];

        this.state.timer = year + "년 " + month + "월 " + day + "일 " + dayName + "요일";
    }

    state = {
        timer: ''
    };

    render() {
        return (
            <Header style={Styles.header.background}>
                <Body style={Styles.header.body}>
                <Title style={Styles.header.text}>{displayName}</Title>
                <Subtitle>{this.state.timer}</Subtitle>
                </Body>
                <Right style={Styles.header.right}>
                    <Button transparent>
                        <Icon name='menu' style={Styles.header.icon}/>
                    </Button>
                </Right>
            </Header>
        );
    }
}