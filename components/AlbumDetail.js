import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from '../Game/Card';
import CardSection from './CardSection';

function AlbumDetail(props) {
    console.log(props.album)
    return (
        <Card>
            <CardSection>
                <Image
                    style={{ width: 66, height: 58 }} source={{ uri: props.album.thumbnail_image }} />
            </CardSection>
            <CardSection>
                <Text>{props.album.title}</Text>
            </CardSection>
            <CardSection>
                <Text>{props.album.artist}</Text>
            </CardSection>
        </Card>
    );
}

export default AlbumDetail;