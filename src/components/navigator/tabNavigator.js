import React, { Component } from 'react'
import { View, Text, SafeAreaView, Button, StyleSheet } from 'react-native'
import {StackNavigator, TabBarBottom, TabNavigator} from "react-navigation";
import HomeScreen from '../homeScreen.js'
import DetailScreen from '../detailScreen.js'
import TabBarItem from './tabBarItem.js'

const tabNavigator = TabNavigator(
    {
        Home:{
            screen: HomeScreen,
            navigationOptions:({navigation}) => ({
                title: '首页',
                headerRight: (
                    <Text style={{fontSize:14, marginRight:9}} onPress={() => alert('order')}>订单</Text>
                ),
                tabBarLabel: '首页',
                tabBarIcon: ({ focused,tintColor }) => (
                    <TabBarItem
                     tintColor={tintColor}
                     focused={focused}
                     normalImage={require('../../../assets/128-icon.png')}  
                     selectedImage={require('../../../assets/128-icon.png')}
                    />
                )
            })
        },
        Detail:{
            screen: DetailScreen,
            navigationOptions:({navigation}) => ({
                title: 'detail',
                tabBarLabel: '我的',
                tabBarIcon: ({ focused,tintColor }) => (
                    <TabBarItem
                     tintColor={tintColor}
                     focused={focused}
                     normalImage={require('../../../assets/128-icon.png')}  
                     selectedImage={require('../../../assets/128-icon.png')}
                    />
                )
            })
        },
    },
    {
        tabBarComponent:TabBarBottom,  
        tabBarPosition:'bottom',  
        swipeEnabled:false,  
        animationEnabled:false,  
        lazy:true,  
        tabBarOptions:{  
            activeTintColor:'#06c1ae',  
            inactiveTintColor:'#979797',  
            style:{backgroundColor:'#ffffff',},  
            labelStyle: {  
                fontSize: 14, // 文字大小  
            },  
        }  
    }
)

export default tabNavigator