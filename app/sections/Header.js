import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  toggleUser = () => {
    this.setState(previousState => {
      return { isLoggedIn: !previousState.isLoggedIn };
    })
  }

  render() {
    let display = this.state.isLoggedIn ? 'Sample user' : this.props.message;
    return (
      <View style={styles.headStyle}>
        <Image 
          style={styles.logoStyle}
          source={ require('./img/logo-android.png')}
        />
        <Text 
          style={styles.headText}
          onPress={this.toggleUser}>{display}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headText: {
    textAlign: 'right',
    color: '#ffffff',
    fontSize: 20,
    flex: 1
  },
  headStyle: {
    paddingTop: 30,
    paddingRight: 10,
    flex: 1,
    backgroundColor: '#35605a',
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: "#000000"
  },
  logoStyle: {
    flex: 1,
    width: undefined,
    height: undefined
  }
})