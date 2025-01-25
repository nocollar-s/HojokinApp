import { View, Text, StyleSheet } from 'react-native'

const Content = (): JSX.Element => {
    return(
        <View style={styles.content}>
            <View>
                <Text style={styles.contentTitle}>具体的なタイトル</Text>
                <Text style={styles.contentText}>長々した本文</Text>
            </View>            
        </View>
    )
}

const styles = StyleSheet.create({
    content:{
        backgroundColor: '#ffffff',
        paddingVertical: 20,
        paddingHorizontal: 22
    },
    contentTitle:{
        fontSize: 20,
        lineHeight: 20
    },
    contentText:{
        paddingVertical: 18,
        fontSize: 16,

    }
})

export default Content