import React from "react";
import {View, StyleSheet, Text} from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons";
import {useNavigation} from '@react-navigation/native';
import {useForm} from "react-hook-form";

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const SignUpScreen = () => {
  const {control, handleSubmit, watch} = useForm();
  const pwd = watch('password')
  const navigation = useNavigation()

  const onRegisterPressed = () => {
    navigation.navigate('ConfirmEmail')
  }

  const onSignInPress = () => {
    navigation.navigate('SignIn')
  }

  const onTermsOfUsePressed = () => {
    console.warn('onTermsOfUsePressed')
  }
  const onPrivacyPressed = () => {
    console.warn('onPrivacyPressed')
  }


  return (
    <View style={styles.root}>
      <Text style={styles.title}>Create an account</Text>

      <CustomInput
        placeholder="Username"
        name="username"
        control={control}
        rules={{
          required: 'Username is required',
          minLength: {value: 3, message: 'Username should be at least 3 characters long '},
          maxLength: {value: 24, message: 'Username should be max 24 characters long '},
        }}
      />
      <CustomInput
        placeholder="Email"
        name="email"
        control={control}
        rules={{
          pattern: {value: EMAIL_REGEX, message: 'Email is invalid'}
        }}
      />
      <CustomInput
        placeholder="Password"
        name="password"
        control={control}
        secureTextEntry
        rules={{
          required: 'Password is required',
          minLength: {value: 8, message: 'Password should be at least 8 characters long '},
        }}
      />
      <CustomInput
        placeholder="Repeat Password"
        name="password-repeat"
        control={control}
        secureTextEntry
        rules={{
          validate: value => value === pwd || 'Password do not match'
        }}
      />

      <CustomButton text="Register" onPress={handleSubmit(onRegisterPressed)}/>

      <Text style={styles.text}>By registering, you confirm that you accept our{' '}
        <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and{' '}
        <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text>
      </Text>

      <SocialSignInButtons/>

      <CustomButton
        text="Have an account ? Sign in"
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


export default SignUpScreen
