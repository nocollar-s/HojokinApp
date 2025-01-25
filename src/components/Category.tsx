import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Link } from 'expo-router'

const Category = (): JSX.Element => {
    return(
        <Link href='/hojokin/listPage' asChild>
            <TouchableOpacity style={styles.category}>
                    <Text style={styles.categoryTitle}>
                        カテゴリ：金銭支援
                    </Text>
            </TouchableOpacity>
        </Link>            

    )
}

const styles = StyleSheet.create({
    category:{
        backgroundColor: '#ffffff',
        marginTop: 16,
        marginLeft: 20
    },
    categoryTitle:{
        marginVertical: 10,
        fontSize: 18,
        lineHeight: 20
    }
})

export default Category
