import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const CustomButton = ({onPress, text, type = 'PRIMARY', bgColor, fgColor}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
      ]}>
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? {color: fgColor} : {},
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 5,
    width: '90%',
    alignItems: 'center',
    marginVertical: 5,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
  },
  container_PRIMARY: {
    backgroundColor: '#CC66CC',
  },
  container_TERTIARY: {},
});

export default CustomButton;
