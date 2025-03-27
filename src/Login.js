import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Image, 
  
} from 'react-native';
import { Feather } from '@expo/vector-icons';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView 
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboardAvoidingView}
        >
          {/* Header */}
          <View style={styles.header}>
            <Image source={require('./assets/logo.jpg')} style={styles.fitimage} />
            <Text style={styles.headerTitle}>Login</Text>
            <View style={{ width: 24 }} />
          </View>
          
          <View style={styles.content}>
            {/* Welcome Text */}
            <View style={styles.welcomeContainer}>
              <Text style={styles.welcomeTitle}>Welcome</Text>
              <Text style={styles.welcomeSubtitle}>Sign in to continue using AccessibilityApp</Text>
            </View>
            
            {/* Login Form */}
            <View style={styles.formContainer}>
              <View style={styles.inputContainer}>
                <Feather name="mail" size={20} color="#888" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
              
              <View style={styles.inputContainer}>
                <Feather name="lock" size={20} color="#888" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  <Feather name={showPassword ? "eye" : "eye-off"} size={20} color="#888" />
                </TouchableOpacity>
              </View>
              
              <TouchableOpacity style={styles.forgotPasswordContainer}>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={styles.loginButton}
                onPress={() => navigation.navigate('Home')}
              >
                <Text style={styles.loginButtonText}>Login</Text>
              </TouchableOpacity>
            </View>
            
            {/* Social Login
            <View style={styles.socialLoginContainer}>
              <Text style={styles.orText}>Or login with</Text>
              
              <View style={styles.socialButtonsContainer}>
                <TouchableOpacity style={styles.socialButton}>
                  <Feather name="facebook" size={20} color="#4267B2" />
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.socialButton}>
                  <Feather name="twitter" size={20} color="#1DA1F2" />
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.socialButton}>
                  <Feather name="github" size={20} color="#333" />
                </TouchableOpacity>
              </View>
            </View> */}
            
            {/* Sign Up Link */}
            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>Don't have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.signupLink}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  fitimage: {
    width: 200,
    height: 200,
    borderRadius: 100,  
    },
  keyboardAvoidingView: {
    flex: 1,
  },
  header: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 20,
  },
  welcomeContainer: {
    marginBottom: 40,
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: '#666',
  },
  formContainer: {
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    height: 55,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#f2583e',
  },
  loginButton: {
    backgroundColor: '#ffb459',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  socialLoginContainer: {
    marginBottom: 30,
  },
  orText: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#888',
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signupText: {
    color: '#666',
  },
  signupLink: {
    color: '#f2583e',
    fontWeight: 'bold',
  },
});

export default Login;