import React from 'react';
import { Text, SafeAreaView, TouchableOpacity, View, Image, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
// impoprt {Text} from 'react-native'
import PropTypes from 'prop-types'

const propTypes = {
    main: PropTypes.bool,
}

const defaultProps = {
    main: false,
}

class Navbar_ extends React.Component {

    componentDidMount = () => {

    }

    render() {
        const { navigation, main } = this.props

        return (
            <SafeAreaView>
                {main ? <View style={styles.mainNav}>
                    <Image source={require('../assets/images/mw1.png')}
                        style={styles.logo} />
                    <TouchableOpacity onPress={() => { navigation.navigate('Search') }}>
                        <Icon name={'search-outline'} size={25} color={'white'}></Icon>
                    </TouchableOpacity>
                </View> :
                    <View>
                        <TouchableOpacity style={styles.backbutton} onPress={() => { navigation.goBack() }}>
                            <Icon name={'chevron-back'} size={30} color={'white'}></Icon>
                        </TouchableOpacity>
                    </View>}
            </SafeAreaView>
        )
    }
}

Navbar_.propTypes = propTypes
Navbar_.defaultProps = defaultProps

const styles = StyleSheet.create({
    logo: {
        width: 40,
        height: 40,
        backgroundColor: 'black'
    },
    mainNav: {
        // flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        backgroundColor: 'rgb(2,2,19)',
        // position: 'absolute',
        // top: 200,
        // left: 100,
        // zIndex:100,

        
        // backgroundColor: 'transparent'
    },
    backbutton:{
        backgroundColor: 'black'
    }
})

export default Navbar_