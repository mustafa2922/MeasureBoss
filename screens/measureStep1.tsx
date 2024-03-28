import React, {useEffect, useState} from 'react';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  PermissionsAndroid,
  Pressable,
  Modal,
} from 'react-native';
import rncStyles from 'rncstyles';
import {Picker} from '@react-native-picker/picker';
import PickerSelect from '../component/picker';

export default function MeasureStep1({data, setData}) {
  const [selectedState, setSelectedState] = useState('');

  console.log(data.yearBuild);

  // ADD Photo's
  const [openModal, setOpenModal] = useState(false);
  const [link, setLink] = useState('');

  const openGallery = async () => {
    const result = await launchImageLibrary({mediaType: 'photo', quality: 0});
    if (result.assets && result.assets.length > 0) {
      const uri = result.assets[0].uri;
      setLink(uri);
      console.log(uri);
    } else {
      console.log('User closed the image picker without selecting an image.');
    }
  };

  const openCamera = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera({mediaType: 'photo'});
      if (result.assets && result.assets.length > 0) {
        const uri = result.assets[0].uri;
        setLink(uri);
        console.log(uri);
      } else {
        console.log('User closed the Camera without taking an image.');
      }
    } else {
      console.log('User Does not Allow Camera Permission');
    }
  };

  const handleAddPhoto = () => {
    setOpenModal(true);
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

  // console.log(link);

  ////////////////////////////////////////////////////////////////////////////////////////////////////

  const [structure, setStructure] = useState([
    {label: 'Select', value: ''},
    {label: 'New', value: 'new'},
    {label: 'Existing', value: 'existing'},
    {label: 'Other', value: 'other'},
  ]);
  const [foundation, setFoundation] = useState([
    {label: 'Select', value: ''},
    {label: 'Basement', value: 'basement'},
    {label: 'Crawl Space', value: 'crawlSpace'},
    {label: 'Slab', value: 'slab'},
    {label: 'Raised', value: 'raised'},
    {label: 'Other', value: 'other'},
  ]);
  const [electricPanelLocation, setElectricPanelLocation] = useState([
    {label: 'Select', value: ''},
    {label: 'Basement', value: 'basement'},
    {label: 'Garage', value: 'garage'},
    {label: 'Closet', value: 'closet'},
    {label: 'Other', value: 'other'},
  ]);

  const [electricPanelAmperage, setElectricPanelAmperage] = useState([
    {label: 'Select', value: ''},
    {label: '225', value: '225'},
    {label: '200', value: '200'},
    {label: '150', value: '150'},
    {label: '125', value: '125'},
    {label: '100', value: '100'},
    {label: '60', value: '60'},
    {label: 'Other', value: 'other'},
  ]);

  const [exteriorWallMaterial, setExteriorWallMaterial] = useState([
    {label: 'Select', value: ''},
    {label: 'Wood', value: 'wood'},
    {label: 'Vinyl', value: 'vinyl'},
    {label: 'Brick', value: 'brick'},
    {label: 'Stone', value: 'stone'},
    {label: 'Hard Plank', value: 'hardPlank'},
    {label: 'Stucco', value: 'stucco'},
    {label: 'Other', value: 'other'},
  ]);

  const [years, setYears] = useState([]);
  const generateYears = () => {
    const yearsArray = [];
    for (let i = 2000; i <= 2100; i++) {
      yearsArray.push({label: i, value: i});
    }
    return yearsArray;
  };

  useEffect(() => {
    setYears(generateYears());
  }, []);

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
        Step 1
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
            <Text style={{color: 'black'}}>Structure</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={data.structure}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setData({...data, structure: itemValue})
                }
                style={{width: '100%'}}
                state={structure}
              />
            </View>
          </View>
          <View style={{flex: 1}}>
            <Text style={{color: 'black'}}>Year Build</Text>
            <View style={[styles.select]}>
              <Picker
                selectedValue={data.yearBuild}
                onValueChange={(itemValue, itemIndex) =>
                  setData({...data, yearBuild: itemValue})
                }
                style={{width: '100%'}}>
                {years.map((x: any, i: any) => (
                  <Picker.Item
                    key={i}
                    label={x.label}
                    value={x.value}
                    color="black"
                  />
                ))}
              </Picker>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', width: '50%'}}>
          <View style={{flex: 1, marginRight: 10, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Foundation</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={data.foundation}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setData({...data, foundation: itemValue})
                }
                style={{width: '100%'}}
                state={foundation}
              />
            </View>
          </View>
          {/*  */}
        </View>
        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={{flex: 1, marginRight: 10, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Exterior Wall Material</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={data.exteriorWallMaterial}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setData({...data, exteriorWallMaterial: itemValue})
                }
                style={{width: '100%'}}
                state={exteriorWallMaterial}
              />
            </View>
          </View>
          <View style={{flex: 1}}>
            <Text style={{color: 'black'}}>Roofing Material</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={data.roofingMaterial}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setData({...data, roofingMaterial: itemValue})
                }
                style={{width: '100%'}}
                state={structure}
              />
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={{flex: 1, marginRight: 10, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Electrical Panel Location</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={data.electricPanelLocation}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setData({...data, electricPanelLocation: itemValue})
                }
                style={{width: '100%'}}
                state={electricPanelLocation}
              />
            </View>
          </View>
          <View style={{flex: 1}}>
            <Text style={{color: 'black'}}>Electrical Panel Amperage</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={data.electricPanelAmperage}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setData({...data, electricPanelAmperage: itemValue})
                }
                style={{width: '100%'}}
                state={electricPanelAmperage}
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
            onPress={() => handleAddPhoto()}
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
            onChangeText={txt => {
              setData({...data, stp1_notes: txt});
            }}
            value={data.stp1_notes}
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
