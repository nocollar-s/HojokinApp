import { View, StyleSheet } from 'react-native'
import Content from '../../components/Content'

const ContentPage =():JSX.Element => {
    return (
        <View style={styles.container}>

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
