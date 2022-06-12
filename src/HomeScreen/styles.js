import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: 'black',
    marginTop: 20,
    marginLeft: 15,
    fontSize: 30,
    fontWeight: 'bold',
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 4,
    marginRight: 4,
  },
  textWrapper: {
    color: 'black',
    marginTop: 20,
    fontSize: 25,
  },
  amountWrapper: {
    color: 'black',
    marginLeft: 10,
    marginRight: 10,
    fontSize: 20,
    alignItems: 'center',
  },
  dateText: {
    color: 'black',
    marginLeft: 17,
    marginTop: 15,
    marginBottom: 6,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
