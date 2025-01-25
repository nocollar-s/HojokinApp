import { View, Text, StyleSheet } from 'react-native'

const Category = (): JSX.Element => {
    return(
        <View style={styles.category}>
            <View>
                <Text style={styles.categoryTitle}>金銭支援</Text>
                <Text style={styles.categoryTitle}>金銭支援</Text>
                <Text style={styles.categoryTitle}>金銭支援</Text>
            </View>            
        </View>
    )
}

const styles = StyleSheet.create({
    category:{
        backgroundColor: '#ffffff',
        marginTop: 24,
        marginLeft: 20
    },
    categoryTitle:{
        marginVertical:12,
        fontSize: 20,
        lineHeight: 20
    }
})

export default Category
