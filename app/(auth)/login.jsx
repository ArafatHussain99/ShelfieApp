import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router';

//themed components
import ThemedView from '../../components/ThemedView';
import Spacer from '@/components/Spacer';
import ThemedText from '@/components/ThemedText';
import ThemedButton from '../../components/ThemedButton';

const login = () => {
    const handleSubmit = ()=>{
        console.log('Login button pressed') // Placeholder for login logic
    }
  return (
    <ThemedView style={styles.container}>
        <ThemedText title={true} styles={styles.title}>Login to your Account</ThemedText>
        <Spacer height={20}/>
        <ThemedButton onPress = {handleSubmit}><Text style={{color:'#f2f2f2'}}>Login</Text></ThemedButton>
        <Spacer height={100}/>
        <Link href={'/register'}><ThemedText>Register instead</ThemedText></Link>
    </ThemedView>
  )
}

export default login

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