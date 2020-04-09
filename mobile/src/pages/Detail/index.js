import React from 'react';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';


import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Detail() {
  const navigation = useNavigation();
  const message = 'Olá, estou entrando em contato pois gostaria de ajudar no caso "Cadelinha atropelada" como valor de R$ 120,00 '

  function navigateBack(){
    navigation.goBack()
  }

  function sendEmail() {
    MailComposer.composeAsync({
        subject: 'Heroi do caso: Cadelinha atropelada',
        recipients: ['adelar@gmail.com'],
        body: message,
    })
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=55555555&text=${message}`);
  }


  return (
    <View style={styles.container}>
      <View style={styles.header}>  
        <Image source={logoImg}/>

        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#E82041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, {marginTop: 0 }]}>ONG:</Text>
        <Text style={styles.incidentValue}>APAD</Text>

        <Text style={styles.incidentProperty}>CASO:</Text>
        <Text style={styles.incidentValue}>Cadelinha atropelada</Text>

        <Text style={styles.incidentProperty}>VALOR:</Text>
        <Text style={styles.incidentValue}>R$ 120,00 </Text>
      </View>
      <View style={styles.contactBox}> 
        <Text style={styles.heroTitle}>Salve o dia! </Text>
        <Text style={styles.heroTitle}>Seja o herói desse caso. </Text>

        <Text style={styles.heroDescription}>Entre em contato: </Text>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={ sendWhatsapp }>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={ sendEmail }>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>          
        </View>
      </View>
    </View>
  );
}