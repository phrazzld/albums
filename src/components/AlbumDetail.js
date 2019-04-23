import React from 'react'
import { Text, View, Image, Linking } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'
import Styles from '../styles'

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album
  return (
    <Card>
      <CardSection>
        <View style={Styles.albumHeaderStyle}>
          <Image
            style={Styles.albumThumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={Styles.albumTextStyle}>
          <Text style={Styles.albumNameStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={Styles.albumArtStyle}
          source={{ uri: image }}
        />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Buy Now
        </Button>
      </CardSection>
    </Card>
  )
}

export default AlbumDetail
