import React from 'react';
import {View, Text} from 'react-native';
import CustomButton from '../../components/CustomButton';

const SocialSignInButtons = () => {
  const onSignInGoogle = () => {
    console.warn('Google');
  };
  const onSignInFacebook = () => {
    console.warn('Facebook');
  };
  const onSignInApple = () => {
    console.warn('Apple');
  };
  return (
    <>
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
    </>
  );
};

export default SocialSignInButtons;
