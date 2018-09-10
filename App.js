/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Index from './src/components/index.js'
import {StackNavigator,TabNavigator,TabBarBottom} from 'react-navigation';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Index />
    );
  }
}
