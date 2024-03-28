import React, {useState} from 'react';
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
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import PickerSelect from '../component/picker';
export default function MeasureStep5({data , setData}) {
  const [selectedState, setSelectedState] = useState('');

  // Fridge
  const [fridgeType, setFridgeType] = useState([
    {label: 'Select', value: ''},
    {label: 'Left Hand Swing', value: 'leftHandSwing'},
    {label: 'Right Hand Swing', value: 'rightHandSwing'},
    {label: 'Double Door', value: 'doubleDoor'},
    {label : 'Other' , value:'others'}
  ]);

  const [fridgeSize, setFridgeSize] = useState({
    width: [
        {label: 'Select', value: ''},
      {label: '28"', value: '28'},
      {label: '30"', value: '30'},
      {label: '32"', value: '32'},
      {label: '36"', value: '36'},
      {label: '42"', value: '42'},
      {label: '48"', value: '48'},
      {label: '60"', value: '60'},
      {label: '72"', value: '72'},
      {label: 'Other', value: 'others'},
    ],
    height: [
        {label: 'Select', value: ''},
      {label: '48"', value: '48'},
      {label: '60"', value: '60'},
      {label: '62"', value: '62'},
      {label: '64"', value: '64'},
      {label: '65"', value: '65'},
      {label: '66"', value: '66'},
      {label: '67"', value: '67'},
      {label: '68"', value: '68'},
      {label: '69"', value: '69'},
      {label: '70"', value: '70'},
      {label: '71"', value: '71'},
      {label: '72"', value: '72'},
      {label: 'Other', value: 'others'},
    ],
    depth: [
        {label: 'Select', value: ''},
      {label: '22"', value: '22'},
      {label: '24"', value: '24'},
      {label: '26"', value: '26'},
      {label: '28"', value: '28'},
      {label: '30"', value: '30'},
      {label: '32"', value: '32'},
      {label: '34"', value: '34'},
      {label: 'Other', value: 'others'},
    ],
  });

  const [fridgeWaterLine, setFridgeWaterLine] = useState([
    {label: 'Select', value: ''},
    {label: 'Yes', value: 'yes'},
    {label: 'No', value: 'no'},
    {label: 'Other', value: 'others'},
  ]);

  const [fridgeBrand, setFridgeBrand] = useState([
    {label: 'Select', value: ''},
    {label: 'Bosch', value: 'bosch'},
    {label: 'Frigidaire', value: 'frigidaire'},
    {label: 'General Electric (GE)', value: 'ge'},
    {label: 'Hotpoint', value: 'hotpoint'},
    {label: 'Kenmore', value: 'kenmore'},
    {label: 'Kitchen Aid', value: 'kitchenAid'},
    {label: 'LG', value: 'lg'},
    {label: 'MayTag', value: 'maytag'},
    {label: 'Samsung', value: 'samsung'},
    {label: 'Sharp', value: 'sharp'},
    {label: 'Sub-Zero', value: 'subZero'},
    {label: 'Viking', value: 'viking'},
    {label: 'Whirlpool', value: 'whirlpool'},
    {label: 'Other', value: 'others'},
  ]);

  // Range
  const [rangeSource, setRangeSource] = useState([
    {label: 'Select', value: ''},
    {label: 'Electric', value: 'electric'},
    {label: 'Gas', value: 'gas'},
    {label: 'Propane', value: 'propane'},
    {label: 'Other', value: 'others'},
  ]);

  const [rangeType, setRangeType] = useState([
    {label: 'Select', value: ''},
    {label: 'Free Standing', value: 'freeStanding'},
    {label: 'Built In', value: 'builtIn'},
    {label: 'Other', value: 'others'},
  ]);

  const [rangeSize, setRangeSize] = useState({
    width: [
        {label: 'Select', value: ''},
      {label: '24"', value: '24'},
      {label: '30"', value: '30'},
      {label: '36"', value: '36'},
      {label: '60"', value: '60'},
      {label: 'Other', value: 'others'},
    ],
    height: [
        {label: 'Select', value: ''},
      {label: '36"', value: '36'},
      {label: 'Other', value: 'others'},
    ],
    depth: [
        {label: 'Select', value: ''},
      {label: '22"', value: '22'},
      {label: '24"', value: '24'},
      {label: '26"', value: '26'},
      {label: '28"', value: '28'},
      {label: '30"', value: '30'},
      {label: '32"', value: '32'},
      {label: '34"', value: '34'},
      {label: 'Other', value: 'others'},
    ],
  });

  const [rangeBrand, setRangeBrand] = useState([
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
        Step 5 a
      </Text>
      <Text
        style={{
          fontSize: 20,
          marginTop: 20,
          marginBottom: 15,
          color: 'black',
          fontWeight: '600',
        }}>
        Existing Appliances
        <Text style={{color: 'grey'}}>(if Keeping or New)</Text>
      </Text>
      <ScrollView>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 800,
            color: '#000',
            marginBottom: 10,
          }}>
          FRIDGE
        </Text>

        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={{flex: 1, marginRight: 10, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Fridge - Type</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={data.fridgeType}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setData({...data,fridgeType: itemValue})
                }
                style={{width: '100%'}}
                state={fridgeType}
                data={data}
                setData={setData}
                property={'fridgeType'}
              />
            </View>
          </View>
          <View style={{flex: 1, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Fridge - Size - Width</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={data.fridgeSize.width}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setData({...data , fridgeSize : {...data.fridgeSize , width : itemValue}})
                }
                style={{width: '100%'}}
                state={fridgeSize.width}
                data={data}
                setData={setData}
                property={'fridgeSize'}
                nestedProperty={'width'}
              />
            </View>
          </View>
        </View>

        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={{flex: 1, marginRight: 10, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Fridge - Size - Height</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={data.fridgeSize.height}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setData({...data , fridgeSize : {...data.fridgeSize , height : itemValue}})
                }
                style={{width: '100%'}}
                state={fridgeSize.height}
                data={data}
                setData={setData}
                property={'fridgeSize'}
                nestedProperty={'height'}
              />
            </View>
          </View>
          <View style={{flex: 1}}>
            <Text style={{color: 'black'}}>Fridge - Size - Depth</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={data.fridgeSize.depth}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setData({...data , fridgeSize : {...data.fridgeSize , depth : itemValue}})
                }
                style={{width: '100%'}}
                state={fridgeSize.depth}
                data={data}
                setData={setData}
                property={'fridgeSize'}
                nestedProperty={'depth'}
              />
            </View>
          </View>
        </View>

        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={{flex: 1, marginRight: 10, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Fridge - WaterLine</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={data.fridgeWaterLine}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setData({...data , fridgeWaterLine:  itemValue})
                }
                style={{width: '100%'}}
                state={fridgeWaterLine}
                data={data}
                setData={setData}
                property={'fridgeWaterLine'}
              />
            </View>
          </View>
          <View style={{flex: 1}}>
            <Text style={{color: 'black'}}>Fridge - Brand</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={data.fridgeBrand}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setData({...data , fridgeBrand: itemValue})
                }
                style={{width: '100%'}}
                state={fridgeBrand}
                data={data}
                setData={setData}
                property={'fridgeBrand'}
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
          RANGE
        </Text>

        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={{flex: 1, marginRight: 10, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Range - Type</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={data.rangeType}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setData({...data , rangeType:  itemValue})
                }
                style={{width: '100%'}}
                state={rangeType}
                data={data}
                setData={setData}
                property={'rangeType'}
              />
            </View>
          </View>
          <View style={{flex: 1}}>
            <Text style={{color: 'black'}}>Range - Size - width</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={data.rangeSize.width}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setData({...data , rangeSize: {...data.rangeSize ,  width : itemValue}})
                }
                style={{width: '100%'}}
                state={rangeSize.width}
                data={data}
                setData={setData}
                property={'rangeSize'}
                nestedProperty={'width'}
              />
            </View>
          </View>
        </View>

        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={{flex: 1, marginRight: 10, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Range - Size - Height</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={data.rangeSize.height}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setData({...data , rangeSize: {...data.rangeSize ,  height : itemValue}})
                }
                style={{width: '100%'}}
                state={rangeSize.height}
                data={data}
                setData={setData}
                property={'rangeSize'}
                nestedProperty={'height'}
              />
            </View>
          </View>
          <View style={{flex: 1}}>
            <Text style={{color: 'black'}}>Range - Size - Depth</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={data.rangeSize.depth}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setData({...data , rangeSize: {...data.rangeSize ,  depth : itemValue}})
                }
                style={{width: '100%'}}
                state={rangeSize.depth}
                data={data}
                setData={setData}
                property={'rangeSize'}
                nestedProperty={'depth'}
              />
            </View>
          </View>
        </View>

        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={{flex: 1, marginRight: 10, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Range - Source</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={data.rangeSource}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setData({...data , rangeSource: itemValue})
                }
                style={{width: '100%'}}
                state={rangeSource}
                data={data}
                setData={setData}
                property={'rangeSource'}
              />
            </View>
          </View>
          <View style={{flex: 1}}>
            <Text style={{color: 'black'}}>Range - Brand</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={data.rangeBrand}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setData({...data , rangeBrand: itemValue})
                }
                style={{width: '100%'}}
                state={rangeBrand}
                data={data}
                setData={setData}
                property={'rangeBrand'}
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
