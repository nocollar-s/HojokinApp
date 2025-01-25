import { View, StyleSheet } from 'react-native'
import Header from '../../components/Header'
import Content from '../../components/Content'

const ContentPage =():JSX.Element => {
    return (
        <View style={styles.container}>

            <Header />
            <Content />
            
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

export default ContentPage
