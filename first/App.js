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
   ToastAndroid,
   BackHandler,
   PermissionsAndroid,
   ActivityIndicator,
   Dimensions,
   Linking
} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

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

  backAction = () => {
    Alert.alert('Perhatian',"Apakah anda yakin ingin keluar?",[
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel'
      },
      {
        text: 'Yes',
        onPress: () => BackHandler.exitApp(),
      }
    ])
    return true;
  }

  requestCameraPermission = async() => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Ijin Akses",
          message: "Ijinkan akses kamera",
          buttonNeutral: "Nanti",
          buttonNegative: "Tidak",
          buttonPositive: "OK"
        }
      )

      if(granted === PermissionsAndroid.RESULTS.GRANTED){
        console.log("akses diberikan");
      }else{
        console.log("akses ditolak");
      }
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount(){
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.backAction
    );
  }

  componentWillUnmount(){
    this.backHandler.remove();
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
        
        <ActivityIndicator size='large' color='crimson' animating={true} />

        <TouchableOpacity
          onPress={ () => Linking.openURL('https://google.com')
            // Alert.alert('Warning','Sukses',[
            //   {
            //     text : 'Cancel',
            //     onPress : () => console.log('cancel pressed'),
            //     style : 'cancel'
            //   },
            //   {
            //     text : 'Ok',
            //     onPress : () => console.log('ok pressed'),
            //     style : 'cancel'
            //   }
            // ])
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
    width:width,
    height:height/4
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