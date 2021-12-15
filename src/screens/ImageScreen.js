import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import {AdMobBanner, AdMobInterstitial} from 'expo-ads-admob';

const ImageScreen = () => {
    return (
        <View style={styles.mainView}>
        <Text style={styles.stylei} >Corporations spend millions to show you this Advertising:</Text>
            <View style={styles.bannerTall}> 
                <AdMobBanner  style={AdMobBanner}
                bannerSize="smartBannerPortrait"
                adUnitID="ca-app-pub-3940256099942544/6300978111"
                testDevices={[AdMobBanner.simulatorId]}
                onDidFailToReceiveAdWithError={(errorCode) => console.log(errorCode)}
                servePersonalizedAds={false}/>
            </View>
            <Text style={styles.styleAngry} >Press - get a great offer. Don't press - corporations lose money.</Text>
        </View>
    )
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
stylei: {
    marginTop:24, 
    marginBottom:24, 
    borderRadius:8,
    marginLeft:'auto',
    marginRight:'auto',
    backgroundColor: '#B9E4B8',
    color: '#305C32',
    lineHeight: 25,
    fontSize: 24,
    padding: 24,
    fontFamily: "System",
    shadowColor: '#5EB43B',
    shadowOffset: { width: 0, height: 33},
    shadowOpacity: 0.99,
    elevation: 8,
    width: '90%',
},
styleAngry: {
    marginTop:24, 
    marginBottom:24, 
    borderRadius:8,
    marginLeft:'auto',
    marginRight:'auto',
    backgroundColor: '#E4B8C1',
    color: '#914C4C',
    lineHeight: 25,
    fontSize: 24,
    padding: 24,
    fontFamily: "System",
    shadowColor: '#861010',
    shadowOffset: { width: 0, height: 33},
    shadowOpacity: 0.99,
    elevation: 8,
    width: '90%',
},
bannerTall: {
    shadowColor: '#861010',
    shadowOffset: { width: 0, height: 33},
    shadowOpacity: 0.99,
    elevation: 44,
},
});

export default ImageScreen;