import { Stack } from 'expo-router'




const Layout = (): JSX.Element => {
    return <Stack screenOptions={{
        headerStyle: {
            backgroundColor:'#d2b48c'
        },
        headerTitleAlign: 'center',
        headerTintColor: '#ffffff',
        headerTitle: '補助金サポート',
        headerTitleStyle:{
            fontSize:18,
        },
        headerBackTitle: 'Back'

    }} />
}

export default Layout