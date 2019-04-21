// Import libraries for making a component
import React from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import Styles from '../styles'

// Make a component
const Header = (props) => {
  return (
    <SafeAreaView>
      <View style={Styles.viewStyle}>
        <Text style={Styles.textStyle}>{props.headerText}</Text>
      </View>
    </SafeAreaView>
  )
}

// Make the component available to other parts of the app
export default Header
