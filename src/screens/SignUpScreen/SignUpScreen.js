import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../SocialSignInButtons.js/SocialSignInButtons';
const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const onRegisterPress = () => {
    console.warn('register');
  };

  const noAccountPressed = () => {
    console.warn('no account');
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomInput
          placeholder="Repeat password"
          value={passwordRepeat}
          setValue={setPasswordRepeat}
          secureTextEntry
        />
        <CustomButton onPress={onRegisterPress} text="Register an account" />
        <Text style={styles.registerText}>
          By registering you confirm that you accept our privacy policy
        </Text>
        <SocialSignInButtons />
        <CustomButton
          onPress={noAccountPressed}
          text="Don't have an account? Create one here"
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

export default SignUpScreen;
