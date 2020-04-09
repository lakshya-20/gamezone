import React,{useState} from 'react'
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native'
import { Formik } from 'formik';
import { formGlobalStyles } from '../styles/formGlobal.js';
import * as yup from 'yup';
import Firebase from '../config/firebase'


const reviewSchema = yup.object({
    email: yup.string()
      .required(),
    password: yup.string()
      .required()
      .min(8),
  });
export default function Signup({navigation}){

    const[errorMessage,setError]=useState("")

    const handleError=(error)=>{
        setError(error.errorMessage)
    }

    const handleSignUp = (user) => {
    Firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then(() => navigation.navigate('Loading'))
        .catch(error =>handleError({ errorMessage: error.message }))
    }
      return (
        <View style={formGlobalStyles.container}>
          <Text style={formGlobalStyles.titleText}>GAMEZONE</Text>
          <Text style={formGlobalStyles.pageText}>Sign Up</Text>
          <Text style={{ color: 'red' }}>
            {errorMessage}
          </Text>
          <Formik
            initialValues={{ email: '',password: '' }}
            validationSchema={reviewSchema}
            onSubmit={(values, actions) => {
            actions.resetForm();    
            handleSignUp(values);
            }}
        >
            {props => (
                <View>
                <TextInput
                    style={formGlobalStyles.textInput}
                    autoCapitalize="none"
                    placeholder="Email"
                    onChangeText={props.handleChange('email')}
                    onBlur={props.handleBlur('email')} 
                    value={props.values.email}
                />
                <Text style={formGlobalStyles.errorText}>{props.touched.email && props.errors.email}</Text>
                <TextInput
                    secureTextEntry
                    style={formGlobalStyles.textInput}
                    autoCapitalize="none"
                    placeholder="Password"
                    onChangeText={props.handleChange('password')}
                    onBlur={props.handleBlur('password')}
                    value={props.values.password}
                />
                <Text style={formGlobalStyles.errorText}>{props.touched.password && props.errors.password}</Text>
                <View style={{justifyContent: 'center',alignItems: 'center',}}>
                <TouchableOpacity onPress={props.handleSubmit} style={formGlobalStyles.buttonContainer}>
                  <Text style={formGlobalStyles.button}>
                    Signup
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>navigation.navigate('Login')} style={formGlobalStyles.buttonContainer}>
                  <Text style={formGlobalStyles.button}>
                    Already have an account? Login
                  </Text>
                </TouchableOpacity>
                </View>
                </View>
          )}
          </Formik>
        </View>
        
      )
}