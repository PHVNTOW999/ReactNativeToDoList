import React from 'react';
import { View, Text, Button } from 'react-native';
import counterStore from '../../store/index';

const Counter = () => {
    return (
        <View>
            <Text>Count: {counterStore.count}</Text>
            <Button title="Increment" onPress={counterStore.increment} />
            <Button title="Decrement" onPress={counterStore.decrement} />
        </View>
    );
}

export default Counter;