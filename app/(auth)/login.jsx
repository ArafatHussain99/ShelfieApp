import { Link } from 'expo-router';
import { StyleSheet, Text } from 'react-native';
import { Colors } from '../../constants/Colors';

//themed components
import Spacer from '@/components/Spacer';
import ThemedText from '@/components/ThemedText';
import { useState } from 'react';
import ThemedButton from '../../components/ThemedButton';
import ThemedTextInput from '../../components/ThemedTextInput';
import ThemedView from '../../components/ThemedView';
import { useUser } from '../../hooks/useUser';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null)

    const { login } = useUser()

    const handleSubmit = async()=>{
        setError(null)
        try{
            await login(email, password);
            //console.log('current use is: ', user)
        }catch(error){
            setError(error.message)
        }
    }
  return (
    <ThemedView style={styles.container}>
        <ThemedText title={true} styles={styles.title}>Login to your Account</ThemedText>
        <Spacer height={20}/>
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
        <ThemedButton onPress = {handleSubmit}><Text style={{color:'#f2f2f2'}}>Login</Text></ThemedButton>

        <Spacer />
        {error && <Text style={styles.error}>{error}</Text>}

        <Spacer height={100}/>
        <Link href={'/register'}><ThemedText>Register instead</ThemedText></Link>
    </ThemedView>
  )
}

export default Login

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
    error:{
        color: Colors.warning,
        padding: 10,
        backgroundColor: '#f5c1c8',
        borderColor: Colors.warning,
        borderWidth: 1, 
        borderRadius: 6, 
        marginHorizontal: 10,
    }
 
})