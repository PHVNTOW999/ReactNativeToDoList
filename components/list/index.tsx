import {observer} from "mobx-react-lite";
import {Box, Card, Center, Heading, ScrollView, VStack} from "@gluestack-ui/themed";
import taskStore from "@/store";
import {Text, View} from 'react-native';
import React from "react";
import Task from "@/components/task";

const TaskList = observer(() => {
    return (
        <>
            {
                taskStore.taskList.length ?
                    (
                        <ScrollView h="$100" w="$100">
                            <VStack space='xs' flex='1' reversed>
                                {
                                    taskStore.taskList.map((task, index) => {
                                        return (
                                            <Task task={task} key={index}/>
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