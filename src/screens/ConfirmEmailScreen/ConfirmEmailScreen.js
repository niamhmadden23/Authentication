import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
const ConfirmEmailScreen = () => {
  const [code, setCode] = useState('');

  const onConfirmPressed = () => {
    console.warn('confirm');
  };

  const backToSignIn = () => {
    console.warn('back to sign in');
  };

  const resendCodePressed = () => {
    console.warn('resend code pressed');
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm email</Text>
        <CustomInput
          placeholder="Enter your code"
          value={code}
          setValue={setCode}
        />
        <CustomButton text="Confirm" onPress={onConfirmPressed} />
        <CustomButton
          onPress={backToSignIn}
          text="Back to sign in"
          type="TERTIARY"
        />
        <CustomButton
          onPress={resendCodePressed}
          text="Resend code"
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

export default ConfirmEmailScreen;
