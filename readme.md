# App with Authentication using AWS Amplify

### Sign in screen

- Username input
- Password input
- Buttons with an option to sign in using: Facebook, Google, Apple.

### Sign up screen

- Username input
- Password input
- Email input
- Buttons with an option to sign in using: Facebook, Google, Apple.

### Confirm email screen

- code input that is sent to email
- Back to sign in button
- Resend code button

### Forgot password screen

- enter username input
- send instructions via email
- Back to sign in button

### New password screen

- Title
- Username input
- Button to send code
- Back to sign in button

## Navigation

https://reactnavigation.org/docs/stack-navigator/

## React hook form

suitable for bigger applications with multiple forms.

## AWS Amplify

option 1 -

We can customise the default theme provided by Amplify by importing AmplifyTheme and using it in App.js as follows:

const customThemes = {
...AmplifyTheme,
button: {
...AmplifyTheme.button,
backgroundColor: 'blue',
},
};

-option 2

custom styling used here.
