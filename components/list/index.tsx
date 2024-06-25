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
                        <ScrollView h="$100" w="$100">
                            <VStack space='xs' flex='1' reversed>
                                {
                                    taskStore.taskList.map((task, index) => {
                                        return (
                                            <Task task={task} index={index} key={index} />
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