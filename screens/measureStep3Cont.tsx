import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  PermissionsAndroid,
  Modal,
  Pressable
} from 'react-native';
import rncStyles from 'rncstyles';
import PickerSelect from '../component/picker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export default function MeasureStep3Cont({data , setData}) {
  const [selectedState, setSelectedState] = useState('');

  const [location, setLocation] = useState([
    {label: 'Select', value: ''},
    {label: 'Main Sink', value: 'mainSink'},
    {label: 'Bar Sink', value: 'barSink'},
    {label: 'Pot Filler', value: 'potFiller'},
    {label: 'Sink 2', value: 'sink2'},
    {label: 'Sink 3', value: 'sink3'},
    {label: 'Other', value: 'other'},
  ]);

  const [waterSupplyType, setWaterSupplyType] = useState([
    {label: 'Select', value: ''},
    {label: 'Copper', value: 'copper'},
    {label: 'CPVC', value: 'cpvc'},
    {label: 'Galvanized', value: 'galvanized'},
    {label: 'PEX', value: 'pex'},
    {label: 'Polyethylene', value: 'polyethylene'},
    {label: 'Other', value: 'other'},
  ]);

  const [waterSupplySize, setWaterSupplySize] = useState([
    {label: 'Select', value: ''},
    {label: '1/2"', value: '1/2'},
    {label: '3/4"', value: '3/4'},
    {label: 'Other', value: 'other'},
  ]);

  const [drainType, setDrainType] = useState([
    {label: 'Select', value: ''},
    {label: 'ABS (Black)', value: 'absBlack'},
    {label: 'Cast Iron', value: 'castIron'},
    {label: 'Copper', value: 'copper'},
    {label: 'Galvanized', value: 'galvanized'},
    {label: 'Drain Waste Vent (DWV)', value: 'dwv'},
    {label: 'Schedule 40', value: 'schedule40'},
    {label: 'Other', value: 'other'},
  ]);

  const [drainSize, setDrainSize] = useState([
    {label: 'Select', value: ''},
    {label: '1-1/4"', value: '1-1/4'},
    {label: '1-1/2"', value: '1-1/2'},
    {label: '3"', value: '3'},
    {label: '4"', value: '4'},
    {label: 'Other', value: 'other'},
  ]);

  const [sinkDepth, setSinkDepth] = useState([
    {label: 'Select', value: ''},
    {label: '6"', value: '6'},
    {label: '8"', value: '8'},
    {label: '10"', value: '10'},
    {label: '12"', value: '12'},
    {label: 'Other', value: 'other'},
  ]);

  const [sinkBaseWidth, setSinkBaseWidth] = useState([
    {label: 'Select', value: ''},
    {label: '12"', value: '12'},
    {label: '18"', value: '18'},
    {label: '24"', value: '24'},
    {label: '30"', value: '30'},
    {label: '33"', value: '33'},
    {label: '36"', value: '36'},
    {label: '48"', value: '48'},
    {label: 'Custom', value: 'custom'},
    {label: 'Other', value: 'other'},
  ]);

  const [existingDisposal, setExistingDisposal] = useState([
    {label: 'Select', value: ''},
    {label: 'Yes', value: 'yes'},
    {label: 'No', value: 'no'},
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
        {backgroundColor: 'white', paddingHorizontal: 20},
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
        Step 3 Continue
      </Text>
      <Text
        style={{
          fontSize: 20,
          marginTop: 20,
          marginBottom: 20,
          color: 'black',
          fontWeight: '600',
        }}>
        Existing Plumbing Supply Lines
      </Text>
      <ScrollView>
        <View style={{flexDirection: 'row', width: '50%'}}>
          <View style={{flex: 1, marginRight: 10, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Location</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={data.location}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setData({...data , location: itemValue})
                }
                style={{width: '100%'}}
                state={location}
              />
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={{flex: 1, marginRight: 10, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Water Supply Type</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={data.waterSupplyType}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setData({...data , waterSupplyType: itemValue})
                }
                style={{width: '100%'}}
                state={waterSupplyType}
              />
            </View>
          </View>
          <View style={{flex: 1}}>
            <Text style={{color: 'black'}}>Water Supply Size</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={data.waterSupplySize}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setData({...data , waterSupplySize: itemValue})
                }
                style={{width: '100%'}}
                state={waterSupplySize}
              />
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={{flex: 1, marginRight: 10, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Drain Type</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={data.drainType}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setData({...data , drainType: itemValue})
                }
                style={{width: '100%'}}
                state={drainType}
              />
            </View>
          </View>
          <View style={{flex: 1}}>
            <Text style={{color: 'black'}}>Drain Size</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={data.drainSize}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setData({...data , drainSize: itemValue})
                }
                style={{width: '100%'}}
                state={drainSize}
              />
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={{flex: 1, marginRight: 10, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Sink Depth</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={data.sinkDepth}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setData({...data , sinkDepth: itemValue})
                }
                style={{width: '100%'}}
                state={sinkDepth}
              />
            </View>
          </View>
          <View style={{flex: 1}}>
            <Text style={{color: 'black'}}>Max Undermount Height</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={data.maxUndermountHeight}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setData({...data , maxUndermountHeight: itemValue})
                }
                style={{width: '100%'}}
                state={sinkDepth}
              />
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={{flex: 1, marginRight: 10, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Sink Base Width</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={data.sinkBaseWidth}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setData({...data , sinkBaseWidth: itemValue})
                }
                style={{width: '100%'}}
                state={sinkDepth}
              />
            </View>
          </View>
          <View style={{flex: 1}}>
            <Text style={{color: 'black'}}>Existing Disposal</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={data.existingDisposal}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setData({...data , existingDisposal: itemValue})
                }
                style={{width: '100%'}}
                state={existingDisposal}
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
          onPress={()=>{setOpenModal(true)}}
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
              Add Photos
            </Text>
          </TouchableOpacity>
          {renderModal()}
        </View>
        <View style={styles.hr} />
        <View style={{marginBottom: 120}}>
          <Text style={{marginBottom: 5, color: 'black'}}>
            Additional Notes/Comments
          </Text>
          <TextInput
            style={[styles.input, {width: '80%'}]}
            placeholder="Other"
            placeholderTextColor="grey"
            value={data.stp3C1_notes}
            onChangeText={(text)=>{setData({...data , stp3C1_notes: text})}}
          />
        </View>
      </ScrollView>
    </View>
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
