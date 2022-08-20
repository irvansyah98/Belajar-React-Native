import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { FlatGrid } from 'react-native-super-grid';
import {View,Text,TouchableOpacity,StatusBar,Image} from 'react-native';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    getData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => this.setState({data:json}))
            .catch((err) => console.log(err))
    }

    componentDidMount = () => {
      this.getData();
    };
    

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
                    <TouchableOpacity>
                        <Icon name="bars" size={25} color="#bdbdbd" />
                    </TouchableOpacity>
                    <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:18, fontWeight:'bold'}}>Home</Text>
                    </View>
                    <TouchableOpacity>
                        <Icon name="search" size={25} color="#bdbdbd" />
                    </TouchableOpacity>
                </View>
                <View style={{flex:1}}>
                    <FlatGrid
                        itemDimension={300}
                        data={this.state.data}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity 
                                style={{backgroundColor:'#FFFFFF', elevation:2, flexDirection:'row'}}
                                onPress={() => this.props.navigation.navigate('Detail',{
                                    title : item.title,
                                    body : item.body
                                })}>
                                <View style={{justifyContent:'center',alignItems:'center', marginLeft:10}}>
                                    <Image source={{uri:'https://reactjs.org/logo-og.png'}} style={{ width:100,height:100 }}/>
                                </View>
                                <View style={{justifyContent:'center',marginLeft:20, flex:1, marginRight:20}}>
                                    <Text style={{marginBottom:10, fontWeight:'bold'}}>{item.title.slice(0,50)}</Text>
                                    <Text>{item.body.slice(0, 100)}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
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
                        onPress={() => this.props.navigation.navigate('Album')}
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

export default Home;