import { TouchableOpacity, View, StyleSheet } from "react-native"
import { router, useNavigation } from 'expo-router'
import{ AntDesign } from '@expo/vector-icons'


const HomeButton = (): JSX.Element => {
    const handlePress = (): void => {
            router.push('/hojokin/categoryPage') // categoryPage という名前の画面に遷移
          }
    return(
        <View>
            <TouchableOpacity onPress={handlePress}>
                <AntDesign name='home' size='28' color='#ffffff' />
            </TouchableOpacity>
        </View>

    )
}



export default HomeButton