import React, { useState, useEffect } from 'react';
import {
    Pressable, Text, View, Image, StyleSheet, Dimensions, ScrollView, ActivityIndicator
    , Modal
} from 'react-native'
import { getMovie } from '../services/services';
import StarRating from 'react-native-star-rating';
import dateFormat from 'dateformat';
import Playbutton from '../components/playbutton';


const placeholderImage = require('../assets/images/placeholder.png')
const height = Dimensions.get('screen').height

const Detail = ({ route, navigation }) => {

    const [detail, setDetail] = useState()
    const [modalVisible, setModalVisible] = useState(false);
    const [loaded, setLoaded] = useState()

    const { movieId } = route.params;

    const videoShown = () => {
        setModalVisible(!modalVisible)
    }

    useEffect(() => {

        getMovie(movieId).then(
            movieData => {
                setDetail(movieData)
                console.log('movies here')
                setLoaded(true)
            }
        )

    }, [movieId])
    return (
        <React.Fragment>
            {loaded && (
                <View>
                    <ScrollView >
                        <View style={styles.container}>
                            <Image style={styles.image}
                                resizeMode='cover'
                                source={
                                    detail.poster_path ?
                                        { uri: 'https://image.tmdb.org/t/p/w500' + detail.poster_path }
                                        : placeholderImage
                                } />
                            <View style={styles.container}>
                                <View style={styles.playbutton}>
                                    <Playbutton handlePress={videoShown} />
                                </View>
                                <Text style={styles.title}>{detail.title}</Text>

                            </View>
                            {detail.genres && (
                                <View style={styles.genre_container}>
                                    {detail.genres.map(genre => {
                                        return <Text style={styles.genreText} key={genre.id}>{genre.name}</Text>
                                    })}
                                </View>
                            )}
                            <View style={styles.container}>
                                <StarRating maxStars={5}
                                    disabled={true} fullStarColor={'gold'}
                                    starSize={30} rating={detail.vote_average / 2} />

                                <Text style={styles.overview}>{detail.overview}</Text>
                                <Text style={styles.release_date}>{'Release Date: ' + dateFormat(detail.release_date, 'dd mmmm yyyy')}</Text>

                            </View>

                        </View>

                    </ScrollView>
                    <Modal animationType='slide' visible={modalVisible}
                    >
                        <View style={styles.container}>
                          
                        </View>

                    </Modal>
                </View>
            )}
            {!loaded && <ActivityIndicator size='large' />}
        </React.Fragment>
    );
}

const styles = StyleSheet.create(


    {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            backgroundColor: 'rgb(1,2, 4)',
            color: 'black',
            width: '100%',

        },
        image: {
            height: height / 1,
            width: '100%',


            // borderRadius: 20
        },
        text: {
            fontWeight: '300',
            color: 'white',
            padding: '5%',
            backgroundColor: 'rgb(1,2, 4)'

        },
        title: {
            fontSize: 24,
            fontWeight: '400',
            color: 'white',
            padding: '5%',
            backgroundColor: 'rgb(1,2, 4)'

        },
        genre_container: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgb(1,2, 4)',
            color: 'black',
            marginBottom: '5%'
        },
        genreText: {
            marginRight: '5%',
            color: 'white',
            fontWeight: 'bold'
        },
        playbutton: {
            position: 'absolute',
            top: -25,
            right: 20,
        }
    }
)

export default Detail;