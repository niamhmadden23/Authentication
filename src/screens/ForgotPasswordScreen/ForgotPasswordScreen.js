import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/core';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');

  const onSendPressed = () => {
    navigation.navigate('NewPassword');
    console.warn('Send');
  };

  const backToSignIn = () => {
    navigation.navigate('SignIn');
    console.warn('back to sign in');
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Reset Your Password</Text>
        <CustomInput
          placeholder="Enter your username"
          value={username}
          setValue={setUsername}
        />
        <CustomButton text="Send" onPress={onSendPressed} />
        <CustomButton
          onPress={backToSignIn}
          text="Back to sign in"
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    paddingTop: 50,
  },
  text: {
    color: 'white',
    fontSize: 40,
    paddingBottom: 10,
  },
  title: {
    fontSize: 24,
    margin: 10,
  },
  registerText: {
    color: 'white',
    margin: 10,
  },
});

export default ForgotPasswordScreen;
