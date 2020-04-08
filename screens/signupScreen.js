import React from 'react'
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
export default function Signup({navigation}){
     const handleSignUp = (user) => {
        Firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then(() => navigation.navigate('Drawer'))
        .catch(error => this.setState({ errorMessage: error.message }))
    }
      return (
        <View style={globalStyles.container}>
          <Text>Sign Up</Text>
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
                <Button title="Signup" onPress={props.handleSubmit} />
                <Button
                    title="Already have an account? Login"
                    onPress={() =>navigation.navigate('Login')}
                />
                </View>
          )}
          </Formik>
        </View>
        
      )
}