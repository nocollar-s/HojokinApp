import { View, Text, StyleSheet, 
    TouchableOpacity 
 } from 'react-native'
import{ AntDesign } from '@expo/vector-icons'

interface Props{
    inPress: () => void
}

const Header = ( ): JSX.Element => {
    return (
        <View style={styles.header}>
            <View style={styles.headerInner}>
                <Text style={styles.headerTitle}>補助金サポート</Text>
                <View style={styles.headerRight} >
                    <TouchableOpacity>
                    <AntDesign name='home' size='26'/>
                    </TouchableOpacity>
                </View>                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#d2b48c',
        height: 98,
        justifyContent: 'flex-end'
    },
    headerInner:{
        alignItems: 'center'
    },
    headerTitle:{
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 28
        },
    headerRight:{
        marginRight: 14,
        position:'absolute',
        right: 16,
        bottom: 10
    }   
})

export default Header
