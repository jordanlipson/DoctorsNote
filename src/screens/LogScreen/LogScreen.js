import React, {useState} from 'react';
import { Text, TextInput, View, StyleSheet, Keyboard, KeyboardAvoidingView, TouchableOpacity, ScrollView, Modal } from 'react-native';
import Constants from 'expo-constants';
import Replace from '../../../components/Replace';



export default function App() {
  const [reminder, setReminder] = useState();
  const [reminderItems, setReminderItems] = useState([]);
  const [modalOpen, createReminder] = useState(false);

  const handleAddReminder = () => {
    Keyboard.dismiss();
    setReminderItems([...reminderItems, reminder])
    setReminder(null);
  }

  const toggleReminder = (index) => {

  }

  return (
    <View style={styles.container} backgroundcolor="#C4D0BF">
      <Modal visible={modalOpen} animationType='slide'>
        <View style={styles.modalView}>

          <View style={styles.reminderDetailWrapper} >
            <KeyboardAvoidingView behavior='height' > 
              <TextInput style={styles.input} placeholder={'Date'} value={reminder} onChangeText={text => setReminder(text)} />
            </KeyboardAvoidingView>
            <KeyboardAvoidingView behavior='height' >
              <TextInput style={styles.input} placeholder={'Title'} />
            </KeyboardAvoidingView>
            <KeyboardAvoidingView behavior='height' >
              <TextInput style={styles.input} placeholder={'Log information'} />
            </KeyboardAvoidingView>

            <TouchableOpacity onPress={() => handleAddReminder()} > 
              <View style={styles.createButton}>
                <Text style={styles.createText}>Create</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.cancelReminderWrapper}>
          <TouchableOpacity onPress={() => createReminder(false)} > 
            <View style={styles.cancelWrapper}>
              <Text style={styles.addText}>x</Text>
            </View>
          </TouchableOpacity>
        </View>

      </Modal>
      
      <View style={styles.writeReminderWrapper}>
        <TouchableOpacity onPress={() => createReminder(true)}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.remindersWrapper}>
        <Text style={styles.sectionTitle}>Daily Logs</Text>
        <View style={styles.items}>
          <ScrollView>
          {
            reminderItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => toggleReminder(index)}>
                  <Replace text={item} />
                </TouchableOpacity>
              )
            })
          }
          </ScrollView>
        </View>
      </View>

      {/*  Add a new reminder */}

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#C4D0BF',
    },
    remindersWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
    },
    sectionTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    alignSelf: "center",
    },
    items: {
        marginTop: 30,
    },
    writeReminderWrapper: {
    position: 'absolute',
    bottom: 120,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
    },
    input: {
    paddingVertical: 15,
    width: 250,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    },
    addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
    },
    cancelReminderWrapper: {
    position: 'absolute',
    bottom: 120,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
    },
    cancelWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
    },
    addText: {
    fontWeight: 'normal',
    fontSize: 45,
    },
    modalView: {
    flex: 1,
    backgroundColor: '#C4D0BF',
    marginBottom: -20,
    },
    reminderDetailWrapper: {
    paddingTop: 100,
    marginTop: 60,
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center'
    },
    createButton: {
    backgroundColor: '#2d803a',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    paddingHorizontal: '2%',
    borderRadius: 5,
    alignItems: "center",
    justifyContent: 'center'
    },
    createText: {
    color: 'white',
    fontSize: 16,
    fontWeight: "bold"
    }

});
