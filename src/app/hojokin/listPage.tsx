import { View, Text, StyleSheet } from 'react-native'
import Header from '../../components/Header'
import List from '../../components/List'

const ListPage =():JSX.Element => {
    return (
        <View style={styles.container}>

            <Header />
            <List />
            <List />
            <List />
                        
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

export default ListPage