import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView
} from 'react-native';
import useGlobal from "../store";
import { renderTime } from "../utils";

const Counter = () => {
  const [globalState, globalActions] = useGlobal();
  return (
    <View className="Counter">
      <Text>
        Counter:
        {globalState.Counter}
      </Text>
      <Button type="button" title='+1 to global' onClick={() => globalActions.addToCounter(1)} />
      <Text>{renderTime()}</Text>
    </View>
  );
};

export default Counter;