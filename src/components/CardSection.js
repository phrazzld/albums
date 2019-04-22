import React from 'react'
import { View } from 'react-native'
import Styles from '../styles'

const CardSection = (props) => {
  return (
    <View style={Styles.cardSectionStyle}>
      {props.children}
    </View>
  )
}

export default CardSection
