import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
const NewPasswordScreen = () => {
  const [newPassword, setNewPassword] = useState('');
  const [code, setCode] = useState('');

  const onSubmitPressed = () => {
    console.warn('Submit');
  };

  const backToSignIn = () => {
    console.warn('back to sign in');
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>New Password</Text>
        <CustomInput
          placeholder="Enter your code"
          value={code}
          setValue={setCode}
        />
        <CustomInput
          placeholder="Enter your password"
          value={newPassword}
          setValue={setNewPassword}
        />
        <CustomButton text="Submit" onPress={onSubmitPressed} />
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

export default NewPasswordScreen;
