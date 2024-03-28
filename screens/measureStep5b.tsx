import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Pressable,
  Modal,
  PermissionsAndroid,
} from 'react-native';
import React, {useState} from 'react';
import rncStyles from 'rncstyles';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import PickerSelect from '../component/picker';

const MeasureStep5b = ({data, setData}) => {
  const [selectedState, setSelectedState] = useState('');
  // Dishwasher
  const [dishwasherType, setDishwasherType] = useState([
    {label: 'Select', value: ''},
    {label: 'Rolling', value: 'rolling'},
    {label: 'Under Counter', value: 'underCounter'},
    {label: 'Built In', value: 'builtIn'},
    {label: 'Other', value: 'others'},
  ]);

  const [dishwasherSize, setDishwasherSize] = useState({
    width: [
      {label: 'Select', value: ''},
      {label: '18"', value: '18'},
      {label: '24"', value: '24'},
      {label: 'Other', value: 'others'},
    ],
    height: [
      {label: 'Select', value: ''},
      {label: 'Standard', value: 'standard'},
      {label: 'Other', value: 'others'},
    ],
    depth: [
      {label: 'Select', value: ''},
      {label: 'Counter Depth', value: 'counterDepth'},
      {label: 'Other', value: 'others'},
    ],
  });

  const [dishwasherBrand, setDishwasherBrand] = useState([
    {label: 'Select', value: ''},
    {label: 'Bosch', value: 'bosch'},
    {label: 'Frigidaire', value: 'frigidaire'},
    // Add other brand options here
    {label: 'Other', value: 'others'},
  ]);

  // Microwave
  const [microwaveType, setMicrowaveType] = useState([
    {label: 'Select', value: ''},
    {label: 'Built-in', value: 'builtIn'},
    {label: 'Countertop', value: 'countertop'},
    {label: 'Over the Range', value: 'overTheRange'},
    {label: 'Other', value: 'others'},
  ]);

  const [microwaveSize, setMicrowaveSize] = useState({
    width: [
      {label: 'Select', value: ''},
      {label: '15"', value: '15'},
      {label: '16"', value: '16'},
      // Add other width options here
      {label: 'Other', value: 'others'},
    ],
    height: [
      {label: 'Select', value: ''},
      {label: '10"', value: '10'},
      {label: '11"', value: '11'},
      // Add other height options here
      {label: 'Other', value: 'others'},
    ],
    depth: [
      {label: 'Select', value: ''},
      {label: '10"', value: '10'},
      {label: '11"', value: '11'},
      // Add other depth options here
      {label: 'Other', value: 'others'},
    ],
  });

  const [microwaveBrand, setMicrowaveBrand] = useState([
    {label: 'Select', value: ''},
    {label: 'Bosch', value: 'bosch'},
    {label: 'Frigidaire', value: 'frigidaire'},
    // Add other brand options here
    {label: 'Other', value: 'others'},
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
        Step 5 b
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
          DISHWASHER
        </Text>

        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={{flex: 1, marginRight: 10, marginBottom: 10}}>
            <Text style={{color: 'black'}}>DW - Type</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={data.dishwasherType}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setData({...data, dishwasherType: itemValue})
                }
                style={{width: '100%'}}
                state={dishwasherType}
                data={data}
                setData={setData}
                property={'dishwasherType'}
              />
            </View>
          </View>
          <View style={{flex: 1, marginBottom: 10}}>
            <Text style={{color: 'black'}}>DW - Size - Width</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={data.dishwasherSize.width}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setData({
                    ...data,
                    dishwasherSize: {...data.dishwasherSize, width: itemValue},
                  })
                }
                style={{width: '100%'}}
                state={dishwasherSize.width}
                data={data}
                setData={setData}
                property={'dishwasherSize'}
                nestedProperty={'width'}
              />
            </View>
          </View>
        </View>

        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={{flex: 1, marginRight: 10, marginBottom: 10}}>
            <Text style={{color: 'black'}}>DW - Size - Height</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={data.dishwasherSize.height}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setData({
                    ...data,
                    dishwasherSize: {...data.dishwasherSize, height: itemValue},
                  })
                }
                style={{width: '100%'}}
                state={dishwasherSize.height}
                data={data}
                setData={setData}
                property={'dishwasherSize'}
                nestedProperty={'height'}
              />
            </View>
          </View>
          <View style={{flex: 1, marginBottom: 10}}>
            <Text style={{color: 'black'}}>DW - Size - Depth</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={data.dishwasherSize.height}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setData({
                    ...data,
                    dishwasherSize: {...data.dishwasherSize, depth: itemValue},
                  })
                }
                style={{width: '100%'}}
                state={dishwasherSize.depth}
                data={data}
                setData={setData}
                property={'dishwasherSize'}
                nestedProperty={'depth'}
              />
            </View>
          </View>
        </View>

        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={{flex: 0.5, marginRight: 10, marginBottom: 10}}>
            <Text style={{color: 'black'}}>DW - Brand</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={data.dishwasherBrand}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setData({...data , dishwasherBrand: itemValue})
                }
                style={{width: '100%'}}
                state={dishwasherBrand}
                data={data}
                setData={setData}
                property={'dishwasherBrand'}
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
          MICROWAVE
        </Text>

        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={{flex: 1, marginRight: 10, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Micro - Type</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={data.microwaveType}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setData({...data , microwaveType: itemValue})
                }
                style={{width: '100%'}}
                state={microwaveType}
                data={data}
                setData={setData}
                property={'microwaveType'}
              />
            </View>
          </View>
          <View style={{flex: 1, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Micro - Size - Width</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={data.microwaveSize.width}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setData({...data , microwaveSize : {...data.microwaveSize , width: itemValue}})
                }
                style={{width: '100%'}}
                state={microwaveSize.width}
                data={data}
                setData={setData}
                property={'microwaveSize'}
                nestedProperty={'width'}
              />
            </View>
          </View>
        </View>

        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={{flex: 1, marginRight: 10, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Micro - Size - Height</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={data.microwaveSize.height}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setData({...data , microwaveSize : {...data.microwaveSize , height: itemValue}})
                }
                style={{width: '100%'}}
                state={microwaveSize.height}
                data={data}
                setData={setData}
                property={'microwaveSize'}
                nestedProperty={'height'}
              />
            </View>
          </View>
          <View style={{flex: 1, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Micro - Size - Depth</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={data.microwaveSize.depth}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setData({...data , microwaveSize : {...data.microwaveSize , depth: itemValue}})
                }
                style={{width: '100%'}}
                state={microwaveSize.depth}
                data={data}
                setData={setData}
                property={'microwaveSize'}
                nestedProperty={'depth'}
              />
            </View>
          </View>
        </View>

        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={{flex: 0.5, marginRight: 10, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Micro - Brand</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={data.microwaveBrand}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setData({...data , microwaveBrand:  itemValue})
                }
                style={{width: '100%'}}
                state={microwaveBrand}
                data={data}
                setData={setData}
                property={'microwaveBrand'}
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

export default MeasureStep5b;

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
