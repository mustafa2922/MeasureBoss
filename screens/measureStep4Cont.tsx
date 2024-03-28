import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView,Modal,Pressable,PermissionsAndroid } from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import rncStyles from 'rncstyles';
import proImg from './images/step4cont.png';

interface RowData {
  field1: string;
  field2: string;
  field3: string;
  field4: string;
  field5: string;
  field6: string;
  field7: string;
}

export default function MeasureStep4Cont({data , setData}) {
  const [rowCount, setRowCount] = useState<number>(4);
  const [rowData, setRowData] = useState<RowData[]>(Array.from({ length: rowCount }, () => ({ field1: '', field2: '', field3: '', field4: '', field5: '', field6: '', field7: '' })));

  const addRow = () => {
    setRowCount(rowCount + 1);
    setRowData([...rowData, { field1: '', field2: '', field3: '', field4: '', field5: '', field6: '', field7: '' }]);
  };

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
    <>
      <View style={[rncStyles.h100, { backgroundColor: 'white', paddingHorizontal: 20 }]}>
        <Text style={{ fontSize: 15, marginTop: 20, color: 'black', fontWeight: "600", backgroundColor: 'lightgrey', paddingLeft: 3 }}>Step 4 Continue</Text>
        <Text style={{ fontSize: 20, marginTop: 10, marginBottom: 20, color: 'black', fontWeight: "600" }}>Existing Doors</Text>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.row}>
              <View style={styles.column}></View>
              <View style={styles.column}><Text style={styles.cellText}>A</Text></View>
              <View style={styles.column}><Text style={styles.cellText}>B</Text></View>
              <View style={styles.column}><Text style={styles.cellText}>C</Text></View>
              <View style={styles.column}><Text style={styles.cellText}>D</Text></View>
              <View style={styles.column}><Text style={styles.cellText}>E</Text></View>
              <View style={styles.column}><Text style={styles.cellText}>F</Text></View>
            </View>
            {rowData.map((row, index) => (
              <View style={styles.row} key={index}>
                <View style={styles.column}><Text style={styles.cellText}>{index + 1}</Text></View>
                <View style={styles.column}><TextInput style={styles.input} value={data[`stp4C_A.A${index+1}`]} onChangeText={(text) => {setData({...data,stp4C_A:{...data.stp4C_A , [`A${index+1}`]:text}})}} keyboardType="number-pad" maxLength={3} /></View>
                <View style={styles.column}><TextInput style={styles.input} value={data[`stp4C_B.B${index+1}`]} onChangeText={(text) => {setData({...data,stp4C_B:{...data.stp4C_B , [`B${index+1}`]:text}})}} keyboardType="number-pad" maxLength={3} /></View>
                <View style={styles.column}><TextInput style={styles.input} value={data[`stp4C_C.C${index+1}`]} onChangeText={(text) => {setData({...data,stp4C_C:{...data.stp4C_C , [`C${index+1}`]:text}})}} keyboardType="number-pad" maxLength={3} /></View>
                <View style={styles.column}><TextInput style={styles.input} value={data[`stp4C_D.D${index+1}`]} onChangeText={(text) => {setData({...data,stp4C_D:{...data.stp4C_D , [`D${index+1}`]:text}})}} keyboardType="number-pad" maxLength={3} /></View>
                <View style={styles.column}><TextInput style={styles.input} value={data[`stp4C_E.E${index+1}`]} onChangeText={(text) => {setData({...data,stp4C_E:{...data.stp4C_E , [`E${index+1}`]:text}})}} keyboardType="number-pad" maxLength={3} /></View>
                <View style={styles.column}><TextInput style={styles.input} value={data[`stp4C_F.F${index+1}`]} onChangeText={(text) => {setData({...data,stp4C_F:{...data.stp4C_F , [`F${index+1}`]:text}})}} keyboardType="number-pad" maxLength={3} /></View>
              </View>
            ))}
          </View>
          <View style={rncStyles.flexCenter}>
            <Image resizeMode='contain' style={{ width: 400, height: 250 }} source={proImg} />
          </View>
          <View style={styles.hr} />
          <Text style={{ fontSize: 20, marginTop: 5,  color: 'black', fontWeight: "600" }}>Photos</Text>
          <View style={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
            <TouchableOpacity
              onPress={()=>{setOpenModal(true)}}
              style={[rncStyles.btn, rncStyles.rounded, rncStyles.w40, { backgroundColor: '#06bd37' }]}>
              <Text style={[rncStyles.fs7, rncStyles.textWhite, rncStyles.textCenter]}>Add Photo's</Text>
            </TouchableOpacity>
            {renderModal()}
          </View>
          <View style={styles.hr} />
          <View style={{ marginBottom: 100 }}>
            <Text style={{ marginBottom: 5, color: 'black' }}>Additional Notes/Comments</Text>
            <TextInput style={[styles.input, { width: '80%' }]} placeholder="Other" placeholderTextColor="grey" value={data.stp4C_notes} onChangeText={(text)=>{setData({...data , stp4C_notes: text})}} />
          </View>
        </ScrollView>
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
    color:'black',
  },
  hr: {
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    marginVertical: 20,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: 'black',
    marginLeft: 20,
    marginRight: 20,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flex: 1,
    height: 40,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
  },
  tableColumn: {
    backgroundColor: 'lightgrey',
    height: '100%',
    textAlign: 'center',
    paddingTop: 10,
    fontSize: 20,
    color: 'black'
  },
  cellText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'black'
  }
});
