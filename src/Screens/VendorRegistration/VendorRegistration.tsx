import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, ImageBackground, Image, TextInput } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import GoogleBtn from "../../Components/GoogleButton/GoogleButton";

interface CustomTextInputProps {
  icon: string;
  placeholder: string;
  placeholderTextColor?: string;
  keyboardType?: "default" | "numeric" | "email-address" | "phone-pad";
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  autoCorrect?: boolean;
  secureTextEntry?: boolean;
  value: string;
  onChangeText: (text: string) => void;
  onPressIcon?: () => void;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({ icon, ...rest }) => {
  return (
    <View style={styles.inputContainer}>
      <MaterialCommunityIcons name={icon} size={24} color="#aaa" style={styles.icon} />
      <TextInput {...rest} style={styles.input} />
    </View>
  );
};

const VendorRegistration: React.FC = () => {

    const [garageName, setGarageName] = useState<string>('');

    const [email, setEmail] = useState<string>('');

  const [password, setPassword] = useState<string>('');
    const [confirmationPass, setConfirmationPass] = useState<string>('');

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmationPass, setShowConfirmationPass] = useState<boolean>(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleShowConfirmationPassword = () => {
    setShowConfirmationPass(!showConfirmationPass);
  };

  return (
    <ImageBackground source={require('../../../assets/BackgroundImage.jpg')} style={styles.background}>
      <ScrollView style={styles.overlay}>
        <Image
          source={require('../../../assets/autocare logo.png')}
          style={{ width: 200, height: 100, marginLeft: 120, marginTop: 100 }}
        />
        <View style={styles.LoginContainer}>
          <Text style={styles.title}>Vendor Sign Up</Text>

          <Text style={styles.labels}>Garage Name : </Text>
          <CustomTextInput
            placeholder="Enter your garage name"
            placeholderTextColor="#D3D3D3"
            keyboardType="email-address"
            value = {garageName}
            autoCapitalize="none"
            autoCorrect={false}
            icon="garage-variant"
    
            onChangeText={setGarageName}
            
          />

          <Text style={styles.labels}>Email : </Text>
          <CustomTextInput
            placeholder="Enter your email"
            placeholderTextColor="#D3D3D3"
            keyboardType="email-address"
            value = {email}
            autoCapitalize="none"
            autoCorrect={false}
            icon="email-outline"
    
            onChangeText={setEmail}
            
          />
          <Text style={styles.labels}>Password: </Text>
          <CustomTextInput
            placeholder="Enter your password"
            placeholderTextColor="#D3D3D3"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            icon={showPassword ? 'eye-off-outline' : 'eye-outline'}
            onPressIcon={toggleShowPassword}
          />
          <Text style={styles.showPasswordText} onPress={toggleShowPassword}>Show Password</Text>

          <Text style={styles.labels}> Confirm Password: </Text>
          <CustomTextInput
            placeholder="Enter your password again"
            placeholderTextColor="#D3D3D3"
            secureTextEntry={!showConfirmationPass}
            value={confirmationPass}
            onChangeText={setConfirmationPass}
            icon={showConfirmationPass ? 'eye-off-outline' : 'eye-outline'}
            onPressIcon={toggleShowConfirmationPassword}
          />
          <Text style={styles.showPasswordText} onPress={toggleShowConfirmationPassword}>Show Password</Text>

          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.btnText}>Sign Up</Text>
          </TouchableOpacity>


          <Text style={styles.alternativeLogin}>_____________Or, Sign Up With_____________</Text>
          <View>
          <GoogleBtn/>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

export default VendorRegistration;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%'
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  LoginContainer: {
    flex: 1,
    marginTop: 80,
    paddingHorizontal: 'auto',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 25,
    color: '#ffff',
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 30,
    alignSelf: "stretch",
    marginVertical: 10,
    justifyContent: "space-between",
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    height: 40,
    borderRadius: 5,
    paddingLeft: 20,
    flex: 1,
    color: '#D3D3D3',
  },

  inputField: {
    borderWidth: 2,
  },

 
  loginBtn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#3DBDFF',
    
    borderRadius: 20,
    height: 40,
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 250,
  },
  googleLoginbtn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#fff',
    borderRadius: 20,
    height: 40,
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 250,
  },
  labels: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10,
    marginTop: 10,
  },
  btnText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff'
  },
  alternativeLogin: {
    fontSize: 15,
    textAlign: 'center',
    color: '#ffff',
    marginTop: 20,
  },
  icon: {
    marginLeft: 10,
  },
  showPasswordText: {
    color: '#fff',
    fontSize: 15,
    marginLeft: 20,
    marginTop: 10,
    fontStyle: 'italic',
  },
  signupBtn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#fff',
    color: '#000',
    borderRadius: 20,
    height: 40,
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 250,
    marginBottom: 30,
},

});