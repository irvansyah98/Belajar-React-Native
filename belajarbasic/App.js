import React, { Component } from 'react';
import {View, Text, FlatList, Alert, TouchableOpacity} from 'react-native';

let nama = "budi";
let siswa = [
  {
    nama : 'budi',
    kelas : 1,
  }
]

let coba = [1,2,3,4];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  showAlert = () => {
    Alert.alert('Hello','World',[{text:'Cancel'},{text:'Ok'}]);
  }

  hitungLuas = (panjang, lebar) =>{
    return panjang * lebar;
  }

  render() {
    return (
      <View>
        <Text>
          hello {nama}
        </Text>
        <Text>
          hello {siswa.nama}
        </Text>
        <Text>
          hello {siswa.kelas}
        </Text>

        <Text>{this.hitungLuas(10, 20)}</Text>

        <TouchableOpacity onPress={() => this.showAlert()}>
          <Text>Test</Text>
        </TouchableOpacity>

        <FlatList
          data={siswa}
          renderItem={({item, index}) => <Text>{item.nama}</Text>}
          keyExtractor={(item) => item.nama}
        />
      </View>
    );
  }
}

export default App;