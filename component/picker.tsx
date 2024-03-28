import {Picker} from '@react-native-picker/picker';
import {TextInput, View} from 'react-native';

export default function PickerSelect({
  selectedValue,
  onValueChange,
  style,
  state,
  data,
  setData,
  property,
  nestedProperty,
}: any) {

  return (
    <View>
      {selectedValue == 'others' ? (
        nestedProperty ? (
          <TextInput value={data[`${property[`${nestedProperty}`]}`]} onChangeText={(txt)=>{setData({...data , [property] : {...data[property] , [nestedProperty]:txt }})}} keyboardType="number-pad" />
        ) : (
          <TextInput value={data[`${property}`]} onChangeText={(txt) => {setData({...data , [property]:txt})}} keyboardType="number-pad" />
        )
      ) : (
        <Picker
          selectedValue={selectedValue}
          onValueChange={onValueChange}
          style={style}>
          {state.map((x: any, index: any) => (
            <Picker.Item
              key={index}
              label={x.label}
              value={x.value}
              color="black"
            />
          ))}
        </Picker>
      )}
    </View>
  );
}
