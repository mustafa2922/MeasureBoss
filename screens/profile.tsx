import {View, TouchableOpacity, Text, ScrollView, Image} from 'react-native';
import rncStyles from 'rncstyles';
import proImg from './images/profileImg.png';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {LogOutUser, auth} from '../config/firebase';

export default function Profile({navigation}: any) {
  const handlePress = async () => {
    try {
      const msg = await LogOutUser(auth);
      console.log(msg);
      navigation.navigate('login')
    } catch (error) {
        console.log('error',error)
    }
  };

  return (
    <View style={[rncStyles.h100, rncStyles.bgWhite]}>
      <View style={[rncStyles.h100, rncStyles.justifyContentCenter]}>
        <ScrollView>
          <View
            style={[
              // rncStyles.p2,
              rncStyles.py5,
            ]}>
            <View style={rncStyles.flexCenter}>
              <Image
                resizeMode="contain"
                style={[rncStyles.roundedPill, {width: 180, height: 180}]}
                source={proImg}
              />
            </View>
            <View style={rncStyles.flexCenter}>
              <Text
                style={[
                  rncStyles.fs1,
                  rncStyles.textBlack,
                  rncStyles.textBold,
                  rncStyles.mb1,
                ]}>
                Joe User
              </Text>
              <Text style={[rncStyles.fs5, rncStyles.textSecondary]}>
                Johanna@company.com
              </Text>
            </View>
          </View>
          <View style={rncStyles.p2}>
            <View style={rncStyles.py2}>
              <TouchableOpacity
                onPress={() => navigation.navigate('newMeasure')}
                style={[
                  rncStyles.btn,
                  rncStyles.rounded,
                  rncStyles.textCenter,
                  {backgroundColor: '#06bd37'},
                ]}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon name="add" size={30} color="white" />
                  <Text
                    style={[
                      rncStyles.fs5,
                      rncStyles.textWhite,
                      rncStyles.textCenter,
                      {marginLeft: 10}, // Adjust as needed
                    ]}>
                    New Measure
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View
            // style={rncStyles.py1}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate('saveMeasure')}
                style={[
                  rncStyles.btn,
                  rncStyles.rounded,
                  {backgroundColor: '#06bd37'},
                ]}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon name="save" size={30} color="white" />
                  <Text
                    style={[
                      rncStyles.fs5,
                      rncStyles.textWhite,
                      rncStyles.textCenter,
                      {marginLeft: 10},
                    ]}>
                    Saved Measure
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                marginTop: 130,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => handlePress()}
                style={[
                  rncStyles.btnPrimary,
                  rncStyles.rounded,
                  rncStyles.w40,
                  {backgroundColor: '#06bd37'},
                ]}>
                <Text
                  style={[
                    rncStyles.fs5,
                    rncStyles.textWhite,
                    rncStyles.textCenter,
                  ]}>
                  Logout
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
