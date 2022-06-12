import React from 'react';
import {View, Text, ScrollView, FlatList, SectionList} from 'react-native';
import styles from './styles';
import DataCard from '../DataCard';
import {FloatingAction} from 'react-native-floating-action';

const HomeScreen = ({navigation}) => {
  const DATA = [
    {
      title: '24-12-01',
      data: [
        {id: 1, date: '24-12-01', product: 'bisc', price: 200},
        {id: 22, date: '24-12-01', product: 'bisc', price: 200},
        {id: 23, date: '24-12-01', product: 'bisc', price: 200},
        {id: 24, date: '24-12-01', product: 'bisc', price: 200},
      ],
    },
    {
      title: '24-12-01',
      data: [
        {id: 2, date: '24/12/01', product: 'egg', price: 20000},
        {id: 32, date: '24/12/01', product: 'egg', price: 200},
        {id: 34, date: '24/12/01', product: 'egg', price: 200},
      ],
    },
    {
      title: '24-12-01',
      data: [{id: 3, date: '24/12/01', product: 'milk', price: 200}],
    },
    {
      title: '24-12-01',
      data: [
        {id: 4, date: '24/12/01', product: 'oil', price: 200},
        {id: 114, date: '24/12/01', product: 'kill', price: 200},
      ],
    },
  ];

  return (
    <View style={{backgroundColor: 'white', flex: 1, paddingBottom: 6}}>
      <Text style={styles.text}>November</Text>

      <View style={styles.wrapper}>
        <View style={styles.amountWrapper}>
          <Text style={styles.textWrapper}>Income</Text>
          <Text style={styles.amountWrapper}>{'\u20B9'} 2000</Text>
        </View>

        <View style={styles.amountWrapper}>
          <Text style={styles.textWrapper}>Expense</Text>
          <Text style={styles.amountWrapper}>{'\u20B9'} 500</Text>
        </View>
        <View style={styles.amountWrapper}>
          <Text style={styles.textWrapper}>Balance</Text>
          <Text style={styles.amountWrapper}>{'\u20B9'} 48</Text>
        </View>
      </View>

      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <DataCard title={item} />}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.dateText}>{title}</Text>
        )}
      />

      <FloatingAction
        onPressMain={() => navigation.navigate('AddExpense')}
        showBackground={false}
        floatingIcon={require('../assets/plus-icon.png')}
        iconHeight={50}
        iconWidth={50}
        buttonSize={50}
        // color={'#007500'}
      />
    </View>
  );
};

export default HomeScreen;
