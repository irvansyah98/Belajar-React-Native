import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {View,Text,TouchableOpacity,StatusBar,Image} from 'react-native';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style={{flex:1}}>
                <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content"/>
                <View
                    style={{
                        backgroundColor:'#FFFFFF',
                        paddingVertical:20,
                        elevation:2,
                        flexDirection:'row',
                        paddingHorizontal:10
                    }}>
                    <TouchableOpacity onPress={()=> this.props.navigation.pop()}>
                        <Icon name="chevron-left" size={25} color="#bdbdbd" />
                    </TouchableOpacity>
                    <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:18, fontWeight:'bold'}}>Detail</Text>
                    </View>
                </View>
                <View style={{flex:1}}>
                    <View style={{justifyContent:'center',alignItems:'center',marginBottom:10}}>
                        <Image source={{uri:'https://reactjs.org/logo-og.png'}} style={{ width:100,height:100 }}/>
                    </View>
                    <View style={{marginHorizontal:20}}>
                        <Text style={{fontWeight:'bold', fontSize:18}}>{this.props.route.params.title}</Text>
                        <Text>{this.props.route.params.body}</Text>
                    </View>
                </View>
                <View
                    style={{
                        backgroundColor:'#FFFFFF',
                        paddingVertical:20,
                        elevation:2,
                        flexDirection:'row',
                        paddingHorizontal:10
                    }}>
                    <TouchableOpacity
                        style={{
                            justifyContent:'center',
                            alignItems:'center',
                            flex:1
                        }}>
                        <Icon name="home" size={20} color="#bdbdbd" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            justifyContent:'center',
                            alignItems:'center',
                            flex:1
                        }}>
                        <Icon name="folder-open" size={20} color="#bdbdbd" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            justifyContent:'center',
                            alignItems:'center',
                            flex:1
                        }}>
                        <Icon name="heart" size={20} color="#bdbdbd" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            justifyContent:'center',
                            alignItems:'center',
                            flex:1
                        }}>
                        <Icon name="user" size={20} color="#bdbdbd" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            justifyContent:'center',
                            alignItems:'center',
                            flex:1
                        }}>
                        <Icon name="cog" size={20} color="#bdbdbd" />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Detail;