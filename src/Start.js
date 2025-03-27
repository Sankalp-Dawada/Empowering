import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

function Start({ navigation }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Login'); // Navigate to Login.js
        }, 5000 //5 secs
        );

        return () => clearTimeout(timer); // Cleanup the timeout if component unmounts
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image source={require('./assets/start.png')} style={styles.fitimage} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    fitimage: {
        width: 300,
        height: 200,
    }
});

export default Start;
