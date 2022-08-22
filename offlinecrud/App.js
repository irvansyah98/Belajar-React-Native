import React, { Component } from 'react';
import {View,Text,TouchableOpacity, FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

let obj = {nama: 'hello', alamat: 'test'};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value:[],
      arr:[
        {nama: 'hello1', alamat: 'test'},
        {nama: 'hello2', alamat: 'test'},
        {nama: 'hello3', alamat: 'test'}
      ]
    };
  }

  saveData = async (data, key) => {
    try{
      await AsyncStorage.setItem(key, JSON.stringify(data));
      console.log('data berhasil disimpan');
    }catch(e){
      console.log(e);
    }
  }

  getData = async (key) => {
    try{
      let value = await AsyncStorage.getItem(key);
      value = JSON.parse(value);

      if(value !== null){
        this.setState({value});
      }
      console.log('berhasil get data ', value);
    }catch(e){
      console.log(e);
    }
  }

  updateData = async () => {
    let value = this.state.value;
    value[0].nama = 'hello7';

    this.saveData(value,'@array');
    this.setState({value});
  }

  deleteData = async (key) => {
    try{
      await AsyncStorage.removeItem(key);
      console.log('berhasil hapus');
      this.setState({value:[]});
    }catch(e){
      console.log(e);
      console.log('gagal hapus');
    }
  }

  componentDidMount = () => {
    this.getData('@array');
  };
  

  render() {
    return (
      <View>
        {/* <Text>{this.state.value}</Text> */}
        <TouchableOpacity onPress={() => this.saveData('Hello','@str')}>
          <Text>Simpan</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.saveData(obj,'@object')}>
          <Text>Simpan Object</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.saveData(this.state.arr,'@array')}>
          <Text>Simpan Array</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.updateData()}>
          <Text>Update Array</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.getData('@array')}>
          <Text>GET</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.deleteData('@array')}>
          <Text>Delete</Text>
        </TouchableOpacity>

        <FlatList
          data={this.state.value}
          renderItem={({item}) => <Text>{item.nama}</Text>}
          keyExtractor={(item) => item.nama}
        />
      </View>
    );
  }
}

export default App;