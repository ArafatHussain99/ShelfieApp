import { Link } from 'expo-router';
import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';

//themed components
import Spacer from '@/components/Spacer';
import ThemedText from '@/components/ThemedText';
import { useState } from 'react';
import ThemedButton from '../../components/ThemedButton';
import ThemedTextInput from '../../components/ThemedTextInput';
import ThemedView from '../../components/ThemedView';
import {useUser} from '../../hooks/useUser'

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { register} = useUser()

    const handleSubmit = async()=>{
        try{
            await register(email, password);
            //console.log('current use is: ', user)
        }catch(error){

        }
    }
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
          <ThemedText title={true} styles={styles.title}>Register your Account</ThemedText>
          <ThemedTextInput 
              style = {{width:'80%', marginBottom:20,}}
              placeholder = 'Email'
              keyboardType = 'email-address'
              onChangeText = {setEmail}
              value = {email}
          />
          <ThemedTextInput 
              style = {{width:'80%', marginBottom:20,}}
              placeholder = 'Password'
              onChangeText = {setPassword}
              value = {password}
              secureTextEntry = {true}
          />
          <ThemedButton onPress = {handleSubmit}><Text style={{color:'#f2f2f2'}}>Register</Text></ThemedButton>
          <Spacer height={100}/>
          <Link href={'/login'}><ThemedText>Login instead</ThemedText></Link>
      </ThemedView>
      </TouchableWithoutFeedback>
    )
}

export default Register

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        fontWeight:'bold',
        fontSize:40,
    },
 
})