import React, { Component } from 'react';
import {View,Text, TouchableOpacity} from 'react-native';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    componentDidMount(){
        this.unsubscribe = this.props.navigation.addListener('focus',()=>{
            console.log('hello world');
        })
    }

    componentWillUnmount(){
        this.unsubscribe();
    }

    render() {
        return (
            <View>
                <Text>Home</Text>
                <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('Detail',{
                        username: 'Iervan',
                        contohObject:{
                            nama:'budi'
                        },
                        contohArray:[
                            {
                                nama:'adi'
                            }
                        ]
                    })}>
                    <Text>To Detail</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Home;