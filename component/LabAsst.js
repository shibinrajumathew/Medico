/* @flow */

import React, { Component } from 'react';
import { Button,SearchBar,Divider,Icon } from 'react-native-elements';
import {
  View,
  ScrollView,
  Text,
  Dimensions,
  Image,
  AsyncStorage,
  BackHandler,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
  },
  font: {
    color: '#fff',
    fontSize: 18,
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#eeebeb',
    padding: 3,
  },

  col1:{
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
  },
  col2:{
    flex:2,
    height: (Dimensions.get('window').height)/5,
    alignItems:'center',
    justifyContent: 'center',
  },
  full:{
    width: '100%',
    height: (Dimensions.get('window').height)/6,
    alignItems:'center',
    justifyContent: 'center',
  },

  black:{
    backgroundColor:'#263238',
  },
  orange:{
      backgroundColor:'#ffab00',
    },
  green:{
    backgroundColor: '#00796b',
  },
  red:{
    backgroundColor: '#ee6e73',
  },
  offgreen:{
    backgroundColor: '#4db6ac',
  },
  img:{
    width: Dimensions.get('window').width,
    height: (Dimensions.get('window').height)/25,
    resizeMode: 'contain',

  },
});



export default class LabAsst extends Component {

    componentDidMount(){

      AsyncStorage.multiGet(['user', 'role_no']).then((data) => {
          let user = data[0][1];
          let role_no = data[1][1];
      //navigate('Admin')
          if (role_no == null)
          {
            //for set session
            AsyncStorage.multiSet([
            ["user","LabAsst"],
            ["role_no",'7']
            ]);


          }

      });


  BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid);


    }
    componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid);
    }
    onBackButtonPressAndroid = () => {
      BackHandler.exitApp();
    }

    static navigationOptions = {
      headerLeft: null,
    title: 'Lab Assistant Home',
    headerStyle:{
      backgroundColor:'#29b6f6',
    },
    headerTitleStyle:{
      color:'white',
    },
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        {/* <SearchBar
  placeholder='Type Here...' /> */}
  <Divider style={{ backgroundColor: 'white', height: 2}} />
        <View style={styles.container2}>
            <TouchableOpacity style={[styles.full,styles.green]}>
              <Image source={require('./images/search.png')}
            style={styles.img}
          />
              <Text style={styles.font} >Find patient</Text>


            </TouchableOpacity>
        </View>
        <View style={styles.container2}>
          <TouchableOpacity style={[styles.full,styles.offgreen]}>
            <Image source={require('./images/lab.png')}
          style={styles.img}
        />
            <Text style={styles.font} >New Test</Text>
          </TouchableOpacity>

        </View>
         <View style={styles.container2}>
            <TouchableOpacity style={[styles.full,styles.offgreen]}>
              <Icon name="receipt"
                color="white"
            style={styles.img}
          />
              <Text style={styles.font}>Bill detials</Text>
            </TouchableOpacity>

          </View>
          <View style={styles.container2}>
             <TouchableOpacity onPress={() => navigate('Home')} style={[styles.full,styles.green]}>
               <Icon name='lock'
               color='#fff'
               size={25}/>
               <Text style={styles.font}>Logout</Text>
             </TouchableOpacity>

           </View>
      </ScrollView>
    );
  }
}
