import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions, FlatList, ScrollView , ActivityIndicator} from 'react-native';
import axios from 'axios'
import { getPopularMovies, getUpcomingMovies, getPopularTv, getFamilyMovies, getDocumentaries } from '../services/services';
import { SliderBox } from "react-native-image-slider-box";
import List from '../components/List';
import Error from '../components/Error';
const dimensions = Dimensions.get('screen');

const Home = ({navigation}) => {

  const [moviesImages, setMoviesImages] = useState()
  const [popularmovies, setPopularMovies] = useState()
  const [popularTv, setPopularTv] = useState()
  const [familymovies, setFamilyMovies] = useState()
  const [documentaries, setDocumentaries] = useState()




  const [movie, setMovie] = useState("");
  const [error, setError] = useState(false)
  const [loaded, setLoaded] = useState(false)


  const getData = () => {
    return Promise.all(
      [getUpcomingMovies(),
      getPopularTv(),
      getPopularMovies(),
      getDocumentaries(),
      getFamilyMovies()
      ]
    )
  }

  useEffect(() => {

    getData().then(([
      moviesImagesData,
      popularTvData,
      popularmoviesData,
      documentariesData,
      familymoviesData]) => {
      const moviesImagesArray = []
      moviesImagesData.forEach(movie => {
        moviesImagesArray.push('https://image.tmdb.org/t/p/w500' + movie.poster_path)

      })
      setMoviesImages(moviesImagesArray)

      setPopularTv(popularTvData)
      setPopularMovies(popularmoviesData)
      setFamilyMovies(familymoviesData)

      



    })
      .catch(err => setError(err))

      .finally(()=>{
        setLoaded(true)

      })

    // getPopularTv().then(movies => {
    //   console.log(movies, 'moviessssssss')
    // })
    //   .catch(err => {
    //     setError(err)
    //   })

    // getUpcomingMovies().then(movies => {

    //   // console.log(moviesImagesArray)
    // })
    //   .catch(err => {
    //     setError(err)
    //   })

  }, [])
    ;

  return (
    <React.Fragment >
      
      {loaded && !error && (<ScrollView>
        {moviesImages && (
          <View style={styles.sliderContainer}>
            <SliderBox images={moviesImages}
              sliderBoxHeight={dimensions.height / 1.5}
              dotStyle={{ height: 0 }}
              autoplay={true} circleLoop={true} />
          </View>
        )}

        {popularmovies && (
          <View style={styles.carousel}>
            <List title='Popular Movies' navigation={navigation}
              content={popularmovies}>

            </List>
          </View>
        )}
        
        {/* Popular Tv movies */}

        {popularTv && (
            <View style={styles.carousel}>
            <List title='Popular Tv Shows' navigation={navigation}
              content={popularTv}>
  
            </List>
  
          </View>
        )}
        {/* Family movies */}
        
        {familymovies && (
            <View style={styles.carousel}>
            <List title='Family Movies' navigation={navigation}
              content={familymovies}>
  
            </List>
          </View>
        )}

      
        

      </ScrollView>)}

      {!loaded && (<ActivityIndicator size={'large'}/>
)}  
      {error && <Error/>}
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  sliderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    color: 'white'


  },

  
  carousel: {
    marginTop: 15,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    color: 'black'

  }
})

export default Home;