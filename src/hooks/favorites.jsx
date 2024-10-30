import { useState, useEffect } from 'react'
import { api } from '../services/api'

export function useFavorites() {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    async function loadFavorites() {
      try {
        const response = await api.get('/favorites')
        setFavorites(response.data);
      } catch (error) {
        console.error("Erro ao carregar favoritos", error)
      }
    }

    loadFavorites()
  }, [])

  async function addFavorite(dishId) {
    try {
      await api.post('/favorites', { dishId })
      setFavorites(prev => [...prev, dishId])
    } catch (error) {
      console.error("Erro ao favoritar o prato", error)
    }
  }

  async function removeFavorite(dishId) {
    try {
      await api.delete(`/favorites/${dishId}`)
      setFavorites(prev => prev.filter(id => id !== dishId))
    } catch (error) {
      console.error("Erro ao remover favorito", error)
    }
  }

  function isFavorite(dishId) {
    return favorites.includes(dishId)
  }

  return { favorites, addFavorite, removeFavorite, isFavorite }
}
