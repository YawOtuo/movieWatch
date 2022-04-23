import React from 'react';
import {View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const propTypes = {
    errorText1: PropTypes.string,
    errorText2: PropTypes.string

}
const defaultProps= {
    errorText1: 'Oops something went wrong',
    errorText2: 'Make sure you re online and restart'
}

class Error extends React.PureComponent {

    render() {
        const {errorText1, errorText2} = this.props

        return (
            <View style={styles.container}>
                <Text style={styles.text}>{errorText1}</Text>
                <Text style={styles.text}>{errorText2}</Text>
                {/* <Text style={styles.text}>error</Text> */}


            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'white',
            color: 'black'
        
        
          },
          text:{
              fontWeight: 'bold',
              color: 'black'
          }
    }
)
Error.propTypes = propTypes;
Error.defaultProps = defaultProps
export default Error;