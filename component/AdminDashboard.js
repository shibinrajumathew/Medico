/* @flow */

import React, { Component } from 'react';
import { Button,SearchBar,Divider } from 'react-native-elements';
import {
  View,
  ScrollView,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  StyleSheet,
  BackHandler,
  AsyncStorage,
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
  },
  font: {
    color: '#fff',
    fontSize: 16,
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



export default class AdminDashboard extends Component {
  componentDidMount(){

    AsyncStorage.multiGet(['user', 'role_no']).then((data) => {
        let user = data[0][1];
        let role_no = data[1][1];
    //navigate('Admin')
        if (role_no == null)
        {
          //for set session
          AsyncStorage.multiSet([
          ["user","admin"],
          ["role_no",'1']
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
    title: 'System Admin Home',
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
            <TouchableOpacity style={[styles.col1,styles.black]}
              onPress={() => this.props.navigation.navigate('AddPatient')}
              >
            <Image source={require('./images/patient.png')}
            style={styles.img}
          />

            <Text style={styles.font} >Patient</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.col2,styles.red]}
              onPress={() => this.props.navigation.navigate('AddDr')}
              >
              <Image source={require('./images/dr.png')}
            style={styles.img}/>
              <Text style={styles.font} >Doctors</Text>


            </TouchableOpacity>
        </View>
        <View style={styles.container2}>
          <TouchableOpacity style={[styles.col2,styles.offgreen]}
            onPress={() => this.props.navigation.navigate('AddMed_Rep')}
            >
            <Image source={require('./images/mrep.png')}
          style={styles.img}
        />
            <Text style={styles.font} >Medical Rep</Text>
          </TouchableOpacity>
            <TouchableOpacity style={[styles.col2,styles.green]}
              onPress={() => this.props.navigation.navigate('AddPharm')}
              >
              <Image source={require('./images/pharmacy.png')}
          style={styles.img}
        />

              <Text style={styles.font} >Pharmacist</Text>
            </TouchableOpacity>
        </View>
         <View style={styles.container2}>
            <TouchableOpacity style={[styles.full,styles.orange]}
              onPress={() => this.props.navigation.navigate('Addhospital')}
              >
              <Image source={require('./images/Ambulance.png')}
          style={styles.img}
        />
              <Text style={styles.font}>Hospital</Text>
            </TouchableOpacity>

          </View><View style={styles.container2}>
            <TouchableOpacity style={[styles.col2,styles.red]}
              onPress={() => this.props.navigation.navigate('AddLab_asis')}
              >
              <Image source={require('./images/lab.png')}
          style={styles.img}
        />
              <Text style={styles.font} >Lab</Text>
            </TouchableOpacity>
              <TouchableOpacity style={[styles.col1,styles.black]}>
                <Image source={require('./images/more.png')}
            style={styles.img}
          />
                <Text style={styles.font} >More</Text>


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
