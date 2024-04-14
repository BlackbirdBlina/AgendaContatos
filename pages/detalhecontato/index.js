import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableNativeFeedback } from 'react-native';


export default function DetalheContato({ route }) {
    const userId = route.params;
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetchDetalheContato();
    }, []);

    const fetchDetalheContato = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
            const user = await response.json()
            setUser(user);
        } catch (error) {
            setUser(null)
            alert('Falha ao tentar acessar o servidor. Tente novamente mais tarde.')
        }
    };

    if (!user) {
        return (
            <View style={styles.container}>
                <Text style={styles.loadingText}>Carregando...</Text>
            </View>
        );
    }


    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Detalhes do usuário(a) {user.name}</Text>
            <Text style={styles.ifoContato}>username: {user.username}</Text>
            <Text style={styles.ifoContato}>Email: {user.email}</Text>
            <Text style={styles.ifoContato}>Contato: {user.phone}</Text>
            <Text style={styles.ifoContato}>Website: {user.website}</Text>
            <Text style={styles.ifoContato}>Endereço: {user.address.street}, {user.address.suite}, {user.address.city}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 24,
        backgroundColor: '#E2DAEB'
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    ifoContato: {
        fontStyle: 'italic',
        fontSize: 15,
    },
});
