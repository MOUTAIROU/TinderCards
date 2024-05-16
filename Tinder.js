import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TinderCards from './components/TinderCards';
import { useSharedValue, withDelay, withSpring } from 'react-native-reanimated';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import  Animated, {interpolate,SharedValue,useAnimatedStyle} from "react-native-reanimated"
const users = [
  {
    id: 1,
    image: 'https://picsum.photos/id/870/200/300',
    name: 'Dani'
  },
  {
    id: 2,
    image: 'https://picsum.photos/id/237/200/300',
    name: 'Luck'
  },
  {
    id: 3,
    image: 'https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68',
    name: 'Adrien'
  },
  {
    id: 4,
    image: 'https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0',
    name: 'Steven'
  },
  {
    id: 5,
    image: 'https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s',
    name: 'Stouba'
  },
  {
    id: 6,
    image: 'https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0',
    name: 'Steven6'
  },
  {
    id: 7,
    image: 'https://picsum.photos/id/870/200/300',
    name: 'Dani'
  },
  {
    id: 8,
    image: 'https://picsum.photos/id/237/200/300',
    name: 'Luck'
  },
  {
    id: 9,
    image: 'https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68',
    name: 'Adrien'
  },
  {
    id: 10,
    image: 'https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0',
    name: 'Steven'
  },
  {
    id: 11,
    image: 'https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s',
    name: 'Stouba'
  },
  {
    id: 12,
    image: 'https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0',
    name: 'Steven6'
  },
]

const TinderScreen = () => {

  const activeIndex = useSharedValue(0)
 

 

  return (

    
      <View style={styles.container}>



        {
          users.map((user, index) => {
            return (<TinderCards
              key={user.id}
              user={user}
              numOfCards={users.length}
              curIndex={index}
              index={index}
              activeIndex={activeIndex}/>)
          })
        }



      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

  },
});

export default TinderScreen