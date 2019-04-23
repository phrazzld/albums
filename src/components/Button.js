import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import Styles from '../styles'

const Button = ({ onPress, children }) => {
  return (
    <TouchableOpacity onPress={onPress} style={Styles.buttonStyle}>
      <Text style={Styles.buttonTextStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}

export default Button
