import { View, Text, StyleSheet } from 'react-native'

const Header = (): JSX.Element => {
    return (
        <View style={styles.header}>
            <View style={styles.headerInner}>
                <Text style={styles.headerTitle}>補助金サポート</Text>
                <Text style={styles.headerHome}>Home</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
        lineHeight: 32,
        color: '#ffffff'
    },
    headerHome:{
        position:'absolute',
        right: 16,
        bottom: 10,
        color: '#ffffff'
    }   
})

export default Header
