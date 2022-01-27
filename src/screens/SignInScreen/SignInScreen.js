import React, {useState} from "react";
import {View, Image, StyleSheet, useWindowDimensions, TextInput} from "react-native";
import Logo from '../../../assets/images/Logo_1.png'
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons";
import {useNavigation} from '@react-navigation/native'
import {useForm} from 'react-hook-form'

const SignInScreen = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();
  const {control, handleSubmit} = useForm()

  const onSignInPressed = data => {
    console.log(data)
    // validate user
    navigation.navigate('Home')
  }

  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword')

  }
  const onSignUpPress = () => {
    navigation.navigate('SignUp')
  }

  return (
    <View style={[styles.root, {height: height * 0.3}]}>
      <Image
        source={Logo}
        style={styles.logo}
        resizeMode="contain"
      />

      <CustomInput placeholder="Username" control={control} name="username" rules={{required: 'Usr name is required'}}/>
      <CustomInput
        placeholder="Password"
        control={control}
        name="password"
        secureTextEntry
        rules={{
          required: 'Password  is required',
          minLength: {
            value: 8,
            message: 'Пароль должен содержать больше 8 символов',
          },
        }}/>

      <CustomButton text="Sign In" onPress={handleSubmit(onSignInPressed)}/>

      <CustomButton
        text="Forgot password ?"
        onPress={onForgotPasswordPressed}
        type="TERTIARY"
      />

      <SocialSignInButtons/>

      <CustomButton
        text="Don't have an account ? Create one"
        onPress={onSignUpPress}
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
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
});


export default SignInScreen
