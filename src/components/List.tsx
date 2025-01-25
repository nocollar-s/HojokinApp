import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const List = (): JSX.Element => {
    return(
        <View style={styles.list}>
            <TouchableOpacity >
                <Text style={styles.listTitle}>具体的なタイトル</Text>
            </TouchableOpacity>
                       
        </View>
    )
}

const styles = StyleSheet.create({
    list:{
        backgroundColor: '#ffffff',
        marginTop: 16,
        marginLeft: 20
    },
    listTitle:{
        marginVertical:10,
        fontSize: 18,
        lineHeight: 20
    }
})

export default List