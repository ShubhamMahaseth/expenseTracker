import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../DataCard/styles';

const DataCard = props => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{props.title.product}</Text>
      <Button
        title={'EDIT'}
        onPress={() => {
          console.log('Edit');
        }}></Button>
      <Button title={'DELETE'} onPress={() => console.log('Delete')}></Button>
      <Text style={styles.text}>
        {'\u20B9'} {props.title.price}
      </Text>
    </View>
  );
};
export default DataCard;
