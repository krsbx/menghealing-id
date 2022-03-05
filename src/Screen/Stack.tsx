import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenStackType } from '../utils/interface';
import Detail from './Detail';
import Home from './Home';

const Stack = createNativeStackNavigator<ScreenStackType>();

const ScreenStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};

export default ScreenStack;
