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
import PickerSelect from '../component/picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const MeasureStep5d = ({data,setData}) => {
  const [selectedState, setSelectedState] = useState('');

  // Compactor
  const [compactorType, setCompactorType] = useState([
    {label: 'Select', value: ''},
    {label: 'Under Cabinet', value: 'underCabinet'},
    {label: 'Free Standing', value: 'freeStanding'},
    {label: 'Other', value: 'others'},
  ]);

  const [compactorSize, setCompactorSize] = useState({
    width: [
        {label: 'Select', value: ''},
      {label: '12” - 15”', value: '12-15'},
      {label: 'Other', value: 'others'},
    ],
    height: [
        {label: 'Select', value: ''},
      {label: 'Under Counter', value: 'underCounter'},
      {label: 'Other', value: 'others'},
    ],
    depth: [
        {label: 'Select', value: ''},
      {label: '22-27”', value: '22-27'},
      {label: 'Other', value: 'others'},
    ],
  });

  const [compactorBrand, setCompactorBrand] = useState([
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

  // Wall Oven
  const [wallOvenSource, setWallOvenSource] = useState([
    {label: 'Select', value: ''},
    {label: 'Electric', value: 'electric'},
    {label: 'Gas', value: 'gas'},
    {label: 'Propane', value: 'propane'},
    {label: 'Other', value: 'others'},
  ]);

  const [wallOvenType, setWallOvenType] = useState([
    {label: 'Select', value: ''},
    {label: 'Single', value: 'single'},
    {label: 'Double', value: 'double'},
    {label: 'Micro Wall Oven Combo', value: 'microWallOvenCombo'},
    {label: 'Smart Wall Oven', value: 'smartWallOven'},
    {label: 'Other', value: 'others'},
  ]);

  const [wallOvenSize, setWallOvenSize] = useState({
    width: [
        {label: 'Select', value: ''},
      {label: '24”', value: '24'},
      {label: '27”', value: '27'},
      {label: '30”', value: '30'},
      {label: 'Other', value: 'others'},
    ],
    height: [
        {label: 'Select', value: ''},
      {label: '22”-24”', value: '22-24'},
      {label: '42”-44”', value: '42-44'},
      {label: '50-53”', value: '50-53'},
      {label: 'Other', value: 'others'},
    ],
    depth: [
        {label: 'Select', value: ''},
      {label: '22-27”', value: '22-27'},
      {label: 'Other', value: 'others'},
    ],
  });

  const [wallOvenBrand, setWallOvenBrand] = useState([
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
        Step 5 d
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
          WALL OVEN
        </Text>

        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={{flex: 1, marginRight: 10, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Wall Oven - Type</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={data.wallOvenType}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setData({...data , wallOvenType:itemValue })
                }
                style={{width: '100%'}}
                state={wallOvenType}
              />
            </View>
          </View>
          <View style={{flex: 1, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Wall Oven - Size - Width</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={data}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setSelectedState(itemValue)
                }
                style={{width: '100%'}}
                state={wallOvenSize.width}
              />
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={{flex: 1, marginRight: 10, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Wall Oven - Size - Height</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={selectedState}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setSelectedState(itemValue)
                }
                style={{width: '100%'}}
                state={wallOvenSize.height}
              />
            </View>
          </View>
          <View style={{flex: 1, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Wall Oven - Size - Depth</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={selectedState}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setSelectedState(itemValue)
                }
                style={{width: '100%'}}
                state={wallOvenSize.depth}
              />
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={{flex: 1, marginRight: 10, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Wall Oven - Source</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={selectedState}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setSelectedState(itemValue)
                }
                style={{width: '100%'}}
                state={wallOvenSource}
              />
            </View>
          </View>
          <View style={{flex: 1, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Wall Oven - Brand</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={selectedState}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setSelectedState(itemValue)
                }
                style={{width: '100%'}}
                state={wallOvenBrand}
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
          COMPACTOR
        </Text>

        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={{flex: 1, marginRight: 10, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Compactor - Type</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={selectedState}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setSelectedState(itemValue)
                }
                style={{width: '100%'}}
                state={compactorType}
              />
            </View>
          </View>
          <View style={{flex: 1, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Compactor - Size - Width</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={selectedState}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setSelectedState(itemValue)
                }
                style={{width: '100%'}}
                state={compactorSize.width}
              />
            </View>
          </View>
        </View>

        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={{flex: 1, marginRight: 10, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Compactor - Size - Height</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={selectedState}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setSelectedState(itemValue)
                }
                style={{width: '100%'}}
                state={compactorSize.height}
              />
            </View>
          </View>
          <View style={{flex: 1, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Compactor - Size - Depth</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={selectedState}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setSelectedState(itemValue)
                }
                style={{width: '100%'}}
                state={compactorSize.depth}
              />
            </View>
          </View>
        </View>

        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={{flex: 0.5, marginRight: 10, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Compactor - Brand</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={selectedState}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setSelectedState(itemValue)
                }
                style={{width: '100%'}}
                state={compactorBrand}
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

export default MeasureStep5d;

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
