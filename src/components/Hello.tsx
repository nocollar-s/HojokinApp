import { View, Text, StyleSheet, type TextStyle } from 'react-native'
interface Props {
    children: string
    style?: TextStyle
}


const Hello = (props: Props):JSX.Element => {
    const { children, style } =  props
    return (
        <View>
            <Text style={[styles.text, style ]}>Hello {children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'red',
        fontSize: 20

    }
})

export default Hello
