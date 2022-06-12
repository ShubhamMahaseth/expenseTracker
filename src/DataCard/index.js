import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {styles} from '../DataCard/styles';

const DataCard = props => {
  console.log(props);
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{props.title.product}</Text>
      <Text style={styles.text}>
        {'\u20B9'} {props.title.price}
      </Text>
    </View>
  );
};
export default DataCard;
