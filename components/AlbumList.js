import React, { Component } from 'react';
import axios from 'axios'
import { View, Text, ScrollView, Button } from 'react-native';
import AlbumDetail from './AlbumDetail';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';


class AlbumList extends Component {

    state = {
        albums: []
    }


    UNSAFE_componentWillMount() {
        axios.get("https://rallycoding.herokuapp.com/api/music_albums")
            .then(response => this.setState({ albums: response.data }))
    }

    renderAlbums() {
        return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />)
    }

    render() {
        const { navigation, route } = this.props;
        return (
            <ScrollView>
                {this.renderAlbums()}
                <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
                <Button title="Go back" onPress={() => navigation.goBack()} />
            </ScrollView>
        );
    }
}

export default AlbumList;