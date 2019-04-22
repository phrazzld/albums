// Import library to help create component
import React from 'react'
import { AppRegistry, Text, View } from 'react-native'
// Import custom components
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'

// Create App component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
)

// Render App component to the device
AppRegistry.registerComponent('albums', () => App)
