import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../SocialSignInButtons.js/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const onSignInPressed = () => {
    // validate user
    navigation.navigate('Home');
    console.warn('sign in');
  };
  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
    console.warn('forgot password');
  };
  const noAccountPressed = () => {
    navigation.navigate('SignUp');
    console.warn('no account');
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.text}>Sign in</Text>
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
        <SocialSignInButtons />
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
  text: {
    color: 'white',
    fontSize: 40,
    paddingBottom: 10,
  },
});

export default SignInScreen;
