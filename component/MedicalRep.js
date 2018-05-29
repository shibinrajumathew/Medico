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



export default class MedicalRep extends Component {

    componentDidMount(){

      AsyncStorage.multiGet(['user', 'role_no']).then((data) => {
          let user = data[0][1];
          let role_no = data[1][1];
      //navigate('Admin')
          if (role_no == null)
          {
            //for set session
            AsyncStorage.multiSet([
            ["user","MedicalRep"],
            ["role_no",'6']
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
    title: 'Medical Representative',
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
              <Text style={styles.font} >Find Item</Text>


            </TouchableOpacity>
        </View>
        <View style={styles.container2}>
          <TouchableOpacity style={[styles.full,styles.offgreen]}>
            <Image source={require('./images/mrep.png')}
          style={styles.img}
        />
            <Text style={styles.font} >Offers</Text>
          </TouchableOpacity>
            <TouchableOpacity style={[styles.full,styles.black]}>
              <Image source={require('./images/dr.png')}
          style={styles.img}
        />

              <Text style={styles.font} >Side Effects</Text>
            </TouchableOpacity>
        </View>
         <View style={styles.container2}>
            <TouchableOpacity style={[styles.full,styles.offgreen]}>
              <Image source={require('./images/pharmacy.png')}
          style={styles.img}
        />
              <Text style={styles.font}>New Medicine(s)</Text>
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
