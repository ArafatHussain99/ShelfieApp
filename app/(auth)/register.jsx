import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router';

//themed components
import ThemedView from '../../components/ThemedView';
import Spacer from '@/components/Spacer';
import ThemedText from '@/components/ThemedText';
import ThemedButton from '../../components/ThemedButton';

const Register = () => {
    const handleSubmit = ()=>{
        console.log('Registration button pressed') // Placeholder for login logic
    }
  return (
    <ThemedView style={styles.container}>
        <ThemedText title={true} styles={styles.title}>Register your Account</ThemedText>
        <Spacer height={20}/>
        <ThemedButton onPress = {handleSubmit}><Text style={{color:'#f2f2f2'}}>Register</Text></ThemedButton>
        <Spacer height={100}/>
        <Link href={'/login'}><ThemedText>Login instead</ThemedText></Link>
    </ThemedView>
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