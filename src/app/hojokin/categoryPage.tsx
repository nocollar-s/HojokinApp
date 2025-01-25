import { View, StyleSheet } from 'react-native'
import Category from '../../components/Category'


const CategoryPage =():JSX.Element => {

    return (
        <View style={styles.container}>

            <Category />
            <Category />
            <Category />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        //画面いっぱいまで利用
        flex: 1,
        backgroundColor: '#ffffff'
    }  
})

export default CategoryPage
