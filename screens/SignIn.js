import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign'

export default function SignIn() {
    return (
        <View >
        <Text className="font-bold text-4xl mb-26 flex px-8 mt-20"> Sign In </Text>

        <Text className="float-left flex ml-9 mt-20 font-bold">Email</Text>
          <View className="flex items-center">
            <TextInput className="w-80 h-12 bg-indigo-100 rounded px-4 focus:border-2 focus:border-indigo-300" placeholder="erys@gmail.com"></TextInput>
          </View>

          <Text className="float-left flex ml-9 mt-10 font-bold">PassWord</Text>
          <View className="flex items-center">
            <TextInput className="w-80 h-12 bg-indigo-100 rounded px-4 focus:border-2 focus:border-indigo-300" placeholder="••••••••••••"></TextInput>
          </View>
           
          <View className="flex items-center mt-10">
          <TouchableOpacity 
            title="SignUp" 
            onPress={() => navigation.navigate('SignUp')}
            className="w-80 h-12 bg-blue-700 flex items-center justify-center rounded">

            <Text className="text-white font-bold">Sign In</Text>

        </TouchableOpacity>

        <Text className="mt-5 mb-5 font-semibold">or</Text>

          <TouchableOpacity 
              title="SignUp" 
              onPress={() => navigation.navigate('SignUp')}
              className="w-80 h-12 bg-white flex flex-row items-center justify-center rounded border-2 border-blue-700">
            <Icon name="google" size={20} color="#000"/>
            <Text className="text-blue-700 font-bold"> Sign In with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity 
              title="SignUp" 
              onPress={() => navigation.navigate('SignUp')}
              className="w-80 h-12 bg-black flex flex-row items-center justify-center rounded mt-5">
              <Icon name="apple-o" size={20} color="#FFFFFF"/>
              <Text className="text-white font-bold ml-1">Sign In with Apple</Text>
          </TouchableOpacity>

          </View>

        </View>
        );
}