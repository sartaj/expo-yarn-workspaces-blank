import {View, Text} from 'react-native'
import * as R from 'ramda'

export const TestView = () => (
    <View>
        <Text>{R.add(2, 6).toString()}</Text>
    </View>
)