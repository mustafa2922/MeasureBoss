import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import rncStyles from 'rncstyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MapScreen from '../component/maps';
import PickerSelect from '../component/picker';

export default function NewMeasure({navigation}: any) {
  const [selectedState, setSelectedState] = useState('');

  const [USstaes, setUsStates] = useState([
    {code: 'AL', name: 'Alabama'},
    {code: 'AK', name: 'Alaska'},
    {code: 'AZ', name: 'Arizona'},
    {code: 'AR', name: 'Arkansas'},
    {code: 'CA', name: 'California'},
    {code: 'CO', name: 'Colorado'},
    {code: 'CT', name: 'Connecticut'},
    {code: 'DE', name: 'Delaware'},
    {code: 'FL', name: 'Florida'},
    {code: 'GA', name: 'Georgia'},
    {code: 'HI', name: 'Hawaii'},
    {code: 'ID', name: 'Idaho'},
    {code: 'IL', name: 'Illinois'},
    {code: 'IN', name: 'Indiana'},
    {code: 'IA', name: 'Iowa'},
    {code: 'KS', name: 'Kansas'},
    {code: 'KY', name: 'Kentucky'},
    {code: 'LA', name: 'Louisiana'},
    {code: 'ME', name: 'Maine'},
    {code: 'MD', name: 'Maryland'},
    {code: 'MA', name: 'Massachusetts'},
    {code: 'MI', name: 'Michigan'},
    {code: 'MN', name: 'Minnesota'},
    {code: 'MS', name: 'Mississippi'},
    {code: 'MO', name: 'Missouri'},
    {code: 'MT', name: 'Montana'},
    {code: 'NE', name: 'Nebraska'},
    {code: 'NV', name: 'Nevada'},
    {code: 'NH', name: 'New Hampshire'},
    {code: 'NJ', name: 'New Jersey'},
    {code: 'NM', name: 'New Mexico'},
    {code: 'NY', name: 'New York'},
    {code: 'NC', name: 'North Carolina'},
    {code: 'ND', name: 'North Dakota'},
    {code: 'OH', name: 'Ohio'},
    {code: 'OK', name: 'Oklahoma'},
    {code: 'OR', name: 'Oregon'},
    {code: 'PA', name: 'Pennsylvania'},
    {code: 'RI', name: 'Rhode Island'},
    {code: 'SC', name: 'South Carolina'},
    {code: 'SD', name: 'South Dakota'},
    {code: 'TN', name: 'Tennessee'},
    {code: 'TX', name: 'Texas'},
    {code: 'UT', name: 'Utah'},
    {code: 'VT', name: 'Vermont'},
    {code: 'VA', name: 'Virginia'},
    {code: 'WA', name: 'Washington'},
    {code: 'WV', name: 'West Virginia'},
    {code: 'WI', name: 'Wisconsin'},
    {code: 'WY', name: 'Wyoming'},
  ]);

  return (
    <>
      <View
        style={[
          rncStyles.h100,
          {backgroundColor: 'white', paddingHorizontal: 20},
        ]}>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate(`profile`)}>
            <Icon name="login" size={40} color="#06bd37" />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 30,
              marginTop: 10,
              marginBottom: 20,
              color: 'black',
            }}>
            NEW MEASURE
          </Text>
        </View>
        <View style={{marginBottom: 10}}>
          <Text style={{marginBottom: 5, color: 'black'}}>
            Enter New Client Name
          </Text>
          <TextInput
            style={[styles.input, {width: '70%'}]}
            placeholder="Name"
            placeholderTextColor="grey"
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={[styles.input, {width: '50%', marginRight: 10}]}
            placeholder="Cell#"
            placeholderTextColor="grey"
          />
          <TextInput
            style={[styles.input, {width: '48%'}]}
            placeholder="Email"
            placeholderTextColor="grey"
          />
        </View>
        <View style={styles.hr} />
        <View style={{marginBottom: 10}}>
          <Text style={{marginBottom: 5, color: 'black'}}>Measure address</Text>
          <TextInput
            style={[styles.input, {width: '100%'}]}
            placeholder="Street Address"
            placeholderTextColor="grey"
          />
          <TextInput
            style={[styles.input, {width: '100%', marginTop: 10}]}
            placeholder="Street Address 2"
            placeholderTextColor="grey"
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={[
              styles.input,
              {width: '50%', marginRight: 10, marginBottom: 10},
            ]}
            placeholder="City"
            placeholderTextColor="grey"
          />
          <View style={[styles.select, {width: '48%'}]}>
            <PickerSelect
              selectedValue={selectedState}
              onValueChange={(itemValue: any, itemIndex: any) =>
                setSelectedState(itemValue)
              }
              style={{width: '100%'}}
              state={USstaes}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={[styles.input, {width: '50%', marginBottom: 20}]}
            placeholder="Postal Code"
          />
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <MapScreen />
        </View>
        <View style={{flexDirection: 'row-reverse', marginBottom: 10}}>
          <TouchableOpacity
            onPress={() => navigation.navigate(`MainScreen`)}
            style={[
              rncStyles.btn,
              rncStyles.rounded,
              rncStyles.w30,
              {backgroundColor: '#06bd37'},
            ]}>
            <Text
              style={[
                rncStyles.fs7,
                rncStyles.textWhite,
                rncStyles.textCenter,
              ]}>
              Done
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: 'black',
  },
  select: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
  hr: {
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    marginVertical: 20,
  },
});
