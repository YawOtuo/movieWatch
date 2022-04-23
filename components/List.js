import React from 'react';
import { Text, View, StyleSheet, Dimensions, FlatList } from 'react-native';
import Card from './Card';
import PropTypes from 'prop-types'


const propTypes = {
    title: PropTypes.string,
    content: PropTypes.array,

}


class List extends React.PureComponent {

    render() {
        const { navigation, title, content } = this.props
        return (
            <View style={styles.list}>
                <View>
                    <Text style={styles.text}>{title}</Text>
                </View>
                <View>
                    {/* <Text>{title}</Text> */}

                    <FlatList data={content} horizontal={true}
                    renderItem={
                        ({ item }) => <Card navigation={navigation} item={item}/>}
                        >
                     
                    </FlatList>
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        //   flex: 1,
        //   justifyContent: 'center',
        //   alignItems: 'center',
        //   backgroundColor: 'white',
        marginTop: '5%',
        marginLeft: '1%',
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',

        paddingBottom: 20,

    },
    list: {
        marginTop: 20,

    },
})

List.propTypes = propTypes

export default List;