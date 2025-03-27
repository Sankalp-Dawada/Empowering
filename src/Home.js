import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import Chatbot from './Chatbot';

function Home() {
    return (
        <View style={styles.container}>
            
            <Chatbot />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
         flex: 1,
         padding: 10, 
    },
});

export default Home;
