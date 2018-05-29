/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,StyleSheet,Text,View,Image,Button,KeyboardAvoidingView,Dimensions
} from 'react-native';

import { StackNavigator } from 'react-navigation';
//-----------------begins components----
import QrLogin from './component/QrLogin';
import Login from './component/Login';
import AdminDashboard from './component/AdminDashboard';
import HospitalAdmin from './component/HospitalAdmin';
import DocDashboard from './component/DocDashboard';
import PatientDashboard from './component/PatientDashboard';
import MedicalRep from './component/MedicalRep';
import Pharmacist from './component/Pharmacist';
import LabAsst from './component/LabAsst';

//level 2
import Addhospital from './component/sys_admin/New_hospital';
import AddDr from './component/sys_admin/New_dr';
import AddPatient from './component/sys_admin/New_patient';
import AddMed_Rep from './component/sys_admin/New_med_rep';
import AddPharm from './component/sys_admin/New_pharm';
import AddLab_asis from './component/sys_admin/New_lab_assis';
import New_appointment from './component/sys_admin/New_appointment';





export const SimpleApp = StackNavigator({

  Home: { screen: QrLogin },
  Login: { screen: Login },
  QrLogin: { screen: QrLogin },

  Admin: { screen: AdminDashboard },
  HospitalAdmin: { screen: HospitalAdmin },

  Doc: { screen: DocDashboard },
  Pharmacist: { screen: Pharmacist },
  LabAsst: { screen: LabAsst },
  MedicalRep: { screen: MedicalRep },
  Patient: { screen: PatientDashboard },
  //level 2
  Addhospital: { screen: Addhospital,
      navigationOptions: {gesturesEnabled: false}
  },
  AddDr:{ screen:AddDr},
  AddPatient:{ screen:AddPatient},
  AddMed_Rep:{ screen:AddMed_Rep},
  AddPharm:{ screen:AddPharm},
  AddLab_asis:{ screen: AddLab_asis},
  New_appointment:{ screen:New_appointment},
});


export default class App extends Component<{}> {
  render() {
    return (
      <SimpleApp />

    );
  }
}
