import React from 'react';
import { Text, View, TextInput, TouchableHighlight, Alert, AsyncStorage, StyleSheet } from 'react-native';

export class Login extends React.Component {

    state = {
        passwrd: '',
        username: ''
    }
    
    static navigationOptions = {
        header: null
    }

    login = () => {

        if ( !this.state.username ){
            Alert.alert('Please enter a username');
        } else if ( !this.state.passwrd ){
            Alert.alert('Please enter a password');
        } else {
            AsyncStorage.getItem('userLoggedIn', (err, result) => {
                if (result !== 'none'){
                    Alert.alert('Someone already logged on');
                    this.props.navigation.navigate('HomeRT');
                } else {

                    AsyncStorage.getItem(this.state.username, (err, result) => {
                        
                        if (result !== null){
                            if (result !== this.state.passwrd){
                                Alert.alert("Password incorrect")
                            } else {
                                AsyncStorage.setItem('userLoggedIn', this.state.username, (err, result) => {
                                    Alert.alert(`${this.state.username} logged in`);
                                    this.props.navigation.navigate('HomeRT');
                                })
                            }
                        } else {
                            Alert.alert(`No account for ${this.state.username}`);
                        }

                    })

                }
            })
        }
    }

    cancelLogin = () => {
        Alert.alert("Login cancelled")
        this.props.navigation.navigate('HomeRT');
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Login</Text>
                <TextInput 
                    style={styles.inputs}
                    onChangeText={(text) => this.setState({username: text})}
                    value={this.state.username}
                />
                <Text>Enter Username</Text>

                <TextInput 
                    style={styles.inputs}
                    onChangeText={(text) => this.setState({passwrd: text})}
                    value={this.state.passwrd}
                    secureTextEntry={true}
                />
                <Text>Enter Password</Text>

                <TouchableHighlight onPress={this.login} underlayColor='#31e981'>
                    <Text style={styles.buttons}>Login</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={this.cancelLogin} underlayColor='#31e981'>
                    <Text style={styles.buttons}>Cancel</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: '45%',
        paddingTop: '10%'
    },
    heading: {
        fontSize: 16,
        flex: 1
    }, 
    label: {
        paddingBottom: 10
    },
    buttons: {
        marginTop: 15,
        fontSize: 16
    },
    inputs: {
        flex: 1,
        width: '80%',
        padding: 10
    }
})