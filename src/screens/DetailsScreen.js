import React, {useEffect} from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import {AdMobBanner, AdMobInterstitial} from 'expo-ads-admob';

const HomeScreen = ( {navigation} ) => {
    return (
    <View>
          <View style={styles.tip}>
            <Text style={styles.text}>Just see the ads below and choose good offers for you.
            Millions of marketers are working hard to achieve you with limited discounts.
            Just use it. Enjoy :)  </Text>
          </View>

          <View>
              <AdMobBanner  style={AdMobBanner}
              bannerSize="smartBannerLandscape"
              adUnitID="ca-app-pub-3940256099942544/6300978111"
              testDevices={[AdMobBanner.simulatorId]}
              onDidFailToReceiveAdWithError={(errorCode) => console.log(errorCode)}
              servePersonalizedAds={false}/>
          </View>

          <View style={styles.btn_block}>
            <Button
              title="Update"
              onPress={() => {
                navigation.navigate("Crossroads",{json: {
                }} )}}/>
          <View style={styles.padding}>
          </View>

          <Button
            title="Try this one"
            onPress={() => {
              navigation.navigate("BigImageView",{json: {
              }} )}}/>
          </View>
  </View>
  )
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
    btn_block: {
    paddingVertical: 12,
    alignItems: 'center',
    width: '99%',
},
    padding: {
    bottom: 0,
    paddingVertical: 1,
    alignItems: 'center',
    width: '99%',
},
  tip: {
    marginTop:24, 
    marginBottom:24, 
    borderRadius:8,
    marginLeft:'auto',
    marginRight:'auto',
    backgroundColor: '#E3C5EA',
    padding: 24,
    shadowColor: '#8D6097',
    shadowOffset: { width: 0, height: 33},
    shadowOpacity: 1,
    elevation: 4,
    width: '90%',
},
  text: {
    fontSize: 18,
    lineHeight: 25,
    fontFamily: "System",
    color: "#5A3A61",
    textShadowColor: '#CBA9EA',
    textShadowOffset: {width: -4, height: 12},
    textShadowRadius: 22
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
});

export default HomeScreen;