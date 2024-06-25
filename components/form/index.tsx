import React, {useState} from 'react';
import {View} from 'react-native';
import {
    Button,
    ButtonText,
    FormControl,
    FormControlLabel,
    FormControlLabelText,
    Input,
    InputField,
    Textarea,
    TextareaInput
} from "@gluestack-ui/themed";
import {observer} from "mobx-react-lite";
import taskStore from "@/store";

const Form = observer(() => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const addTask = (title, desc) => {
        if(title) {
            taskStore.addTask({title: title, desc: desc});
            setDesc("");
            setTitle("");
        }
    }

    return (
        <View>
            <FormControl
                p='$10'
                size="md"
            >

                <FormControlLabel mb="$2" color="white" isRequired>
                    <FormControlLabelText color="white">Write task name</FormControlLabelText>
                </FormControlLabel>

                <Input color="white" size='xl' isRequired>
                    <InputField
                        color="white"
                        type="text"
                        value={title}
                        onChange={(event) => {setTitle(event.target.value)}}
                        placeholder="Title"
                    />
                </Input>

                <FormControlLabel mt='$5' color="white">
                    <FormControlLabelText color="white">Write task description</FormControlLabelText>
                </FormControlLabel>

                <Textarea
                    mt='$2'
                    size="md"
                    w="100"
                >
                    <TextareaInput
                        color="white"
                        placeholder="Description"
                        value={desc}
                        onChange={(event) => {setDesc(event.target.value)}}
                    />
                </Textarea>

                <Button
                    mt='$5'
                    onPress={() => {addTask(title, desc)}}
                >
                    <ButtonText color="white" textAlign='center' w='$100'>Create Task</ButtonText>
                </Button>
            </FormControl>
        </View>
    );
})

export default Form;