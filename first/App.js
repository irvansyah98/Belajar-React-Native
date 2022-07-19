import React, { Component } from 'react';
import {
  Text,
   View, 
   StatusBar, 
   Image, 
   TouchableOpacity, 
   Switch, 
   TextInput, 
   ScrollView, 
   StyleSheet,
   FlatList,
   Alert,
   ToastAndroid
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      header : 'Home',
      value : true,
      username : '',
      data : [1,2,3,4,5],
      dataBarang : [
        {
          namaBarang : 'apel',
          harga : 10000
        },
        {
          namaBarang : 'jeruk',
          harga : 15000
        },
        {
          namaBarang : 'nanas',
          harga : 17000
        },
        {
          namaBarang : 'durian',
          harga : 17000
        },
        {
          namaBarang : 'semangka',
          harga : 17000
        },
        {
          namaBarang : 'jambu',
          harga : 17000
        },
        {
          namaBarang : 'nangka',
          harga : 17000
        },
      ]
     };
  }
  render() {
    return (
      <View style={{flex:1}}>
      <StatusBar barStyle="light-content" backgroundColor="#e53935"/>
        <View style={styles.textheaderContainer}>
          <Text style={styles.textheader}>
            {this.state.header}
          </Text>
        </View>
        <TouchableOpacity
          onPress={ () => 
            Alert.alert('Warning','Sukses',[
              {
                text : 'Cancel',
                onPress : () => console.log('cancel pressed'),
                style : 'cancel'
              },
              {
                text : 'Ok',
                onPress : () => console.log('ok pressed'),
                style : 'cancel'
              }
            ])
          }
          style={styles.imageContainer}>
          <Image 
            source={require('./src/images/image1.jpg')}
            style={styles.image}
          />
        </TouchableOpacity>

        <FlatList
          style={{flex:1, marginTop: 20}}
          data={this.state.dataBarang}
          renderItem={({item,index}) => 
            <TouchableOpacity 
            onPress={() => ToastAndroid.show('clicked ' + item.namaBarang,ToastAndroid.SHORT)}
            style={{
              marginBottom : 10,
              backgroundColor : '#e53935',
              marginHorizontal : 20,
              borderRadius : 10,
              padding : 10
            }}>
              <Text style={{color:'#ffffff'}}>{item.namaBarang}</Text>
              <Text style={{color:'#ffffff'}}>{item.harga}</Text>
            </TouchableOpacity>
          }
          keyExtractor={(item) => item.namaBarang}
        />

        {/* <View style={styles.switch}>
          <Switch
            value={this.state.value}
            onValueChange={() => this.setState({value : !this.state.value})}
          />
        </View>

        <TextInput
          value={this.state.username}
          style={styles.textinput}
          onChangeText={(value) => this.setState({username:value})}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={{color:"#ffffff"}}>Click Me</Text>
        </TouchableOpacity> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button : {
    backgroundColor:'#c62828',
    paddingVertical:20,
    justifyContent:'center',
    alignItems:'center',
    marginTop:20,
    marginHorizontal:20,
    elevation:3,
    borderRadius:50
  },
  textinput : {
    borderBottomWidth:1, 
    marginHorizontal: 20, 
    paddingVertical:10, 
    borderColor:'#c62828'
  },
  switch : {
    justifyContent:'center',
    alignItems:'center',
    marginTop:20
  },
  image : {
    width:300,
    height:300
  },
  imageContainer : {
    justifyContent:'center',
    alignItems:'center'
  },
  textheader : {
    color:'#FFFFFF',
    fontWeight:'bold'
  },
  textheaderContainer : {
    backgroundColor:'#c62828',
    paddingVertical:20,
    justifyContent: 'center',
    alignItems:'center',
    elevation:10
  }
})

export default App;