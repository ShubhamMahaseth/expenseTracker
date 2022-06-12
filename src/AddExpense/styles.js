import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {flex: 1, backgroundColor: 'white', paddingTop: 8},
  text: {
    color: 'black',

    fontSize: 20,
    marginLeft: 15,
    marginRight: 15,
    height: 60,
    marginTop: 16,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  buttonWrapper: {
    borderRadius: 10,
    marginLeft: 32,
    marginRight: 32,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#DFC8C8',
    backgroundColor: '#DFC8C8',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  button: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default styles;
