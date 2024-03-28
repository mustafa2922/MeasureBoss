import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Pressable,
  PermissionsAndroid,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import rncStyles from 'rncstyles';
import PickerSelect from '../component/picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const MeasureStep5e = () => {
  const [selectedState, setSelectedState] = useState('');

  // Washer
  const [washerType, setWasherType] = useState([
    {label: 'Select', value: ''},
    {label: 'Side by Side', value: 'sideBySide'},
    {label: 'Stackable', value: 'stackable'},
    {label: 'Other', value: 'other'},
  ]);

  const [washerLoad, setWasherLoad] = useState([
    {label: 'Select', value: ''},
    {label: 'Top', value: 'top'},
    {label: 'Side', value: 'side'},
    {label: 'Other', value: 'other'},
  ]);

  const [washerSize, setWasherSize] = useState({
    width: [
      {label: 'Select', value: ''},
      {label: '27”', value: '27'},
      {label: 'Other', value: 'other'},
    ],
    height: [
      {label: 'Select', value: ''},
      {label: '39”', value: '39'},
      {label: '42-44”', value: '42-44'},
      {label: 'Other', value: 'other'},
    ],
    depth: [
      {label: 'Select', value: ''},
      {label: '32-34” deep', value: '32-34'},
      {label: 'Other', value: 'other'},
    ],
  });

  const [washerBrand, setWasherBrand] = useState([
    {label: 'Select', value: ''},
    {label: 'Bosch', value: 'bosch'},
    {label: 'Frigidaire', value: 'frigidaire'},
    // Add other brand options here
    {label: 'Other', value: 'other'},
  ]);

  // Dryer
  const [dryerType, setDryerType] = useState([
    {label: 'Select', value: ''},
    {label: 'Side by Side', value: 'sideBySide'},
    {label: 'Stackable', value: 'stackable'},
    {label: 'Other', value: 'other'},
  ]);

  const [dryerSource, setDryerSource] = useState([
    {label: 'Select', value: ''},
    {label: 'Electric', value: 'electric'},
    {label: 'Gas', value: 'gas'},
    {label: 'Propane', value: 'propane'},
    {label: 'Other', value: 'other'},
  ]);

  const [dryerSize, setDryerSize] = useState({
    width: [
      {label: 'Select', value: ''},
      {label: '27”', value: '27'},
      {label: 'Other', value: 'other'},
    ],
    height: [
      {label: 'Select', value: ''},
      {label: '39”', value: '39'},
      {label: '42-44”', value: '42-44'},
      {label: 'Other', value: 'other'},
    ],
    depth: [
      {label: 'Select', value: ''},
      {label: '32-34” deep', value: '32-34'},
      {label: 'Other', value: 'other'},
    ],
  });

  const [dryerBrand, setDryerBrand] = useState([
    {label: 'Select', value: ''},
    {label: 'Bosch', value: 'bosch'},
    {label: 'Frigidaire', value: 'frigidaire'},
    // Add other brand options here
    {label: 'Other', value: 'other'},
  ]);

  // ADD Photo

  const [openModal, setOpenModal] = useState(false);
  const [link, setLink] = useState('');
  const openGallery = async () => {
    const result = await launchImageLibrary({mediaType: 'photo', quality: 0});
    if (result.assets && result.assets.length > 0) {
      const uri = result.assets[0].uri;
      console.log(uri);
      setLink(uri);
    } else {
      console.log('User closed the image picker without selecting an image.');
    }
  };

  const openCamera = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera();
      if (result.assets && result.assets.length > 0) {
        const uri = result.assets[0].uri;
        console.log(uri);
        setLink(uri);
      } else {
        console.log('User closed the Camera without taking an image.');
      }
    } else {
      console.log('User Does not Allow Camera Permission');
    }
  };

  function renderModal() {
    return (
      <Modal visible={openModal} transparent={true}>
        <Pressable
          onPress={() => {
            setOpenModal(!openModal);
          }}
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-end',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}>
          <Pressable
            style={{width: '100%', backgroundColor: '#fff', height: 100}}>
            <View
              style={{
                flex: 1,
                padding: 20,
                justifyContent: 'center',
                gap: 20,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
                  openGallery();
                }}
                style={[
                  rncStyles.btn,
                  rncStyles.rounded,
                  rncStyles.w40,
                  {backgroundColor: '#06bd37'},
                ]}>
                <Text
                  style={[
                    rncStyles.fs7,
                    rncStyles.textWhite,
                    rncStyles.textCenter,
                  ]}>
                  Open Gallery
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  openCamera();
                }}
                style={[
                  rncStyles.btn,
                  rncStyles.rounded,
                  rncStyles.w40,
                  {backgroundColor: '#06bd37'},
                ]}>
                <Text
                  style={[
                    rncStyles.fs7,
                    rncStyles.textWhite,
                    rncStyles.textCenter,
                  ]}>
                  Open Camera
                </Text>
              </TouchableOpacity>
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    );
  }
  ////////////////////////////////////////////////////////////////////////

  return (
    <View
      style={[
        rncStyles.h100,
        {backgroundColor: 'white', paddingHorizontal: 14},
      ]}>
      <Text
        style={{
          fontSize: 15,
          marginTop: 20,
          color: 'black',
          fontWeight: '600',
          backgroundColor: 'lightgrey',
          paddingLeft: 3,
        }}>
        Step 5 e
      </Text>
      <Text
        style={{
          fontSize: 20,
          marginTop: 20,
          marginBottom: 15,
          color: 'black',
          fontWeight: '600',
        }}>
        Appliances
      </Text>
      <ScrollView>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 800,
            color: '#000',
            marginBottom: 10,
          }}>
          WASHER
        </Text>

        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={{flex: 1, marginRight: 10, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Washer - Type</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={selectedState}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setSelectedState(itemValue)
                }
                style={{width: '100%'}}
                state={washerType}
              />
            </View>
          </View>
          <View style={{flex: 1, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Washer - Size - Width</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={selectedState}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setSelectedState(itemValue)
                }
                style={{width: '100%'}}
                state={washerSize.width}
              />
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={{flex: 1, marginRight: 10, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Washer - Size - Height</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={selectedState}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setSelectedState(itemValue)
                }
                style={{width: '100%'}}
                state={washerSize.height}
              />
            </View>
          </View>
          <View style={{flex: 1, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Washer - Size - Depth</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={selectedState}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setSelectedState(itemValue)
                }
                style={{width: '100%'}}
                state={washerSize.depth}
              />
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={{flex: 1, marginRight: 10, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Washer - Load</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={selectedState}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setSelectedState(itemValue)
                }
                style={{width: '100%'}}
                state={washerLoad}
              />
            </View>
          </View>
          <View style={{flex: 1, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Washer - Brand</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={selectedState}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setSelectedState(itemValue)
                }
                style={{width: '100%'}}
                state={washerBrand}
              />
            </View>
          </View>
        </View>

        <Text
          style={{
            fontSize: 18,
            fontWeight: 800,
            color: '#000',
            marginBottom: 10,
            marginTop: 10,
          }}>
          DRYER
        </Text>

        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={{flex: 1, marginRight: 10, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Dryer - Type</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={selectedState}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setSelectedState(itemValue)
                }
                style={{width: '100%'}}
                state={dryerType}
              />
            </View>
          </View>
          <View style={{flex: 1, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Dryer - Size - Width</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={selectedState}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setSelectedState(itemValue)
                }
                style={{width: '100%'}}
                state={dryerSize.width}
              />
            </View>
          </View>
        </View>

        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={{flex: 1, marginRight: 10, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Dryer - Size - Height</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={selectedState}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setSelectedState(itemValue)
                }
                style={{width: '100%'}}
                state={dryerSize.height}
              />
            </View>
          </View>
          <View style={{flex: 1, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Dryer - Size - Depth</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={selectedState}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setSelectedState(itemValue)
                }
                style={{width: '100%'}}
                state={dryerSize.depth}
              />
            </View>
          </View>
        </View>

        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={{flex: 1, marginRight: 10, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Dryer - Source</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={selectedState}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setSelectedState(itemValue)
                }
                style={{width: '100%'}}
                state={dryerSource}
              />
            </View>
          </View>
          <View style={{flex: 1, marginRight: 10, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Dryer - Brand</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={selectedState}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setSelectedState(itemValue)
                }
                style={{width: '100%'}}
                state={dryerBrand}
              />
            </View>
          </View>
        </View>

        <View style={styles.hr} />
        <Text
          style={{
            fontSize: 20,
            marginTop: 5,
            color: 'black',
            fontWeight: '600',
          }}>
          Photos
        </Text>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              setOpenModal(true);
            }}
            style={[
              rncStyles.btn,
              rncStyles.rounded,
              rncStyles.w40,
              {backgroundColor: '#06bd37'},
            ]}>
            <Text
              style={[
                rncStyles.fs7,
                rncStyles.textWhite,
                rncStyles.textCenter,
              ]}>
              Add Photo's
            </Text>
          </TouchableOpacity>
          {renderModal()}
        </View>
        <View style={styles.hr} />
        <View style={{marginBottom: 100}}>
          <Text style={{marginBottom: 5, color: 'black'}}>
            Additional Notes/Comments
          </Text>
          <TextInput
            style={[styles.input, {width: '80%'}]}
            placeholder="Other"
            placeholderTextColor="grey"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default MeasureStep5e;

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
    paddingHorizontal: 5,
    width: '100%',
    color: 'black',
  },
  hr: {
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    marginVertical: 20,
  },
});
