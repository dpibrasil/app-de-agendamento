import React from 'react';
import { View, Text, TouchableOpacity,} from 'react-native';

export default function FirstTime( {navigation} ) {
    return (
    <View className="mt-32">
        <Text className="font-bold text-3xl mb-26 flex text-center mt-96"> Bem Vindo! </Text>
        <Text className="font-bold mb-26 flex text-center mt-3">{`Lorem ipsum dolor sit amet, consectetuer \n adipiscing elit, sed diam nonummy tincidunt\n ut laoreet dolore magna aliquam erat volupat.`}</Text>

        <View className="flex flex-row items-center justify-between m-6 mt-24">

        <TouchableOpacity 
        title="SignUp" 
        onPress={() => navigation.navigate('SignUp')}
        className="w-40 h-10 bg-blue-700 flex items-center justify-center rounded">

            <Text className="text-white font-bold">Sign Up</Text>

        </TouchableOpacity>

        <TouchableOpacity 
        title="SignIn" 
        onPress={() => navigation.navigate('SignIn')}
        className="w-40 h-10 bg-white flex items-center justify-center rounded border-2 border-blue-500">

            <Text className="text-blue-700 font-bold">Sign In</Text>
            
        </TouchableOpacity>

        </View>
    </View>
    );
}