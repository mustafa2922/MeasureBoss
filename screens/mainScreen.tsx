import React, {useState} from 'react';
import {
  Text,
  Pressable,
  View,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import ProgressBar from '../component/progressBar';
import MeasureStep1 from './measureStep1';
import MeasureStep2 from './measureStep2';
import MeasureStep3 from './measureStep3';
import MeasureStep3Cont from './measureStep3Cont';
import MeasureStep3Cont2 from './measureStep3Cont2';
import MeasureStep4 from './measureStep4';
import MeasureStep4Cont from './measureStep4Cont';
import MeasureStep5 from './measureStep5';
import MeasureStep6 from './measureStep6';
import MeasureStep1Cont from './measureStep1Cont';
import MeasureStep2Cont from './measureStep2Cont';
import MeasureStep5b from './measureStep5b';
import MeasureStep5c from './measureStep5c';
import MeasureStep5d from './measureStep5d';
import MeasureStep5e from './measureStep5e';

export default function MainScreen({navigation}: any) {
  const [data, setdata] = useState({
    // New Measure 
    name:'',
    cell:'',
    email:'',
    streetAddress:'',
    streetAddress2:'',
    city:'',
    state:'',
    postalCode:'',
    Geolocation:{lat:'',long:''},

    // step # 1 [Project Detail]
    structure: '',
    yearBuild:'',
    foundation: '',
    electricPanelLocation: '',
    electricPanelAmperage: '',
    exteriorWallMaterial: '',
    roofingMaterial:'',
    stp1_notes: '',
    stp1_img: '',

    // step # 1 Cont [Project Detail]
    interiorWallConstruction: '',
    interiorWallCovering: '',
    existingFloorMaterial: '',
    existingBaseCabinetDepth: '',
    existingBaseCabinetToeKick: '',
    floorLevel: '',
    ceilingLevel: '',
    wallsPlumb: '',
    wallsSquare: '',
    stp1C_notes: '',
    stp1C_img: '',

    // step # 2 [Existing Soffit construction]
    soffitDepth: '',
    soffitHeight: '',
    floorToSoffitClearance: '',
    ceilingHeight: '',
    stp2_notes: '',
    stp2_img: '',

    // step # 2 Cont [Existing Soffit construction]
    stp2C_A: {A1: '', A2: '', A3: ''},
    stp2C_B: {B1: '', B2: '', B3: ''},
    stp2C_C: {C1: '', C2: '', C3: ''},
    stp2C_D: {D1: '', D2: '', D3: ''},
    stp2C_E: {E1: '', E2: '', E3: ''},
    stp2C_F: {F1: '', F2: '', F3: ''},
    stp2C_G: {G1: '', G2: '', G3: ''},
    stp2C_notes: '',
    stp2C_img: '',

    // step # 3 [Existing Gas Line Locations]
    stp3_A: {A1: '', A2: '', A3: ''},
    stp3_B: {B1: '', B2: '', B3: ''},
    stp3_C: {C1: '', C2: '', C3: ''},
    stp3_D: {D1: '', D2: '', D3: ''},
    stp3_notes: '',
    stp3_img: '',

    // step # 3 Cont-1 [Existing Plumbing Supply Lines]
    location: '',
    waterSupplyType: '',
    waterSupplySize: '',
    drainType: '',
    drainSize: '',
    sinkDepth: '',
    sinkBaseWidth: '',
    maxUndermountHeight:'',
    existingDisposal: '',
    stp3C1_notes: '',
    stp3C1_img: '',

    // step # 3 Cont-2 [Existing Plumbing Supply Lines]
    stp3C2_A: {A1: '', A2: '', A3: ''},
    stp3C2_B: {B1: '', B2: '', B3: ''},
    stp3C2_C: {C1: '', C2: '', C3: ''},
    stp3C2_D: {D1: '', D2: '', D3: ''},
    stp3C2_E: {E1: '', E2: '', E3: ''},
    stp3C2_F: {F1: '', F2: '', F3: ''},
    stp3C2_G: {G1: '', G2: '', G3: ''},
    stp3C2_notes: '',
    stp3C2_img: '',

    // step # 4 [Existing Windows]
    stp4_A: {A1: '', A2: '', A3: '', A4: ''},
    stp4_B: {B1: '', B2: '', B3: '', B4: ''},
    stp4_C: {C1: '', C2: '', C3: '', C4: ''},
    stp4_D: {D1: '', D2: '', D3: '', D4: ''},
    stp4_E: {E1: '', E2: '', E3: '', E4: ''},
    stp4_F: {F1: '', F2: '', F3: '', F4: ''},
    stp4_notes: '',
    stp4_img: '',

    // step # 4 Cont [Existing Windows]
    stp4C_A: {A1: '', A2: '', A3: '', A4: ''},
    stp4C_B: {B1: '', B2: '', B3: '', B4: ''},
    stp4C_C: {C1: '', C2: '', C3: '', C4: ''},
    stp4C_D: {D1: '', D2: '', D3: '', D4: ''},
    stp4C_E: {E1: '', E2: '', E3: '', E4: ''},
    stp4C_F: {F1: '', F2: '', F3: '', F4: ''},
    stp4C_notes: '',
    stp4C_img: '',

    // step # 5 [Existing Appliances]

    // 5-a
    fridgeType: '',
    fridgeSize: {width: '', height: '', depth: ''},
    fridgeWaterLine: '',
    fridgeBrand: '',
    rangeSource: '',
    rangeType: '',
    rangeSize: {width: '', height: '', depth: ''},
    rangeBrand: '',
    stp5a_notes: '',
    stp5a_img: '',

    // 5-b
    dishwasherType: '',
    dishwasherSize: {width: '', height: '', depth: ''},
    dishwasherBrand: '',
    microwaveType: '',
    microwaveSize: {width: '', height: '', depth: ''},
    microwaveBrand: '',
    stp5b_notes: '',
    stp5b_img: '',

    // 5-c
    exhaustType: '',
    exhaustVent: '',
    exhaustOther:'',
    cooktopSource: '',
    cooktopSize: {width: '', builtInDowndraft: ''},
    cooktopBrand: '',
    disposalSize: '',
    disposalBrand: '',
    disposalElectric: '',
    stp5c_notes: '',
    stp5c_img: '',

    // 5-d
    compactorSize: {width: '', height: '', depth: ''},
    compactorBrand: '',
    wallOvenType:'',
    wallOvenSize:{width:'',height:'',depth:''},
    wallOvenSource:'',
    wallOvenBrand:'',
    stp5d_notes: '',
    stp5d_img: '',
    
    // 5-e
    washerType: '',
    washerLoad: '',
    washerSize: {width: '', height: '', depth: ''},
    washerBrand: '',
    dryerType: '',
    dryerSource: '',
    dryerSize: {width: '', height: '', depth: ''},
    dryerBrand: '',
    stp5e_notes: '',
    stp5e_img: '',
    
    // step # 6 [Existing Cabinet Layout]
    stp6_notes: '',
    stp6_img: '',
  });
  const [screen, setScreen] = useState(0);

  const handleBackPress = () => {
    console.log('Back button pressed. Current screen:', screen);
    setScreen(currScreen => currScreen - 1);
  };

  const handleNextPress = () => {
    console.log('Next button pressed. Current screen:', screen);
    setScreen(currScreen => currScreen + 1);
  };
  const screenHandle = () => {
    if (screen == 0) {
      return <MeasureStep1 data={data} setData={setdata} />;
    } else if (screen == 1) {
      return <MeasureStep1Cont data={data} setData={setdata} />;
    } else if (screen == 2) {
      return <MeasureStep2 data={data} setData={setdata} />;
    } else if (screen == 3) {
      return <MeasureStep2Cont data={data} setData={setdata} />;
    } else if (screen == 4) {
      return <MeasureStep3 data={data} setData={setdata} />;
    } else if (screen == 5) {
      return <MeasureStep3Cont data={data} setData={setdata} />;
    } else if (screen == 6) {
      return <MeasureStep3Cont2 data={data} setData={setdata} />;
    } else if (screen == 7) {
      return <MeasureStep4 data={data} setData={setdata} />;
    } else if (screen == 8) {
      return <MeasureStep4Cont data={data} setData={setdata} />;
    } else if (screen == 9) {
      return <MeasureStep5 data={data} setData={setdata} />;
    } else if (screen == 10) {
      return <MeasureStep5b data={data} setData={setdata} />;
    } else if (screen == 11) {
      return <MeasureStep5c data={data} setData={setdata} />;
    } else if (screen == 12) {
      return <MeasureStep5d data={data} setData={setdata} />;
    } else if (screen == 13) {
      return <MeasureStep5e data={data} setData={setdata} />;
    } else if (screen == 14) {
      return <MeasureStep6 data={data} setData={setdata} />;
    }
  };

  return (
    <ScrollView>
      <View>
        <ProgressBar screen={screen} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            marginTop: 10,
            backgroundColor: 'white',
          }}>
          {screen == 0 ? (
            <Pressable onPress={() => navigation.navigate(`newMeasure`)}>
              <Text style={{color: '#06bd37', fontSize: 20}}>Back</Text>
            </Pressable>
          ) : (
            <Pressable disabled={screen == 0} onPress={handleBackPress}>
              <Text style={{color: '#06bd37', fontSize: 20}}>Back</Text>
            </Pressable>
          )}
          <Pressable disabled={screen == 14} onPress={handleNextPress}>
            {screen == 14 ? (
              <TouchableOpacity
                onPress={() => navigation.navigate(`saveMeasure`)}>
                <Text style={{color: '#06bd37', fontSize: 20}}>Submit</Text>
              </TouchableOpacity>
            ) : (
              <Text style={{color: '#06bd37', fontSize: 20}}>Next</Text>
            )}
          </Pressable>
        </View>
        <View>{screenHandle()}</View>
      </View>
    </ScrollView>
  );
}
