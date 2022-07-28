import React, { Component } from 'react';
import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         };
    }
    
    render() {
        return (
            <View style={{flex:1, backgroundColor:'#212121'}}>
                <StatusBar backgroundColor="#1976d2" />
                <View style={{
                    backgroundColor:"#2196f3",
                    paddingVertical:15,
                    elevation:3,
                    flexDirection:'row',
                    paddingHorizontal:20,
                    alignItems:'center'
                }}>
                    <TouchableOpacity onPress={() => this.props.navigation.pop()}>
                        <Icon style={{marginRight:15, color:"#ffffff"}} name="chevron-left" size={25} color="#900" />
                    </TouchableOpacity>
                    <Text style={{color:"#ffffff", textAlign:'center',fontWeight:'bold', fontSize:18}}>About</Text>
                </View>
                <Text style={{color:'#ffffff',marginTop:10, textAlign:'center'}}>Aplikasi ini dibuat oleh Iervan Firdiansyah</Text>
            </View>
        );
    }
}

export default About;