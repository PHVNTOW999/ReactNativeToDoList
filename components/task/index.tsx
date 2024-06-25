import {Card, Heading} from "@gluestack-ui/themed";
import {Text} from "react-native";

const Task = (({task}: any) => {
    return (
        <>
            <Card size="md" variant="elevated" m="$3">
                <Heading mb="$1" size="md">{task.title}</Heading>
                <Text size="sm">{task.desc}</Text>
            </Card>
        </>
    )
})

export default Task;