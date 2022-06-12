import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {color} from 'react-native-reanimated';
import styles from './styles';
import moment from 'moment';

const AddExpense = ({navigation}) => {
  const [number, onChangeNumber] = useState(null);
  const [text, onChangeText] = useState();

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const selectedDate = moment(date).format('DD-MM-YYYY');

  return (
    <SafeAreaView style={styles.wrapper}>
      <TextInput
        style={styles.text}
        onChangeNumber={onChangeNumber}
        value={number}
        placeholder="Enter Amount"
        keyboardType="numeric"
        placeholderTextColor={'gray'}
        autoFocus={true}
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

      <TouchableOpacity style={styles.buttonWrapper}>
        <Text style={styles.button}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AddExpense;
