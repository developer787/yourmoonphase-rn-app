const React = require('react-native');
const { StyleSheet } = React;

module.exports = StyleSheet.create({
  signup_container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signup_logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  },
  signup_input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    color: 'black',
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 20,
    textAlign: 'center'
  },
  signup_button: {
    backgroundColor: '#157DF8',
    width: 100,
    height: 40,
    alignItems:'center',
    paddingTop: 10,
    marginBottom: 20,
  },
  signup_text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '900'
  },
  signup_button: {
    backgroundColor: '#fff',
    color: "#157DF8",
    width: 100,
    height: 20,
    fontSize: 10,
    textAlign: 'center',
    textAlignVertical: 'center'
  }
});