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

const MeasureStep5c = ({data,setData}) => {
  const [selectedState, setSelectedState] = useState('');

  // ADD Photo

  // Exhaust
  const [exhaustType, setExhaustType] = useState([
    {label: 'Select', value: ''},
    {label: 'Hood', value: 'hood'},
    {label: 'Microwave Over the Range', value: 'microwaveOverTheRange'},
    {label: 'Down Draft', value: 'downDraft'},
    {label: 'Other', value: 'others'},
  ]);

  const [exhaustVent, setExhaustVent] = useState([
    {label: 'Select', value: ''},
    {label: 'Carbon Filter', value: 'carbonFilter'},
    {label: 'Vented to Exterior', value: 'ventedToExterior'},
    {label: 'Other', value: 'others'},
  ]);

  // Cooktop
  const [cooktopSource, setCooktopSource] = useState([
    {label: 'Select', value: ''},
    {label: 'Electric', value: 'electric'},
    {label: 'Gas', value: 'gas'},
    {label: 'Propane', value: 'propane'},
    {label: 'Other', value: 'others'},
  ]);

  const [cooktopSize, setCooktopSize] = useState({
    width: [
      {label: 'Select', value: ''},
      {label: '15"', value: '15'},
      {label: '16"', value: '16'},
      // Add other width options here
      {label: 'Other', value: 'others'},
    ],
    builtInDowndraft: [
      {label: 'Select', value: ''},
      {label: 'Yes', value: 'yes'},
      {label: 'No', value: 'no'},
      {label: 'Other', value: 'others'},
    ],
  });

  const [cooktopBrand, setCooktopBrand] = useState([
    {label: 'Select', value: ''},
    {label: 'Bosch', value: 'bosch'},
    {label: 'Frigidaire', value: 'frigidaire'},
    // Add other brand options here
    {label: 'Other', value: 'others'},
  ]);
  // Disposal
  const [disposalSize, setDisposalSize] = useState([
    {label: 'Select', value: ''},
    {label: '1/4hp', value: '1/4hp'},
    {label: '1/3hp', value: '1/3hp'},
    {label: '1/2hp', value: '1/2hp'},
    {label: '3/4hp', value: '3/4hp'},
    {label: 'Other', value: 'others'},
  ]);

  const [disposalBrand, setDisposalBrand] = useState([
    {label: 'Select', value: ''},
    {label: 'American Standard', value: 'americanStandard'},
    {label: 'Bosch', value: 'bosch'},
    {label: 'Evolution', value: 'evolution'},
    {label: 'InSinkErator', value: 'insinkerator'},
    {label: 'Kohler', value: 'kohler'},
    {label: 'Kraus', value: 'kraus'},
    {label: 'Moen', value: 'moen'},
    {label: 'Waste Maid', value: 'wasteMaid'},
    {label: 'Waste King', value: 'wasteKing'},
    {label: 'Other', value: 'others'},
  ]);

  const [disposalElectric, setDisposalElectric] = useState([
    {label: 'Select', value: ''},
    {label: 'Hardware', value: 'hardware'},
    {label: 'Receptacle', value: 'receptacle'},
    {label: 'Other', value: 'others'},
  ]);

//   Add Photo
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
        Step 5 c
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
          DISPOSAL
        </Text>

        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={{flex: 1, marginRight: 10, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Disposal - hp</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={selectedState}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setSelectedState(itemValue)
                }
                style={{width: '100%'}}
                state={disposalSize}
              />
            </View>
          </View>
          <View style={{flex: 1, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Disposal - electric</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={selectedState}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setSelectedState(itemValue)
                }
                style={{width: '100%'}}
                state={disposalElectric}
              />
            </View>
          </View>
        </View>

        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={{flex: 0.5, marginRight: 10, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Disposal - Brand</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={selectedState}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setSelectedState(itemValue)
                }
                style={{width: '100%'}}
                state={disposalBrand}
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
          EXHAUST
        </Text>

        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={{flex: 1, marginRight: 10, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Exhaust - Type</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={selectedState}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setSelectedState(itemValue)
                }
                style={{width: '100%'}}
                state={exhaustType}
              />
            </View>
          </View>
          <View style={{flex: 1, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Exhaust - Vent</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={selectedState}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setSelectedState(itemValue)
                }
                style={{width: '100%'}}
                state={exhaustVent}
              />
            </View>
          </View>
        </View>

        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={{flex: 0.5, marginRight: 10, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Exhaust - other</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={selectedState}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setSelectedState(itemValue)
                }
                style={{width: '100%'}}
                state={exhaustVent} // ---->Change
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
          COOKTOP
        </Text>

        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={{flex: 1, marginRight: 10, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Cooktop - Source</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={selectedState}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setSelectedState(itemValue)
                }
                style={{width: '100%'}}
                state={cooktopSource}
              />
            </View>
          </View>
          <View style={{flex: 1, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Cooktop - Size - Width</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={selectedState}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setSelectedState(itemValue)
                }
                style={{width: '100%'}}
                state={cooktopSize.width}
              />
            </View>
          </View>
        </View>

        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={{flex: 1, marginRight: 10, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Cooktop - downdraft</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={selectedState}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setSelectedState(itemValue)
                }
                style={{width: '100%'}}
                state={cooktopSize.builtInDowndraft}
              />
            </View>
          </View>
          <View style={{flex: 1, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Cooktop - Brand</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={selectedState}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setSelectedState(itemValue)
                }
                style={{width: '100%'}}
                state={cooktopBrand}
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

export default MeasureStep5c;

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
