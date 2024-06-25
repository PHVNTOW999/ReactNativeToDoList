import {
    Text,
    Card,
    Heading,
    Checkbox,
    CheckboxIndicator,
    CheckboxIcon,
    CheckboxLabel,
    CheckIcon
} from "@gluestack-ui/themed";
import {observer} from "mobx-react-lite";
import taskStore from "@/store";

const Task = observer(({task}: any, {index}: number) => {
    return (
        <>
            <Card size="md" variant="elevated" m="$3">
                <Heading mb="$1" size="md"  textAlign='center'>
                    <Checkbox
                        size="lg"
                        onClick={() => {
                            taskStore.changeTask(task, index)
                        }}
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
                    <Text
                        textAlign='center'
                        w='$100%'
                        isTruncated
                        strikeThrough={!!task.status}>
                        {task.title}
                    </Text>
                </Heading>
                <Text size="sm" isTruncated>{task.desc}</Text>
            </Card>
        </>
    )
})

export default Task;