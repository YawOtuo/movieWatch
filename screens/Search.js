import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { searchMovieTv } from '../services/services';
import Error from '../components/Error';
import Card from '../components/Card';


const Search = ({ navigation }) => {

    const [searchResults, setSearchResults] = useState()
    const [text, onChangeText] = React.useState("");
    const [error, setError] = React.useState(false);
    const onSubmit = query => {
        Promise.all([
            searchMovieTv(query, 'movie'),
            searchMovieTv(query, 'tv')
        ])

            .then(([movies, tv]) => {
                const data = [...movies, ...tv]
                setSearchResults(data);
                console.log(data)
            })

            .catch(() => {
                setError(true)
            })

    }




    return (
        <React.Fragment>
            <SafeAreaView>
                <View style={styles.container}>
                    <View style={styles.form}>
                        <TextInput
                            style={styles.input}
                            placeholder={'Search for movie or Tv show'}
                            onChangeText={onChangeText}
                            value={text}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={() => { onSubmit(text) }}>
                        <Icon name={'search-outline'} size={25} color={'black'}></Icon>
                    </TouchableOpacity>
                </View>


                <View style={styles.searchItems}>
                    {searchResults && searchResults.length > 0 && (
                        <FlatList style={styles.flatlist}
                            numColumns={3}
                            data={searchResults}
                            renderItem={({ item }) => (
                                <Card navigation={navigation} item={item} from_search={true}/>
                            )}
                            keyExtractor={item => item.id}
                        />

                    )
                    }

                    {searchResults && searchResults.length == 0 && (
                        <View style={[styles.empty, { paddingTop: 20 }]}>
                            <Text style={styles.text}>No results matching your criteria</Text>
                            <Text style={styles.text}>Try different keywords</Text>
                        </View>
                    )}

                    {!searchResults && (
                        <View>
                            <Text style={styles.text}>Type something to start searching</Text>
                        </View>
                    )}

                    {error && <Error />}
                </View>


            </SafeAreaView>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    input: {
        borderRadius: 15,
        borderWidth: 0.5,
        height: 50,
        padding: 8,
        color: 'black'

    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        paddingTop: 20,


    },
    form: {
        flexBasis: 'auto',
        flexGrow: 1,
        paddingRight: 8
    },
    searchItems: {
        padding: 5,
    },
    text: {
        color: 'black'
    },
    flatlist:{
        margin:1
    }
})

export default Search;