import React, {useState} from "react";
import {View, StyleSheet, Text} from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import {useNavigation} from "@react-navigation/native";
import {useForm} from "react-hook-form";

const ConfirmEmailScreen = () => {
  const {control, handleSubmit} = useForm()
  const navigation = useNavigation()


  const onConfirmPressed = (data) => {
    console.warn(data)
    navigation.navigate('Home')
  }

  const onSignInPress = () => {
    navigation.navigate('SignIn')
  }

  const onResentPress = () => {
    console.warn('onResentPress')
  }


  return (
    <View style={styles.root}>
      <Text style={styles.title}>Confirm your email</Text>

      <CustomInput
        placeholder="Code"
        name="code"
        control={control}
        rules={{
          required: 'Confirm code is required'
        }}
      />
      <CustomButton text="Confirm" onPress={handleSubmit(onConfirmPressed)}/>

      <CustomButton
        text="Resent code"
        onPress={onResentPress}
        type="SECONDARY"
      />
      <CustomButton
        text="Back to Sign in"
        onPress={onSignInPress}
        type="TERTIARY"
      />
    </View>

  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051c60',
    margin: 10
  },
  text: {
    color: 'gray',
    marginVertical: 10
  },
  link: {
    color: '#FDB075'

  },
});


export default ConfirmEmailScreen
