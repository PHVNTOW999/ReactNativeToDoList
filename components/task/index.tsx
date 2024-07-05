import {
    Text,
    Card,
    Heading,
    Checkbox,
    CheckboxIndicator,
    CheckboxIcon,
    CheckboxLabel,
    CheckIcon, Box, Button, ButtonText, Fab, FabLabel, Divider
} from "@gluestack-ui/themed";
import {observer} from "mobx-react-lite";
import taskStore from "@/store";
import React from "react";

const Task = observer(({task}: any) => {
    return (
        <>
            <Card size="md" variant="filled" m="$2">
                <Text>{task.id}</Text>
                <Heading mb="$1" size="md">
                    <Checkbox
                        size="lg"
                        onClick={() => {taskStore.changeTask(task)}}
                        defaultIsChecked={task.status}
                    >
                        <CheckboxIndicator mr="$2">
                            <CheckboxIcon as={CheckIcon}/>
                        </CheckboxIndicator>
                        <CheckboxLabel>
                            {
                                task.status ? (
                                    <Text>Done!</Text>
                                ) : (
                                    <Text>Active</Text>
                                )
                            }
                        </CheckboxLabel>
                    </Checkbox>
                    <Fab
                        size="md"
                        placement="top right"
                    >
                        <FabLabel onClick={() => {taskStore.removeTask(task.id)}}>
                            Delete
                        </FabLabel>
                    </Fab>
                    <Box w='100%' textAlign='center'>
                        <Text
                            bold
                            w='100%'
                            textAlign='center'
                            isTruncated
                            strikeThrough={!!task.status}>
                            {task.title}
                        </Text>
                    </Box>
                </Heading>
                <Divider my="$1"/>
                <Text textAlign='center' size="sm" isTruncated>{task.desc}</Text>
            </Card>
        </>
    )
})

export default Task;