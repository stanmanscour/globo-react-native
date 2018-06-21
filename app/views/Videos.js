import React from 'react';
import { Image, TouchableWithoutFeedback, FlatList, View, Text } from 'react-native';

export class Videos extends React.Component {

  static navigationOptions = {
    header: null
  }

  constructor(props){
    super(props);
    this.state = {
      listLoaded: false
    }
  }

  componentDidMount(){
    return fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&q=pluralsight&type=video&key=AIzaSyAKJb1v5tr17SmcC9Fd_qW_uc81HbYgE0g')
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(Array.from(responseJson.items));
      this.setState({
        listLoaded: true,
        videoList: Array.from(responseJson.items)
      })
    })
    .catch( (error) => {
      console.log(error);
    })
  }

  render(){
    const {navigate} = this.props.navigation

    return(
      <View>
        { this.state.listLoaded && (
          <View style={{paddingTop: 30}}>
            <FlatList
              data={this.state.videoList}
              renderItem={({item}) =>
                <TubeItem 
                  navigate={navigate}
                  id={item.id.videoId}
                  title={item.snippet.title}
                  imageSrc={item.snippet.thumbnails.high.url}
                />
              }
            />
          </View>
        )}

        { !this.state.listLoaded && (
          <View style={{paddingTop: 30}}>
            <Text>LOADING</Text>
          </View>
        )}

      </View>
    )
  }

}

export class TubeItem extends React.Component {
  onPress = () => {
    this.props.navigate('VideoDetailRT', {ytubeId: this.props.id})
  };

  render(){
    return (
      <TouchableWithoutFeedback onPress={this.onPress}>
        <View style={{paddingTop: 20, alignItems: 'center'}}>
          <Image 
            style={{width: "100%", height: 200}}
            source={{uri: this.props.imageSrc}}
          />
          <Text>
            {this.props.title}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}