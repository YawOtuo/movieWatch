import React, { useState, useEffect  } from 'react';
import {
    Pressable, Text, View, Image, StyleSheet, Dimensions, ScrollView,
     ActivityIndicator
    , Modal, Linking
} from 'react-native'
import { getMovie } from '../services/services';
import StarRating from 'react-native-star-rating';
import dateFormat from 'dateformat';
import Playbutton from '../components/playbutton';
import Video from 'react-native-video';
import Vp from '../components/Vp';
import Youtube from '../components/youtube';


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
                console.log(movieData)
                setLoaded(true)
            }
        )

    }, [movieId])

    const openurl = () => {
        Linking.openURL(`https://www.youtube.com/results?search_query=${detail.title}`)}

    
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
                                    <Playbutton handlePress={openurl} />
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

                                <Text style={styles.detailOverview}>{detail.overview}</Text>
                                <Text style={styles.release_date}>{'Release Date: ' + dateFormat(detail.release_date, 'dd mmmm yyyy')}</Text>

                            </View>
                            <View>
                            </View>
                        </View>

                    </ScrollView>
                    <Modal animationType='slide' visible={modalVisible}
                    >
                        <View>
                            <Text style={styles.modalText}>Click on th button to go back    </Text>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}

                            ></Pressable>
                        </View>
                        <View style={styles.videoplayer}>
                            < Youtube movieId={detail.imdb_id}/>
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
            color: 'white',
            width: '100%',

        },
        image: {
            height: height / 1.5,
            width: '100%',


            // borderRadius: 20
        },
        text: {
            fontWeight: '300',
            color: 'white',
            padding: '5%',
            // backgroundColor: 'rgb(1,2, 4)'

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
            color: 'white',
            marginBottom: '4%'
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
        },
        videoplayer: {
            height: 500,
            justifyContent: 'center',
            flex: 1
        },
        button: {
            borderRadius: 20,
            padding: 10,
            elevation: 2
        },
        buttonOpen: {
            backgroundColor: "#F194FF",
        },
        buttonClose: {
            backgroundColor: "#2196F3",
        },
        modalText: {
            marginBottom: 15,
            textAlign: "center",
            color: 'black'
          },
          detailOverview:{
              color: 'white',
              lineHeight: 30,
              padding: 40
          },
        release_data: {
            color: 'white'
        }
    }
)
var styles2 = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});
export default Detail;