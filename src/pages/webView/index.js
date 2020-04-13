import React, {Component} from 'react';
import { View } from 'react-native';
import {WebView} from 'react-native-webview';
import { Container } from '../main/styles';
// import { Container } from './styles';

export default function webView({route}) {


  const url = route.params.item;
  console.tron.log(url.html_url);
  return (
      <WebView source={{ uri: url.html_url}} />
  );


}

