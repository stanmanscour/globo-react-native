import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text,  Alert } from 'react-native';

export class Menu extends React.Component{

  onPress = () => {
    Alert.alert('Le bouton a été touché !');
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
              <Text style={styles.buttonText}>LESSONS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
              <Text style={styles.buttonText}>REGISTER</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
              <Text style={styles.buttonText}>BLOG</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyles} onPress={()=>this.props.navigate('ContactRT')}>
              <Text style={styles.buttonText}>CONTACT</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
              <Text style={styles.buttonText}>QUIZZ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
              <Text style={styles.buttonText}>ABOUT</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container:{
    flex: 6,
    backgroundColor: "#35605a"
  },
  buttonRow: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#FFFFFF",
    borderBottomWidth: 1
  },
  buttonStyles: {
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    height: "50%",
    backgroundColor: "#35605a"
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18
  }
})