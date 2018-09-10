import React, { Component } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import {StackNavigator, TabBarTop, TabNavigator} from "react-navigation";
import HomeScreen from './homeScreen.js'

const DetailScreen = () => (
    <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Detail Screen</Text>
        </View>
    </SafeAreaView>
);

export default DetailScreen;
