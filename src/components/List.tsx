import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Link } from 'expo-router'
import HomeButton from '../components/HomeButton'
import { useNavigation } from 'expo-router'
import { useEffect } from 'react'

const List = (): JSX.Element => {
    const navigation = useNavigation()
    useEffect(() => {
        navigation.setOptions({
            headerRight:() =>{ return <HomeButton />}
        })
    }, [])


    return(
        <Link href='/hojokin/contentPage' asChild>
            <TouchableOpacity style={styles.list}>
                    <Text style={styles.listTitle}>具体的なタイトル</Text>
            </TouchableOpacity>                        
        </Link>
    )
}

const styles = StyleSheet.create({
    list:{
        backgroundColor: '#ffffff',
        marginTop: 16,
        marginLeft: 20
    },
    listTitle:{
        marginVertical:10,
        fontSize: 18,
        lineHeight: 20
    }
})

export default List