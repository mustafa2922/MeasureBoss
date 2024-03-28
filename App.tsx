import React, { useState} from 'react';
import StackNavigation from './config/stackNavigate';
import {View} from 'react-native';
import Toast from 'react-native-toast-message';
import UserContext from './context/UserContext';


const App = () => {
  
  const [userId, setUserId] = useState('');

  return (
    <UserContext.Provider  value={{userId , setUserId}}>
      <View style={{flex: 1}}>
        <StackNavigation />
        <Toast />
      </View>
    </UserContext.Provider>
  );
};

export default App;
