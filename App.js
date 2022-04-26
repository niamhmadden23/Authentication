/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen/SignUpScreen';
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen/ConfirmEmailScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import NewPasswordScreen from './src/screens/NewPasswordScreen/NewPasswordScreen';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import Navigation from './src/navigation';
import Amplify, {Auth} from 'aws-amplify';
import config from './src/aws-exports';
// import {withAuthenticator, AmplifyTheme} from 'aws-amplify-react-native';

Amplify.configure(config);

const App = () => {
  // Auth.signOut();
  return (
    <SafeAreaView style={styles.root}>
      {/* <SignUpScreen /> */}
      {/* <ConfirmEmailScreen /> */}
      {/* <ForgotPasswordScreen /> */}
      {/* <NewPasswordScreen /> */}
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#303030',
  },
});

// OPTION 1 - Theming

// const signUpConfig = {
//   header: 'My Customized Sign Up',
//   hideAllDefaults: true,
//   signUpFields: [
//     {
//       label: 'Full name',
//       key: 'name',
//       required: true,
//       displayOrder: 1,
//       type: 'string',
//     },
//     {
//       label: 'Email',
//       key: 'email',
//       required: true,
//       displayOrder: 2,
//       type: 'string',
//     },
//     {
//       label: 'Username',
//       key: 'preferred_username',
//       required: true,
//       displayOrder: 3,
//       type: 'string',
//     },
//     {
//       label: 'Password',
//       key: 'password',
//       required: true,
//       displayOrder: 4,
//       type: 'password',
//     },
//   ],
// };

// const customThemes = {
//   ...AmplifyTheme,
//   button: {
//     ...AmplifyTheme.button,
//     backgroundColor: 'blue',
//   },
// };

export default App;

// export default withAuthenticator(App, {signUpConfig, theme: customThemes});
