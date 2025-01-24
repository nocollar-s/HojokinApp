import { View, Text, StyleSheet } from 'react-native'

const Index =():JSX.Element => {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <View style={styles.headerInner}>
                    <Text style={styles.headerTitle}>補助金サポート</Text>
                    <Text style={styles.headerHome}>Home</Text>
                </View>
            </View>

            <View style={styles.category}>
                <View>
                    <Text style={styles.categoryTitle}>金銭支援</Text>
                </View>
                <View>
                    <Text style={styles.categoryTitle}>光熱費支援</Text>
                </View>
                <View>
                    <Text style={styles.categoryTitle}>就労支援</Text>
                </View>
                
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        //画面いっぱいまで利用
        flex: 1,
        backgroundColor: '#ffffff'
    },
    header:{
        backgroundColor: 'blue',
        height: 104,
        justifyContent: 'flex-end'
    },
    headerInner:{
        alignItems: 'center'
    },
    headerTitle:{
        marginBottom: 8,
        fontSize: 20,
        lineheight: 32,
        color: '#ffffff'
    },
    headerHome:{
        position:'absolute',
        right: 16,
        bottom: 10,
        color: '#ffffff'
    },
    category:{
        backgroundColor: '#ffffff',
        //flexDirection: 'row',
        //justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 19
    },
    categoryTitle:{
        fontSize: 20,
        lineHeight: 38,
    }
})

export default Index
