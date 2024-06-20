import {GluestackUIProvider, Text, Box, Card, Heading} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
import Counter from "@/components/counter";
import counterStore from "@/store";
import React from "react";
import {observer} from "mobx-react-lite";

const App: React.FunctionComponent<object> = observer(() => {
    return (
        <GluestackUIProvider config={config}>
            <Box width="100%" justifyContent="center" alignItems="center">
                <Text>Open up App.js to start working on your app!</Text>
            </Box>

            <Card size="md" variant="elevated" m="$3">
                <Heading mb="$1" size="md">
                    <Text>Count: {counterStore.count}</Text>
                </Heading>
                <Text size="sm">Start building your next project in minutes</Text>
            </Card>

            <Counter />
        </GluestackUIProvider>
    )
});

export default App