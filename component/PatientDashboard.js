/* @flow */

import React, { Component } from 'react';
import { Button,SearchBar,Divider } from 'react-native-elements';
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



export default class PatientDashboard extends Component {

    componentDidMount(){

      AsyncStorage.multiGet(['user', 'role_no']).then((data) => {
          let user = data[0][1];
          let role_no = data[1][1];
      //navigate('Admin')
          if (role_no == null)
          {
            //for set session
            AsyncStorage.multiSet([
            ["user","patient"],
            ["role_no",'3']
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
    title: 'Patient DashBoard',
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
            <TouchableOpacity style={[styles.full,styles.red]}>
              <Image source={require('./images/search.png')}
            style={styles.img}
          />
              <Text style={styles.font} >Search Doctors</Text>


            </TouchableOpacity>
        </View>
        <View style={styles.container2}>
          <TouchableOpacity style={[styles.col2,styles.offgreen]}>
            <Image source={require('./images/mrep.png')}
          style={styles.img}
        />
            <Text style={styles.font} >Take Appoinment</Text>
          </TouchableOpacity>
            <TouchableOpacity style={[styles.col2,styles.black]}>
              <Image source={require('./images/dr.png')}
          style={styles.img}
        />

              <Text style={styles.font} >Change Doctor</Text>
            </TouchableOpacity>
        </View>
         <View style={styles.container2}>
            <TouchableOpacity style={[styles.full,styles.orange]}>
              <Image source={require('./images/rating.png')}
          style={styles.img}
        />
              <Text style={styles.font}>Rating & Points</Text>
            </TouchableOpacity>

          </View><View style={styles.container2}>
            <TouchableOpacity style={[styles.col2,styles.green]}>
              <Image source={require('./images/lab.png')}
          style={styles.img}
        />
              <Text style={styles.font} >Enter Test Result</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.col1,styles.offgreen]}>
              <Image source={require('./images/lab.png')}
          style={styles.img}
        />
              <Text style={styles.font} >View Bill</Text>
            </TouchableOpacity>

          </View>
          <View >
          <Button
         raise
         icon={{name: 'lock', size: 32}}
         buttonStyle={{
           backgroundColor: '#ff4f00',
           borderRadius: 3,
       }}
         textStyle={{textAlign: 'center'}}
         onPress={() => navigate('Home')}
         title="Log Out"
       />
     </View>
      </ScrollView>
    );
  }
}
