/* @flow */

import React, { Component } from 'react';
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
  Alert,
  NetInfo,
  StyleSheet,
  AsyncStorage,
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
      btn: true,
      logins:'not here',
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


checkUser(){


  fetch('http://vveeo.com/react/check.json')
  //get status and append with data and return as one object
  .then(response =>  response.json())
  .then(responseobj => {
    this.setState({
     xtest: responseobj[this.state.text][this.state.rol],
   });

    console.log("return-------",this.state.xtest);


this.props.navigation.navigate(this.reDirect());
  })

}

reDirect(){
  if(this.state.xtest==1)
  {  return 'Admin';
  this.setState({xtest:''});
}
else if(this.state.xtest==2){
  return 'Doc';
  this.setState({xtest:''});
}
else if(this.state.xtest==3){
  return 'Patient';
  this.setState({xtest:''});
}else if(this.state.xtest==4){
  return 'HospitalAdmin';
  this.setState({xtest:''});
}
else if(this.state.xtest==5){
  return 'Pharmacist';
  this.setState({xtest:''});
}
else if(this.state.xtest==6){
  return 'MedicalRep';
  this.setState({xtest:''});
}
else if(this.state.xtest==7){
  return 'LabAsst';
  this.setState({xtest:''});
}
else {
  return 'Chat';
  this.setState({xtest:''});
}
}



componentDidMount() {
  NetInfo.isConnected.fetch().then(isConnected => {
  console.log('First, is ' + (isConnected ? 'online' : 'offline'));
  if ( isConnected )
  {
        this.setState({btn: false})
  }
  else
  {
    Alert.alert("Net info alert","Please connnect to internet for further app use");

  }



});


//Get session
AsyncStorage.multiGet(['user', 'role_no']).then((data) => {
    let user = data[0][1];

    let role_no = data[1][1];
//navigate('Admin')
    if (role_no !== null)
    {
      this.setState({xtest:data[1][1]});
      this.props.navigation.navigate(this.reDirect());


    }

});


/*
// Delete session
logout(){
let keys = ['user', 'role_no'];
AsyncStorage.multiRemove(keys, (err) => {
    ('Local storage user info removed!');
});
}

*/
}


componentWillUnmount() {
  /* */
}
  render() {


      const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView behavior="padding"  style={styles.container}>
        <View style={styles.logoContainer}>
          {}
        <Image source={require('./images/pro_logo_ins.png')}
        style={styles.img}
      />
          <Text style={styles.formTitle}>Please login</Text>
      </View>
      <View style={styles.myForm}>


        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          onChangeText={(text) => this.setState({text})}
          placeholder="Username"
        />
        <TextInput
          underlineColorAndroid="transparent"
          style={styles.input}
          placeholder="Password"
        />

        <TouchableOpacity disabled={this.state.btn} onPress={() => this.checkUser()}
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
