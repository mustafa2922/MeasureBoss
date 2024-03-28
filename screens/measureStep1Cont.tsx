import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Pressable,
  Modal,
  PermissionsAndroid,
} from 'react-native';
import rncStyles from 'rncstyles';
import PickerSelect from '../component/picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default function MeasureStep1Cont({data , setData}) {
  const [selectedState, setSelectedState] = useState('');

  const [interiorWallConstruction, setInteriorWallConstruction] = useState([
    {label: 'Select', value: ''},
    {label: 'Drywall', value: 'drywall'},
    {label: 'Plaster', value: 'plaster'},
    {label: 'Other', value: 'other'},
  ]);

  const [interiorWallCovering, setInteriorWallCovering] = useState([
    {label: 'Select', value: ''},
    {label: 'Paint', value: 'paint'},
    {label: 'Wallpaper', value: 'wallpaper'},
    {label: 'Paneling', value: 'paneling'},
    {label: 'Other', value: 'other'},
  ]);

  const [existingFloorMaterial, setExistingFloorMaterial] = useState([
    {label: 'Select', value: ''},
    {label: 'Wood', value: 'wood'},
    {label: 'Ceramic', value: 'ceramic'},
    {label: 'Vinyl Sheet', value: 'vinylSheet'},
    {label: 'VCT', value: 'vct'},
    {label: 'Vinyl Plank', value: 'vinylPlank'},
    {label: 'Laminate', value: 'laminate'},
    {label: 'Other', value: 'other'},
  ]);

  const [existingBaseCabinetDepth, setExistingBaseCabinetDepth] = useState([
    {label: 'Select', value: ''},
    {label: '24"', value: '24'},
    {label: '18"', value: '18'},
    {label: '15"', value: '15'},
    {label: '12"', value: '12'},
    {label: 'Other', value: 'other'},
  ]);

  const [existingBaseCabinetToeKick, setExistingBaseCabinetToeKick] = useState([
    {label: 'Select', value: ''},
    {label: '3” d x 3.5-4” h', value: '3x35'},
    {label: 'None', value: 'none'},
    {label: 'Other', value: 'other'},
  ]);

  const [floorLevel, setFloorLevel] = useState([
    {label: 'Select', value: ''},
    {label: 'Yes', value: 'yes'},
    {label: 'No', value: 'no'},
    {label: 'Other', value: 'other'},
  ]);

  const [ceilingLevel, setCeilingLevel] = useState([
    {label: 'Select', value: ''},
    {label: 'Yes', value: 'yes'},
    {label: 'No', value: 'no'},
    {label: 'Other', value: 'other'},
  ]);

  const [wallsPlumb, setWallsPlumb] = useState([
    {label: 'Select', value: ''},
    {label: 'Yes', value: 'yes'},
    {label: 'No', value: 'no'},
    {label: 'Other', value: 'other'},
  ]);

  const [wallsSquare, setWallsSquare] = useState([
    {label: 'Select', value: ''},
    {label: 'Yes', value: 'yes'},
    {label: 'No', value: 'no'},
    {label: 'Other', value: 'other'},
  ]);

  // ADD Photo's
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
        {backgroundColor: 'white', paddingHorizontal: 15},
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
        Step 1 Continue
      </Text>
      <Text
        style={{
          fontSize: 20,
          marginTop: 20,
          marginBottom: 20,
          color: 'black',
          fontWeight: '600',
        }}>
        Project Detail
      </Text>
      <ScrollView>
        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={{flex: 1, marginRight: 10, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Interior Wall Construction</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={data.interiorWallConstruction}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setData({...data,interiorWallConstruction: itemValue})
                }
                style={{width: '100%'}}
                state={interiorWallConstruction}
              />
            </View>
          </View>
          <View style={{flex: 1}}>
            <Text style={{color: 'black'}}>Interior Wall Covering</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={data.interiorWallCovering}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setData({...data,interiorWallCovering: itemValue})
                }
                style={{width: '100%'}}
                state={interiorWallCovering}
              />
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', width: '50%'}}>
          <View style={{flex: 1, marginRight: 10, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Existing Floor Material</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={data.existingFloorMaterial}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setData({...data , existingFloorMaterial: itemValue})
                }
                style={{width: '100%'}}
                state={existingFloorMaterial}
              />
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={{flex: 1, marginRight: 10, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Existing Base Cabinet Depth</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={data.existingBaseCabinetDepth}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setData({...data,existingBaseCabinetDepth: itemValue})
                }
                style={{width: '100%'}}
                state={existingBaseCabinetDepth}
              />
            </View>
          </View>
          <View style={{flex: 1}}>
            <Text style={{color: 'black'}}>Existing BaseCabinet ToeKick</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={data.existingBaseCabinetToeKick}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setData({...data,existingBaseCabinetToeKick: itemValue})
                }
                style={{width: '100%'}}
                state={existingBaseCabinetToeKick}
              />
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={{flex: 1, marginRight: 10, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Floor Level</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={data.floorLevel}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setData({...data,floorLevel: itemValue})
                }
                style={{width: '100%'}}
                state={floorLevel}
              />
            </View>
          </View>
          <View style={{flex: 1}}>
            <Text style={{color: 'black'}}>Ceiling Level</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={data.ceilingLevel}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setData({...data,ceilingLevel: itemValue})
                }
                style={{width: '100%'}}
                state={ceilingLevel}
              />
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={{flex: 1, marginRight: 10, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Walls Plumb</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={data.wallsPlumb}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setData({...data , wallsPlumb: itemValue})
                }
                style={{width: '100%'}}
                state={wallsPlumb}
              />
            </View>
          </View>
          <View style={{flex: 1}}>
            <Text style={{color: 'black'}}>Walls Square</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={data.wallsSquare}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setData({...data,wallsSquare: itemValue})
                }
                style={{width: '100%'}}
                state={wallsSquare}
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
            onPress={() => setOpenModal(true)}
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
        <View style={{paddingBottom: 200}}>
          <Text style={{marginBottom: 5, color: 'black'}}>
            Additional Notes/Comments
          </Text>
          <TextInput
            style={[styles.input, {width: '80%'}]}
            placeholder="Other"
            placeholderTextColor="grey"
            onChangeText={(txt) => {setData({...data , stp1C_notes: txt})}}
            value={data.stp1C_notes}
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
