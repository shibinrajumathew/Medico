/* @flow */
import { Button,SearchBar,Divider,Icon } from 'react-native-elements';
import React, { Component } from 'react';
//import ChatScreen from './ChatScreen';
import {
  View,
  ScrollView,
  Image,
  TextInput,
  Picker,
  KeyboardAvoidingView,
  TouchableOpacity,
  Dimensions,
  Text,
  StyleSheet,
} from 'react-native';






export default class Login extends Component {
  constructor(){
    //inherit parent props
    super();
    //create dynamic variables
    this.state={
      movie:'',
      xtest:'',
      f_status:'',
      text:'shibin',
      rol:'role',
    }
  }
  componentWillMount(){
    // fetch('http://vveeo.com/react/check.json')
    // .then((response) => response.json())
    // .then((responseJson) => {
    //     console.log(responseJson.role);
    // })


//net info
// NetInfo.isConnected.fetch().then(isConnected => {
//   console.log('First, is ' + (isConnected ? 'online' : 'offline'));
// });



}
  static navigationOptions = {
    title:'Add New Hospital',
  headerStyle:{
    backgroundColor:'#5c8a8a',
  },
  headerTitleStyle:{
    color:'white',
  },

  };


insertData(){


  fetch('http://vveeo.com/react/check.json')
  //get status and append with data and return as one object
  .then(response =>  response.json())
  .then(responseobj => {
    this.setState({
     xtest: responseobj[this.state.text][this.state.rol],
   });

    console.log("return-------",this.state.xtest);

//not redirect instead use another button
//this.props.navigation.navigate(this.reDirect());
  })

}

reDirect(){
//redirect code here reference:Login.js

}


  render() {

    //const { navigate } = this.props.navigation;
      const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView behavior="padding"  style={styles.container}>
        <View style={styles.logoContainer}>
          {}
        <Image source={require('./../images/pro_logo_ins.png')}
        style={styles.img}
      />
      </View>
      <View style={styles.myForm}>


        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          onChangeText={(text) => this.setState({text})}
          placeholder="Hospital name"
        />

        <TouchableOpacity onPress={() => this.insertData()}
          title="Home" style={styles.buttonContainer}>
          <Text style={styles.buttonText}  >Add</Text>
        </TouchableOpacity>
          <Divider style={{ backgroundColor: 'white', height: 12}} />


      </View>


  </KeyboardAvoidingView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
 img:{
   width: (Dimensions.get('window').width),
   height: (Dimensions.get('window').height)/6,
   resizeMode: 'contain',

 },
  logoContainer: {
    flex: 1,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  myForm: {
    flex:1.5,
    marginTop:10,
    padding: 20,
  },
  formTitle:{
    flex:2,
    fontSize: 22,
    textAlign: 'center',
    color: 'black',
  },
  input:{
    height: 60,
    padding: 20,
    backgroundColor: '#f2f2f2',
    marginBottom: 10,
  },
  buttonContainer:{
    backgroundColor: '#5c8a8a',
    paddingVertical: 25,

  },
  buttonText:{
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',

  }
});
