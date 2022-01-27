import React from "react";
import {View, StyleSheet, Text} from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import {useNavigation} from "@react-navigation/native";
import {useForm} from "react-hook-form";

const ForgotPasswordScreen = () => {
  const {control, handleSubmit} = useForm();
  const navigation = useNavigation();

  const onSendPressed = data => {
    console.warn(data)
    navigation.navigate('NewPassword')
  }

  const onSignInPress = () => {
    navigation.navigate('SignIn')
  }

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Reset your password</Text>

      <CustomInput
        placeholder="username"
        name="username"
        control={control}
        rules={{
          required: 'Username is required'
        }}
      />
      <CustomButton text="Send" onPress={handleSubmit(onSendPressed)}/>

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


export default ForgotPasswordScreen
