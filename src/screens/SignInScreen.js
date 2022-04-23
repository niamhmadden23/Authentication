import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../components/CustomInput/CustomInput';
import CustomButton from '../components/CustomButton';

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const onSignInPressed = () => {
    console.warn('sign in');
  };
  const onSignInGoogle = () => {
    console.warn('Google');
  };
  const onSignInFacebook = () => {
    console.warn('Facebook');
  };
  const onSignInApple = () => {
    console.warn('Apple');
  };
  const onForgotPasswordPressed = () => {
    console.warn('forgot password');
  };
  const noAccountPressed = () => {
    console.warn('no account');
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomButton onPress={onSignInPressed} text="Sign in" />
        <CustomButton
          onPress={onSignInGoogle}
          text="Sign in with Google"
          bgColor="#0000FF"
        />
        <CustomButton
          onPress={onSignInApple}
          text="Sign in with Apple"
          bgColor="#e3e3e3"
          fgColor="#4765a9"
        />
        <CustomButton
          onPress={onSignInFacebook}
          text="Sign in with Facebook"
          bgColor="#fae9ea"
          fgColor="#dd4d44"
        />
        <CustomButton
          onPress={onForgotPasswordPressed}
          text="Forgot Password?"
          type="TERTIARY"
        />
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
});

export default SignInScreen;
