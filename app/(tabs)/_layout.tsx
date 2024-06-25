import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {Link, Tabs} from 'expo-router';

import Colors from '@/constants/colors';

function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={28} style={{marginBottom: -5}} {...props} />;
}

const TabLayout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors['dark'].tint,
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Create new task',
                    tabBarIcon: ({color}) => <TabBarIcon name="search" color={color}/>,
                }}
            />
            <Tabs.Screen
                name="list"
                options={{
                    title: 'List',
                    tabBarIcon: ({color}) => <TabBarIcon name="list" color={color}/>,
                }}
            />
        </Tabs>
    );
}

export default TabLayout