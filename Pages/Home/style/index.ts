import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    backgroundColor: '#e9eaed',
    height: '100%',
    width: '100%',
    paddingTop: 50,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
  },
  inputTask: {
    backgroundColor: 'white',
    height: 42,
    borderRadius: 25,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'center',
    flexGrow: 1,
    marginRight: 20,
  },
  shadowInput: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  btnAdd: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'white',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
