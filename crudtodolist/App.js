import React, { Component } from 'react';
import {View, Text, StatusBar, TextInput, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo : '',
            todoData: []
        };
    }

    componentDidMount = () => {
      this.getData();
    };
    

    check = (item, index) => {
        let allData = this.state.todoData;
        let editItem = item;
        if(editItem.status == 'selesai'){
            editItem.status = 'belum';
        }else{
            editItem.status = 'selesai';
        }

        allData[index].status = editItem.status;
        this.setState({
            todoData: allData
        }, () => this.saveData());
    }

    deleteItem = (index) => {
        let allData = this.state.todoData;
        allData.splice(index,1);
        this.setState({todoData:allData}, () => this.saveData());
    }

    addData = () => {
        let allData = this.state.todoData;
        if(this.state.editMode) {
            allData[this.state.index].name = this.state.todo;
            this.setState({editMode:false})
        }else{
            allData.push({name: this.state.todo, status: 'belum'});
        }
        this.setState({todoData:allData, todo:''}, () => this.saveData());
    }

    saveData = async () => {
        try{
            await AsyncStorage.setItem('@data', JSON.stringify(this.state.todoData));
            console.log('data berhasil disimpan');
        }catch(e){
            console.log(e);
        }
    }

    getData = async () => {
        try {
            let value = await AsyncStorage.getItem('@data');
            value = JSON.parse(value);

            if(value !== null){
                this.setState({todoData:value});
            }
            console.log('berhasil');

        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <View style={{flex:1,backgroundColor:'#212121'}}>
                <StatusBar barStyle="light-content" backgroundColor="#272727"/>
                <View
                    style={{
                        justifyContent:'center',
                        alignItems:'center',
                        backgroundColor:'#303030',
                        paddingVertical:15,
                        elevation:3,
                        marginBottom:10
                    }}>
                    <Text style={{color:'#fafafa'}}>Todolist</Text>
                </View>

                <FlatList
                    data={this.state.todoData}
                    renderItem={({item, index}) => (
                        <View
                            style={{
                                backgroundColor:'#303030',
                                marginHorizontal:20,
                                borderRadius:3,
                                paddingVertical:10,
                                paddingHorizontal:10,
                                marginTop:10,
                                flexDirection:'row'
                            }}>
                            <TouchableOpacity style={{flex:1, justifyContent:'center'}}
                            onPress={() => this.setState({todo: item.name, index, editMode:true})}>
                                <Text style={{color:'#fafafa'}}>{item.name}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={() => this.check(item,index)}
                                style={{justifyContent:'center'}}>
                                <Icon name={item.status == 'selesai' ? 'check-square' : 'square'} size={30} color="#fafafa" />
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={() => this.deleteItem(index)}
                                style={{justifyContent:'center', marginLeft:30}}>
                                <Icon name="trash-alt" size={30} color="#fafafa" />
                            </TouchableOpacity>
                        </View>
                    )}
                    keyExtractor={(item) => item.name}
                />

                <TextInput
                    value={this.state.todo}
                    onChangeText={(text) => this.setState({todo:text})}
                    style={{
                        backgroundColor:'#303030',
                        paddingHorizontal:10,
                        marginHorizontal:20,
                        color:'#FFFFFF',
                        marginBottom:10
                    }}
                />
                <TouchableOpacity
                    style={{
                        backgroundColor:'#303030',
                        marginHorizontal:20,
                        marginBottom:10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingVertical:10,
                        borderRadius:3
                    }}
                    onPress={() => this.addData()}
                >
                    <Text style={{color:'#fafafa'}}>New Todo</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default App;