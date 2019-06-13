import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {
    StatusBar,
    StyleSheet,
    View
} from 'react-native';

import {Container} from 'native-base';
import HeaderComp from '../Components/HeaderComponents/HeaderComp'; // Presentational Component
import FooterComp from "../Components/FooterComponents/FooterComp"; // Container Component
import List from '../Components/ListComponents/ListIndex'; // Container Component
import Store from '../Store/Store';

export default class App extends Component<Props> {
    componentDidMount() {
        // Set status bar text to white
        StatusBar.setHidden(false);
        StatusBar.setBarStyle("dark-content");
    }

    render() {
        return (
            <Provider store={Store}>
                <View style={styles.container}>
                    <Container>
                        <HeaderComp/>
                        <List/>
                        <FooterComp/>
                    </Container>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
