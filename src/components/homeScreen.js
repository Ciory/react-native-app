import React, { Component } from 'react'
import { View, Text, SafeAreaView, Button, ScrollView, Dimensions, PixelRatio, Image, ListView } from 'react-native'
import {StackNavigator, TabBarTop, TabNavigator} from "react-navigation";
import 'whatwg-fetch'

class HomeScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            pageCanUse: false,
            homePageData: {}
        }
    }

    getHomeData(){
        var that = this
        fetch(`https://sslapi.jrj.com.cn/itougu/mapi/wireless/smartStock/homePage/homePageV611`, {
            method: 'GET',
            headers:{
                appver: '7.5.0'
            }
        }).then((res) => {
            return res.json()
        }).then((data) => {
            that.setState({
                homePageData: data.data,
                pageCanUse: true
            })
        }).catch((error) => {
            alert(error)
        })
    }

    renderRow(rowData){
        return (
            <View style={{justifyContent:'center', alignItems: 'center', width: Dimensions.get('window').width/4, height: 80}}>
                <Image style={{width:24, height:24}} source={{uri: rowData.image}} />
                <Text style={{marginTop:6}}>{rowData.name}</Text>
            </View>
        )
    }

    componentWillMount(){
        
    }

    render(){
        if(this.state.pageCanUse){
            var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            let indexVODataSource = ds.cloneWithRows(this.state.homePageData.indexVO)

            return (
                <SafeAreaView style={{flex: 1}}>
                    <ScrollView>
                        <ListView dataSource={indexVODataSource} renderRow={this.renderRow} contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap', backgroundColor: 'white'}}></ListView>
                        <View style={{marginTop: 10}}>
                            <Image source={{uri: this.state.homePageData.banners[0].src}} style={{width: this.state.width, height: 90}} resizeMode="contain"  />
                        </View>
                        <View style={{width: this.state.width, height: 390, backgroundColor: 'white', marginTop: 10}}>
                            <View style={{flex: 1, alignItems: 'center', height: 50, flexDirection: 'row'}}>
                                <Text style={{color: '#333333', fontSize: 16, fontWeight: 'bold', marginLeft: 10}}>Z点操盘</Text>
                                <Text style={{color: '#e6e6e6', marginLeft: 10, marginRight: 10}}>|</Text>
                                <Text style={{color: '#aaaaaa', fontSize: 13}}>买卖信号提醒</Text>
                            </View>
                            <View style={{width: this.state.width, height: 340, backgroundColor: 'white'}}>
                                <View style={{width: this.state.width, height:110}}>
                                    <Image></Image>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            )
        }else{
            return (
                <SafeAreaView style={{flex: 1}}>
                    <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
                        <Text>Loading...</Text>
                    </View>
                </SafeAreaView>
            )
        }
    }

    componentDidMount(){
        this.getHomeData()
    }
}

export default HomeScreen;
