import React, { Component } from 'react';
import {View,Text, TouchableOpacity, FlatList} from 'react-native';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View>
                <Text>Detail</Text>
                <Text>{this.props.route.params.username}</Text>
                <Text>{this.props.route.params.contohObject.nama}</Text>
                <Text>{this.props.route.params.contohArray[0].nama}</Text>

                <FlatList
                    data={this.props.route.params.contohArray}
                    renderItem={({item,index}) => <View><Text>{item.nama}</Text></View>}
                />

                <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('Home')}>
                    <Text>To Home</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => this.props.navigation.pop()}>
                    <Text>Pop</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => this.props.navigation.goBack()}>
                    <Text>go back</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Detail;