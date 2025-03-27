import React, { useState } from 'react';
import { View, TextInput, Button, Text, ScrollView } from 'react-native';

const API_KEY = 'API_Key'; // AIzaSyAbmXE7K5TaNTv0zT74WUXQoP8BJOFEezo
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

function Chatbot() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { role: 'user', content: input };
        const updatedMessages = [...messages, userMessage];
        setMessages(updatedMessages);

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: input }] }] // ✅ Corrected request format
                }),
            });

            const data = await response.json();
            console.log('API Response:', data); // Debugging

            if (data?.candidates && data.candidates.length > 0) {
                const botResponse = data.candidates[0]?.content?.parts?.[0]?.text || 'No response from AI';
                setMessages([...updatedMessages, { role: 'bot', content: botResponse }]);
            } else {
                setMessages([...updatedMessages, { role: 'bot', content: 'No response from AI' }]);
            }
        } catch (error) {
            console.error('Error:', error);
            setMessages([...updatedMessages, { role: 'bot', content: 'Error fetching response' }]);
        }

        setInput('');
    };

    return (
        <View style={{ flex: 1, padding: 10 }}>
            <ScrollView style={{ flex: 1 }} keyboardShouldPersistTaps="handled">
                {messages.map((msg, index) => (
                    <Text key={index} style={{ marginVertical: 5, color: msg.role === 'user' ? 'blue' : 'green' }}>
                        {msg.role === 'user' ? 'You: ' : 'AI: '}
                        {msg.content}
                    </Text>
                ))}
            </ScrollView>
            <TextInput
                value={input}
                onChangeText={setInput}
                placeholder="Type your message..."
                style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
            />
            <Button title="Send" onPress={sendMessage} />
        </View>
    );
}

export default Chatbot;
