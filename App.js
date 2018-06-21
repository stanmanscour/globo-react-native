import React from 'react';
import { Home } from './app/views/Home.js';
import { Contact } from './app/views/Contact.js';
import { Videos } from './app/views/Videos.js';
import { VideoDetail } from './app/views/VideoDetail.js';

import { StackNavigator } from 'react-navigation';

const MyRoutes = StackNavigator({
  HomeRT: {
    screen: Home
  },
  ContactRT: {
    screen: Contact
  },
  LessonsRT: {
    screen: Videos
  },
  VideoDetailRT: {
    screen: VideoDetail
  }
}, {
  initialRouteName: 'HomeRT'
});

export default class App extends React.Component {
  render() {
    return (
      <MyRoutes />
    );
  }
}
