import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView ,Pressable, PermissionsAndroid , Modal} from 'react-native';
import rncStyles from 'rncstyles';
import proImg from './images/step1.png'
import { useState } from 'react';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export default function MeasureStep2({data , setData}) {
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
    <>
    <View style={[rncStyles.h100, { backgroundColor: 'white', paddingHorizontal: 20 }]}>
        <Text style={{ fontSize: 15, marginTop: 20, color: 'black', fontWeight: "600" , backgroundColor:'lightgrey' , paddingLeft:3 }}>Step 2</Text>
       <Text style={{ fontSize: 20, marginTop: 10, marginBottom: 20, color: 'black', fontWeight: "600" }}>Existing Soffit construction</Text>
       <ScrollView>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, marginBottom: 10, marginLeft: 30, marginRight: 30 }}>
          <Text style={{ color: 'black' , width:'50%' }}>A. Soffit Depth</Text>
          <TextInput onChangeText={(txt)=>{setData({...data ,soffitDepth: txt })}} value={data.soffitDepth} style={[styles.input, { width: '30%' }]} />
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, marginBottom: 10, marginLeft: 30, marginRight: 30 }}>
          <Text style={{ color: 'black' , width:'50%' }}>B. Soffit Height</Text>
          <TextInput onChangeText={(txt)=>{setData({...data ,soffitHeight: txt })}} value={data.soffitHeight} style={[styles.input, { width: '30%' }]} />
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, marginBottom: 10, marginLeft: 30, marginRight: 30 }}>
          <Text style={{ color: 'black' , width:'50%' }}>C. Floor to Soffit Clearance</Text>
          <TextInput onChangeText={(txt)=>{setData({...data ,floorToSoffitClearance: txt })}} value={data.floorToSoffitClearance} style={[styles.input, { width: '30%' }]} />
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, marginBottom: 10, marginLeft: 30, marginRight: 30 }}>
          <Text style={{ color: 'black' , width:'50%' }}>D. Ceiling Height</Text>
          <TextInput onChangeText={(txt)=>{setData({...data ,ceilingHeight: txt })}} value={data.ceilingHeight} style={[styles.input, { width: '30%' }]} />
        </View>
        <View
          style={rncStyles.flexCenter}>
          <Image
            resizeMode='contain'
            style={{ width: 300, height: 250 }}
            source={proImg} />
        </View>
        <View style={styles.hr} />
        <Text style={{ fontSize: 20, marginTop: 5, color: 'black', fontWeight: "600" }}>Photos</Text>
        <View
          style={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
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
        <View style={{marginBottom:100}}>
          <Text style={{ marginBottom: 5, color: 'black' }}>Additional Notes/Comments</Text>
          <TextInput style={[styles.input, { width: '80%' , height:40 , borderRadius:5 }]} placeholder="Other" placeholderTextColor="grey" />
        </View>
       </ScrollView>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
    input: {
      padding:0,
      height: 20,
      borderColor: 'gray',
      borderWidth: 1,
      paddingHorizontal: 5,
      color:'black',
    },
    select: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 5,
      width: '100%',
      color:'black'
    },
    hr: {
      borderBottomColor: 'lightgray',
      borderBottomWidth: 1,
      marginVertical: 20,
    },
  });