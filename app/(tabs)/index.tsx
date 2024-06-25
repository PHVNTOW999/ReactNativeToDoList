import {View, Text} from 'react-native';
import Form from "@/components/form";
import {observer} from "mobx-react-lite";
import React from "react";
import TaskList from "@/components/list";

const CreateScreen = observer(() => {
    return (
        <View>
            <Form />
            <TaskList />
        </View>
    )
})

export default CreateScreen;