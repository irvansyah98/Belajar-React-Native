import React, { Component } from 'react';
import {View, Text, StatusBar, FlatList,TouchableOpacity,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:[
                {id:1,judul:"Apel",deskripsi:"ini apel"},
                {id:2,judul:"Jeruk",deskripsi:"ini jeruk"},
                {id:3,judul:"Nanas",deskripsi:"ini nanas"},
                {id:4,judul:"Pepaya",deskripsi:"ini Pepaya"},
                {id:5,judul:"Nangka",deskripsi:"ini Nangka"},
                {id:6,judul:"Durian",deskripsi:"ini Durian"},
                {id:7,judul:"Pear",deskripsi:"ini Pear"},
                {id:8,judul:"Kiwi",deskripsi:"ini Kiwi"},
                {id:9,judul:"Jeruk nipis",deskripsi:"ini Jeruk nipis"},
                {id:10,judul:"Wortel",deskripsi:"ini Wortel"}
            ],
            dataTampil:[
                {id:1,judul:"Apel",deskripsi:"ini apel"},
                {id:2,judul:"Jeruk",deskripsi:"ini jeruk"},
                {id:3,judul:"Nanas",deskripsi:"ini nanas"},
                {id:4,judul:"Pepaya",deskripsi:"ini Pepaya"},
                {id:5,judul:"Nangka",deskripsi:"ini Nangka"},
                {id:6,judul:"Durian",deskripsi:"ini Durian"},
                {id:7,judul:"Pear",deskripsi:"ini Pear"},
                {id:8,judul:"Kiwi",deskripsi:"ini Kiwi"},
                {id:9,judul:"Jeruk nipis",deskripsi:"ini Jeruk nipis"},
                {id:10,judul:"Wortel",deskripsi:"ini Wortel"}
            ],
            pencarian: ''
         };
    }

    pencarian = () => {
        let data = this.state.data;

        data = data.filter((item) => item.judul.toLowerCase().includes(this.state.pencarian.toLowerCase()));

        this.setState({dataTampil:data});
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
                    <View style={{flex:1}}>
                        <Text style={{color:"#ffffff", textAlign:'center',fontWeight:'bold', fontSize:18, marginLeft:15}}>Home</Text>
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('About')}>
                        <Icon style={{marginRight:15, color:"#ffffff"}} name="info-circle" size={25} color="#900" />
                    </TouchableOpacity>
                </View>

                <TextInput
                    value={this.state.pencarian}
                    onChangeText={(text) => this.setState({pencarian:text}, () => this.pencarian())}
                    style={{
                        backgroundColor:"#ffffff",
                        marginHorizontal:20,
                        marginTop:20,
                        marginBottom:30,
                        borderRadius:3
                    }}
                    placeholder="Pencarian"
                />

                <FlatList
                    data={this.state.dataTampil}
                    renderItem={({item,index}) => (
                        <TouchableOpacity 
                            style={{
                                marginVertical:10,
                                marginHorizontal:20,
                                backgroundColor:"#2196f3",
                                padding:10,
                                borderRadius:5,
                                elevation:3
                            }}
                            onPress={() => this.props.navigation.navigate('Detail',{
                                judul : item.judul,
                                deskripsi : item.deskripsi
                            })}>
                            <Text style={{color:"#ffffff"}}>{item.judul}</Text>
                            <Text style={{color:"#ffffff"}}>{item.deskripsi}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
        );
    }
}

export default Home;