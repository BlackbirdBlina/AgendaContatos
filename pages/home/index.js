import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableNativeFeedback, ActivityIndicator } from 'react-native';

const Home = ({ navigation }) => {

    const [listaContatos, setListaContatos] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetchContatos();
    }, []);

    const fetchContatos = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
            const contatos = await response.json()
            setListaContatos(contatos);
            setLoading(true);
        } catch (error) {
            setListaContatos([])
            alert('Falha ao tentar acessar o servidor. Tente novamente mais tarde.')
        } finally {
            setLoading(false)
        }
    };

    function Item(props) {
        return (
            <SafeAreaView style={styles.container}>
                <TouchableNativeFeedback
                    onPress={() => navigation.navigate('DetalheContato', props.jsonInfo.id)}
                    background={TouchableNativeFeedback.Ripple('#E2DAEB')}
                >
                    <View style={styles.listaContainer}>
                        <View style={styles.listaItem}>
                            <Text style={styles.textTitle}>Name: </Text>
                            <Text style={styles.textItem}>{props.jsonInfo.name}</Text>
                        </View>
                        <View style={styles.listaItem}>
                            <Text style={styles.textTitle}>Phone: </Text>
                            <Text style={styles.textItem}>{props.jsonInfo.phone}</Text>
                        </View>
                    </View>
                </TouchableNativeFeedback>
            </SafeAreaView>

        )
    }

    return (
        <View style={styles.container}>
            {isLoading
                ? <ActivityIndicator />
                : <FlatList
                    data={listaContatos}
                    renderItem={it => <Item jsonInfo={it.item} />}
                    keyExtractor={item => item.id}
                />
            }
        </View>
    );
}



const styles = StyleSheet.create({

    container: {
        marginTop: 2,
        backgroundColor: '#E2DAEB',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    listaContainer:{
        width: 390,
        margin: 10,
        backgroundColor: "#d8bfd8",
        borderColor: "#8D6799",
        borderWidth: 1,
        height: 50,
        justifyContent: 'center',

    },
    listaItem: {
        flexDirection: 'row',
    },
    textTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: 5
    },
    textItem: {
        fontStyle: 'italic',
        fontSize: 15,
    }

})

export { Home }
