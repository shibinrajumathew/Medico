/* @flow */

import React, { Component } from 'react';
import ChatScreen from './ChatScreen';
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
      movie:''
    }
  }
 
  static navigationOptions = {
    title:'Please Login',
  //   title: (<Image source={require('./images/pro_logo_ins.png')}
  //
  // /> ),
  headerStyle:{
    display:'none',},
  headerTitleStyle: {
    // marginLeft:'auto',
    // marginRight:'auto',
    fontWeight:'bold',
    display:'none',
  },

  };
  render() {
      const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView behavior="padding"  style={styles.container}>
        <View style={styles.logoContainer}>
          {}
        <Image source={require('./images/pro_logo_ins.png')}
        style={styles.img}
      />
          <Text style={styles.formTitle}>{this.state.movie}Please login</Text>
      </View>
      <View style={styles.myForm}>


        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Username"
        />
        <TextInput
          underlineColorAndroid="transparent"
          style={styles.input}
          placeholder="Password"
        />
        <TouchableOpacity onPress={() => navigate('Admin')}
        title="Home" style={styles.buttonContainer}>
          <Text style={styles.buttonText}  >Login</Text>
        </TouchableOpacity>


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
   width: Dimensions.get('window').width,
   height: (Dimensions.get('window').width)/4,
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
