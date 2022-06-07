import React from 'react';
import {TouchableOpacity, StyleSheet, Image, Text} from 'react-native'
import PropTypes from 'prop-types'


import { useRoute } from '@react-navigation/native';
const placeholderImage = require('../assets/images/placeholder.png')


const propTypes = {
    item: PropTypes.object,
}

class Card extends React.PureComponent {
    render() {
        const {navigation, item} = this.props
        // console.log(item)
        return (
            <TouchableOpacity style={!this.props.from_search ? styles.container : styles_search.container} 
            onPress={()=> navigation.navigate('Detail',{
                movieId: item.id
            })}>

            <Image style={styles.image}
                resizeMode='cover'
                source={
                    item.poster_path ? 
                    {uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path}
                :     placeholderImage
                }/>


            {!item.poster_path && <Text style={styles.movieName}>{item.name}</Text>}
            </TouchableOpacity>
            
        );
    }
}

const styles_search = StyleSheet.create({
    container: {
        padding: 5,
        position: 'relative',
        color: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
      //   paddingBottom: 50,
        marginBottom: 150,
        backgroundColor: 'white'
      },
      image:{
          height: 300,
          width: 120,
          borderRadius: 5
      },
      movieName:{
          position: "absolute",
          width: 120,
          textAlign: 'center',
  
      }
     
     
})
const styles = StyleSheet.create({
    container: {
      padding: 5,
      position: 'relative',
      color: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      height: 200,
    //   paddingBottom: 50,
      marginBottom: 20,
      backgroundColor: 'white'
    },
    image:{
        height: 300,
        width: 120,
        borderRadius: 15
    },
    movieName:{
        position: "absolute",
        width: 120,
        textAlign: 'center',

    }
   
   
  })

Card.propTypes = propTypes
export default Card;