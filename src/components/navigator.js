import React, { Component } from 'react'
import { View, Text, SafeAreaView, Button, StyleSheet } from 'react-native'
import {StackNavigator, TabBarTop, TabNavigator} from "react-navigation";
import tabNavigator from './navigator/tabNavigator.js'
import HomeScreen from './homeScreen.js'
import DetailScreen from './detailScreen.js'

const RootNavigator = StackNavigator({
  tabNavigator: {screen:tabNavigator},
  
});

const styles = StyleSheet.create({
    order:{
        fontSize:10
    }
})

export default RootNavigator;
