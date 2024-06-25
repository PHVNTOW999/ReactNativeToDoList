import React from 'react';
import { View, Text, Button } from 'react-native';
import counterStore from '../../store/index';
import {observer} from "mobx-react-lite";

const Counter = observer(() => {
    return (
        <View className='text-white'>
            <Text className='text-white'>Count: {counterStore.count}</Text>
            <Button title="Increment" onPress={counterStore.increment} />
            <Button title="Decrement" onPress={counterStore.decrement} />
        </View>
    );
})

export default Counter;