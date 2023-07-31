import {StyleSheet, StatusBar} from 'react-native'
export default StyleSheet.create({

  //Container
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerLeitura: {
    borderWidth: 5,
    borderColor: '#8F43EE', 
    borderRadius: 8,
    backgroundColor: 'white'
  },
  inputContainer: {
    width: '80%'
  },
  inputContainerAdicionar: {
    width: '80%'
  },
  leituraContainer:{
    width: '80%'
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  buttonContainerAdicionar: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
  buttonContainerLeitura: {
    width: '60%',
    alignItems: 'center',
    marginTop: 30,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  //logo
  logo: {
    width: 130,
    height: 100,
  },
  //inputs
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  //buttons
  button: {
    backgroundColor: '#8F43EE',
    width: '80%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonLogout: {
    backgroundColor: '#EB1D36',
    width: '45%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 250,
  },
  buttonLeitura: {
    backgroundColor: '#8F43EE',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonAdicionar: {
    backgroundColor: '#8F43EE',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonList:{
    backgroundColor: '#EDE4FF',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 5,
  },
  buttonOutline: {
    backgroundColor: 'white',
    borderColor: '#8F43EE',
    borderWidth: 2,
    width: '100%',
  },
  buttonOutlineLeitura: {
    backgroundColor: 'white',
    borderColor: '#8F43EE',
    borderWidth: 2,
    width: '50%',
  },

  //Texts
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  headerText: {
    color: '#2B2730',
    fontWeight: '400',
    fontSize: 40,
  },
  buttonListText:{
    color: '#2B2730',
      fontWeight: '700',
      fontSize: 16,
  },
  buttonBack: {
    backgroundColor: '#2B2730',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 5,
  },
  buttonOutlineText: {
    color: '#2B2730',
    fontWeight: '700',
    fontSize: 16,
  },

  //images
  image: {
    width: 350,
    height: 500,
    resizeMode: 'contain',
  },
})