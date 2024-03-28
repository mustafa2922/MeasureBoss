import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import rncStyles from 'rncstyles';

const SaveMeasure = ({navigation}: any) => {
  const [users, setUsers] = useState([
    {lastname: 'Corner Kitchen', date: '20/March/2024', streetAddress: 'UK'},
    {lastname: 'Kitchen', date: '10/March/2024', streetAddress: 'UK'},
    {lastname: 'Corner', date: '22/March/2024', streetAddress: 'UK'},
    {lastname: 'Joe Kitchen', date: '12/March/2024', streetAddress: 'UK'},
  ]);
  const [filterData, setFilterdata] = useState([]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
      onPress={() => 
        navigation.navigate('profile')}>
        <Text style={{ fontSize: 20, marginBottom: 5, color: '#06bd37' , fontWeight:'600'}}>Back</Text>
      </TouchableOpacity>
        <Text style={{ fontSize: 30, marginTop: 10, marginBottom: 10, color: 'black' , fontWeight:'600'}}>Save Measures</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          onChangeText={e => {
            let arr = users.filter((x: any) => {
              if (x.lastname.toLowerCase().includes(e.toLowerCase())) {
                return x;
              } else if (x.streetAddress.toLowerCase().includes(e.toLowerCase())) {
                return x;
              }
            });
            setFilterdata([...arr]);
          }}
        />
      </View>
      {filterData.length > 0 ? (
        <ScrollView>
          {filterData.map((x: any, id: any) => (
            <TouchableOpacity
              key={id}
            //   onPress={() => {
            //     navigation.navigate('CustomerProfile', x);}}
              >
              <View style={[styles.card, rncStyles.flexRow]} key={id}>
                <View>
                  <Text style={styles.cardTitle}>{x.lastname}</Text>
                  <Text numberOfLines={2} style={styles.cardDescription}>
                    {x.streetAddress}
                  </Text>
                </View>
                <Text>{x.date}</Text>
              </View> 
            </TouchableOpacity>
          ))}
        </ScrollView>
      ) : (
        <ScrollView>
          {users.map((x: any, id: any) => (
            <TouchableOpacity
              key={id}
            //   onPress={() => {
            //     navigation.navigate('CustomerProfile', x);}}
                >
              <View style={[styles.card, rncStyles.flexRow]} key={id}>
                <View>
                  <Text style={styles.cardTitle}>{x.lastname}</Text>
                  <Text numberOfLines={2} style={styles.cardDescription}>
                    {x.streetAddress}
                  </Text>
                </View>
                <Text>{x.date}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    color: '#06bd37',
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchBarContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 16,
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 8,
  },
  card: {
    borderBottomColor: '#06bd37',
    borderBottomWidth: 1,
    padding: 12,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 2,
    color: '#06bd37',
  },
  cardDescription: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  containerbtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  usercreatetbtn: {
    backgroundColor: '#06bd37',
    padding: 10,
    color: 'white',
    borderRadius: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginRight: 5,
    color: '#333',
  },
  sendButton: {
    backgroundColor: '#06bd37',
    borderRadius: 8,
    paddingVertical: 3,
    paddingHorizontal: 3,
    margin: 1,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SaveMeasure;
