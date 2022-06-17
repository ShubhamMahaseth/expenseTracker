import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import styles from './styles';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from '../HomeScreen';

const AddExpense = ({navigation}) => {
  const [number, onChangeNumber] = useState('');
  const [text, onChangeText] = useState('');

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const [numberData, serNumberData] = useState([]);

  const selectedDate = moment(date).format('DD-MM-YYYY');

  const storeData = async () => {
    try {
      await AsyncStorage.setItem('sample', number);
      await AsyncStorage.setItem('@storage_Key', text);
      await AsyncStorage.setItem(
        '@storage_Date',
        JSON.stringify(moment(date).format('DD-MM-YYYY')),
      );

      await getItemList();
    } catch (e) {
      // saving error
    }
  };

  const getItemList = async () => {
    try {
      const res1 = await AsyncStorage.getItem('sample');
      const res = await AsyncStorage.getItem('@storage_Key');
      const res2 = await AsyncStorage.getItem('@storage_Date');

      serNumberData(res1);
      serNumberData(res);
      serNumberData(res2);

      console.log(numberData);
    } catch (err) {
      // console.log(err);
    }
  };

  console.log(numberData);

  return (
    <>
      <SafeAreaView style={styles.wrapper}>
        <TextInput
          style={styles.text}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Enter Amount"
          keyboardType="numeric"
          placeholderTextColor={'gray'}
          // autoFocus={true}
        />

        <TextInput
          style={styles.text}
          onChangeText={onChangeText}
          value={text}
          placeholder="Expense made for?"
          keyboardType="name-phone-pad"
          placeholderTextColor={'gray'}
        />

        <View>
          <DatePicker
            modal={true}
            open={open}
            mode={'date'}
            date={date}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
            androidVariant={'nativeAndroid'}
            title={null}
            maximumDate={new Date()}
          />
          <TouchableOpacity
            onPress={() => setOpen(true)}
            style={styles.text}
            activeOpacity={0.5}>
            <Text style={{color: 'black', fontSize: 20}}>{selectedDate}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={() => {
            storeData();
          }}>
          <Text style={styles.button}>Submit</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default AddExpense;
