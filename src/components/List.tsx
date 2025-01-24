import { View, Text, StyleSheet } from 'react-native'

const List = (): JSX.Element => {
    return(
        <View style={styles.list}>
            <View>
                <Text style={styles.listTitle}>具体的なタイトル</Text>
            </View>            
        </View>
    )
}

const styles = StyleSheet.create({
    list:{
        backgroundColor: '#ffffff',
        //flexDirection: 'row',
        //justifyContent: 'space-between',
        paddingVertical: 18,
        paddingHorizontal: 24
    },
    listTitle:{
        fontSize: 20,
        lineHeight: 20
    }
})

export default List