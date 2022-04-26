import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../SocialSignInButtons.js/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {Auth} from 'aws-amplify';
import {useForm} from 'react-hook-form';
import CustomInput from '../../components/CustomInput/CustomInput';

const SignInScreen = () => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  const navigation = useNavigation();
  const {control, handleSubmit} = useForm();
  const onSignInPressed = async data => {
    // validate user
    try {
      const response = await Auth.signIn(data.username, data.password);
      console.log(response);
    } catch (e) {
      Alert.alert('oops', e.message);
    }
    navigation.navigate('Home');
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
          name="username"
          placeholder="Username"
          control={control}
          rules={{required: 'Username is required'}}
        />
        <CustomInput
          name="password"
          placeholder="Password"
          control={control}
          secureTextEntry
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password should be a minimum of 8 characters',
            },
          }}
        />

        <CustomButton onPress={handleSubmit(onSignInPressed)} text="Sign in" />
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
