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
  // onPress={() => handleAddReminder()}

  const toggleReminder = (index) => {
    {/*  Click to view reminder */}


    // let itemsCopy = [...reminderItems];
    // itemsCopy.splice(index, 1);
    // setReminderItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      <Modal visible={modalOpen} animationType='slide'>
        <View style={styles.modalView}>
          {/*  Create reminder */}
          <View style={styles.reminderDetailWrapper} >
            <KeyboardAvoidingView behavior='height' > 
              <TextInput style={styles.input} placeholder={'Medicine/Vitamin Name'} value={reminder} onChangeText={text => setReminder(text)} />
            </KeyboardAvoidingView>
            <KeyboardAvoidingView behavior='height' >
              <TextInput style={styles.input} placeholder={'Dosage'} />
            </KeyboardAvoidingView>
            <KeyboardAvoidingView behavior='height' >
              <TextInput style={styles.input} placeholder={'Frequency'} />
            </KeyboardAvoidingView>
            {/*  Create button */}
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

      {/*  All reminders */}
      <View style={styles.remindersWrapper}>
        <Text style={styles.sectionTitle}>Reminders</Text>
        <View style={styles.items}>
          {/*  Reminder items will be displayed here: */}
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
    bottom: 5,
    width: '100%',
    alignItems: 'center',
  },
  createText: {
    paddingTop: 30,
    fontSize: 30,
  }

});
