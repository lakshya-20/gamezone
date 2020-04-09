import { StyleSheet } from 'react-native';

export const formGlobalStyles = StyleSheet.create({
    errorText: {
        color: 'crimson',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6,
        textAlign: 'center',
      },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
      },
      container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      pageText:{
        padding:10,
        fontSize: 18,
        color:'#333',
      },
      textInput:{
        width:350,
        borderWidth: 2,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 30,
      },
      buttonContainer:{
        backgroundColor:'#737373',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        borderRadius: 10,
        marginTop:10,
        width:250,
      },
      button:{
        fontSize:16,
        color:'#e6e6e6',
        textDecorationStyle:"solid",
      }
});
