import {observer} from "mobx-react-lite";
import {Card, Center, Heading, ScrollView, VStack} from "@gluestack-ui/themed";
import taskStore from "@/store";
import {Text} from 'react-native';
import React from "react";
import Task from "@/components/task";

const TaskList = observer(() => {
    return (
        <>
            {
                taskStore.taskList.length ?
                    (
                        <ScrollView h="$80" w="$100">
                            <VStack flex='1'>
                                {
                                    taskStore.taskList.map((task, i) => {
                                        return (
                                            <Task task={task} key={i} />
                                        )
                                    })
                                }
                            </VStack>
                        </ScrollView>
                    ) :
                    (
                        <Center>
                            <Text>No data</Text>
                        </Center>
                    )
            }

        </>
    )
})

export default TaskList;