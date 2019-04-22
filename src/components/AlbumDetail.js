import React from 'react'
import { Text, View, Image } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Styles from '../styles'

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image } = album
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
    </Card>
  )
}

export default AlbumDetail
