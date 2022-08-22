import React, { Component } from 'react';
import {View,Text,FlatList,TouchableOpacity} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : [
        {
          nama: 'ani',
          kelas : '1'
        },
        {
          nama: 'budi',
          kelas : '2'
        },
        {
          nama: 'adi',
          kelas : '3'
        }
      ],
      seleksi:[]
    };
  }
  render() {
    return (
      <View>
        <FlatList
          data={this.state.data}
          keyExtractor={(item) => item.kelas}
          renderItem={({item,index}) => (
            <TouchableOpacity onPress={() => this.setState({seleksi:item})}>
              <Text style={{color: this.state.seleksi == item ? 'red' : 'blue'}}>{item.nama}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

export default App;