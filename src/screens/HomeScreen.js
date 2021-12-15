import React from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity, ImageBackground, StatusBar } from 'react-native';
import {AdMobBanner, AdMobInterstitial} from 'expo-ads-admob';

const image = { uri: "./assets/icon.png" };

const HomeScreen = ( {navigation} ) => {
    return (
      <View style={styles.container}>
        <View style={{flexDirection:'column',justifyContent:'flex-end'}} >  
        <View style={styles.body}>

            <Text style={styles.title}  >Just see the Advertising below and choose good offers for you.
                Millions of marketers are working hard to achieve you with limited discounts.
                Just use it. Enjoy :) 
            </Text>

            <StatusBar
              backgroundColor="#4BE189"
              barStyle="dark-content"
            />
              
            <AdMobBanner  style={AdMobBanner}
            bannerSize="largeBanner"
            layout_width="match_parent"
            adUnitID="ca-app-pub-3940256099942544/6300978111"
            testDevices={[AdMobBanner.simulatorId]}
            onDidFailToReceiveAdWithError={(errorCode) => console.log(errorCode)}
            servePersonalizedAds={false}/>

            <View style={styles.footer}>
                <TouchableOpacity
                  style={styles.touchableView} 

                      onPress={() => {
                      navigation.navigate("How about this one?",{json: {
                        creenNumber:1
                        }} )}}>

                        <View>
                            <Text style={styles.main_btn_style}>🛒💵✂️ More 🛒💵✂️</Text>
                        </View>
                </TouchableOpacity></View>
            </View> 

          </View>
      </View>
     )
};

const styles = StyleSheet.create({
touchableView: {
},

footer: {
    height:'10%',
    position: 'absolute',
    bottom: 0,
    paddingVertical: 1,
    alignItems: 'center',
    width: '99%',
    borderWidth: 0.02,
    borderColor: "#2FDB76",
    backgroundColor: "#4BE189",
    borderRadius:24,
    fontSize: 48,
    marginBottom:24, 
    elevation: 12,
},
body: {
    height:'100%',
    alignItems: 'center',
    width: '90%',
    borderWidth: 0.0001,
    marginTop: 24,
    marginLeft:'auto',
    marginRight:'auto',
},
main_btn_style: {
    paddingVertical: 24,
    marginBottom:'50%',
    fontSize: 24,
    lineHeight: 24,
    alignItems: 'center',
    color: 'white'
},
title: {
    marginTop:24,
    marginBottom:24, 
    borderRadius:8,
    marginLeft:'auto',
    marginRight:'auto',
    backgroundColor: '#D5D9E6',
    color: '#464555',
    lineHeight: 21,
    fontSize: 16,
    fontWeight: "600",
    padding: 24,
    fontFamily: "System",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 33},
    shadowOpacity: 0.57,
    elevation: 12,
    width: '100%',
  },
AdMobBanner: {
    height:'60%',
    marginBottom:'auto', 
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:'auto',
  }
});

export default HomeScreen;