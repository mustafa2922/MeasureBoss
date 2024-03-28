import {useState} from 'react';
import {
  PermissionsAndroid,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Alert,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 300,
    width: 370,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default function MapScreen() {
  const [loading, setLoading] = useState(false);
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });

  const accessLocation = async () => {
    setLoading(true);
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('User Allowed the Location Access');
        await GetCoordinates();
      } else {
        console.log('User Does not Allow Accessing Position ');
        setLoading(false);
      }
    } catch (err) {
      console.log('Error Getting Location ---> ', err);
    }
  };

  const GetCoordinates = async () => {
    Geolocation.getCurrentPosition(
      Position => {
        const {latitude, longitude} = Position.coords;
        console.log(latitude, longitude);
        setRegion({...region, latitude, longitude});
        setLoading(false);
      },
      error => {
        console.log('Error ---> ', error);
        if (error.code === 2) {
          Alert.alert(
            'Enable Location',
            'Please Enable Your GPS service or Turn On Location',
            [
              {
                text: 'OK',
                onPress: () => setLoading(false),
              },
            ],
            {cancelable: false},
          );
        }
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          onPress={() => {
            accessLocation();
          }}
          style={{
            zIndex: 10,
            padding: 2,
            borderColor: '#000',
            borderWidth: 1,
            backgroundColor: '#fff',
            borderRadius: 3,
          }}>
          <Text style={{color: '#000'}}>
            {loading ? 'Loading...' : 'Get Current Location '}
          </Text>
        </TouchableOpacity>
      </View>

      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={region}
        showsUserLocation={true}>
        <Marker
          coordinate={{latitude: region.latitude, longitude: region.longitude}}
          title="You are here">
          </Marker>
      </MapView>
    </View>
  );
}