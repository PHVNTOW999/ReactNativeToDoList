import {View} from 'react-native';
import Form from "@/components/form";
import React from "react";
import TaskList from "@/components/list";

const CreateScreen = (() => {
    return (
        <View>
            <Form />
            <TaskList />
        </View>
    )
})

export default CreateScreen;