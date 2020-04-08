import React,{useState} from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import { Formik } from 'formik';
import { globalStyles } from '../styles/global.js';
import * as yup from 'yup';
import Firebase from '../config/firebase'   


const reviewSchema = yup.object({
    email: yup.string()
      .required(),
    password: yup.string()
      .required()
      .min(8),
  });

export default function Login({navigation}){

    const[errorMessage,setError]=useState("")

    const handleError=(error)=>{
        setError(error.errorMessage)
    }

    const handleLogin = (user) => {
        Firebase
        .auth()   
        .signInWithEmailAndPassword(user.email, user.password)
        .then(() => navigation.navigate('Loading'))
        .catch(error => handleError({ errorMessage: error.message }))
    }
    return (
        <View style={globalStyles.container}>
          <Text>Login</Text>
          <Text style={{ color: 'red' }}>
            {errorMessage}
          </Text>
          <Formik
            initialValues={{ email: '',password: '' }}
            validationSchema={reviewSchema}
            onSubmit={(values, actions) => {
            actions.resetForm(); 
            handleLogin(values);
            }}
        >
            {props => (
                <View>
                <TextInput
                    style={globalStyles.textInput}
                    autoCapitalize="none"
                    placeholder="Email"
                    onChangeText={props.handleChange('email')}
                    onBlur={props.handleBlur('email')} 
                    value={props.values.email}
                />
                <Text style={globalStyles.errorText}>{props.touched.email && props.errors.email}</Text>
                <TextInput
                    secureTextEntry
                    style={globalStyles.textInput}
                    autoCapitalize="none"
                    placeholder="Password"
                    onChangeText={props.handleChange('password')}
                    onBlur={props.handleBlur('password')}
                    value={props.values.password}
                />
                <Text style={globalStyles.errorText}>{props.touched.password && props.errors.password}</Text>
                <Button title="Login" onPress={props.handleSubmit} />
                <Button
                    title="Don't have an account? Sign Up"
                    onPress={() => navigation.navigate('Signup')}
                />
                </View>
          )}
          </Formik>
        </View>
        
      )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    textInput: {
      height: 40,
      width: '90%',
      borderColor: 'gray',
      borderWidth: 1,
      marginTop: 8
    }
  })