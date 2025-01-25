import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios'

const ArticleList = () => {
  const [articles, setArticles] = useState(null) // 初期値をnullに変更
  const [error, setError] = useState(null)
  const apiUrl = 'https://c7jz4v0wv8.microcms.io/api/v1/articles' // APIエンドポイント
  const apiKey = 'EwjYNnz3FbpPQVnmynXcCbNyyRPLMK1CKgOK' // APIキー

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            'X-MICROCMS-API-KEY': apiKey
          }
        })
        setArticles(response.data.contents)
      } catch (e) {
        const err = e as Error
        console.error("Error fetching articles:", err)
        setError ( "記事取得に失敗" )
      }
    }

    fetchArticles()
  }, [])

  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  )

  if (error) {
    return (
        <View style={styles.centered}>
            <Text style={styles.errorText}>{error}</Text>
        </View>
    )
  }

  if (articles === null) {
    return (
        <View style={styles.centered}>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text>Loading...</Text>
        </View>
    )
  }

    if (articles.length === 0) {
        return (
            <View style={styles.centered}>
                <Text>記事がありません</Text>
            </View>
        )
    }

  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        renderItem={renderItem}
        keyExtractor={(item) => item.id} // keyExtractorは必須
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  listItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  title: {
      fontSize: 16
  },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    errorText: {
        color: 'red'
    }
})

export default ArticleList
