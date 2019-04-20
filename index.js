// albums/index.js

// Import library to help create component
import React from 'react'
import { AppRegistry, Text } from 'react-native'

// Create a component
const App = () => (
  <Text>Gar Manarnar</Text>
)

// Render it to the device
AppRegistry.registerComponent('albums', () => App)
