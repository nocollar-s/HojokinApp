import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import Category from '../../components/Category'
import { router } from 'expo-router'
import axios from 'axios'




const CategoryPage =():JSX.Element => {
    const [category, setCategory] = useState([])
    const apiUrl = 
    'https://c7jz4v0wv8.microcms.io/api/v1/articles'
    // // カテゴリのエンドポイント
    const apiKey = 'EwjYNnz3FbpPQVnmynXcCbNyyRPLMK1CKgOK'

    useEffect(() => {
        const fetchCategory = async () => {
          try {
            const response = await axios.get(apiUrl, {
              headers: {
                'X-MICROCMS-API-KEY': apiKey
              }
            })
            setCategory(response.data.contents) // contents配列を取得
          } catch (error) {
            console.error('Error fetching category:', error)
          }
        }
        fetchCategory()
      }, [])

    const renderItem = ({ item }) => (
        <Category
          title={item.title} // microCMSのtitleフィールド
          onPress={() => router.push(`/category/${item.id}`)} 
          // idをパラメータとして渡す
        />
      )
    
    return (
        <View style={styles.container}>
            {category.length === 0 ? (
        <Text>Loading...</Text> // ローディング表示
      ) : (
        <FlatList
          data={category}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.listContent}
        />
      )}

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        //画面いっぱいまで利用
        flex: 1,
        backgroundColor: '#ffffff'
    }  ,
    listContent:{

    }
})

export default CategoryPage
