import React from 'react'
import Header from './components/Header/Header'
import RecipesContainer from './components/RecipesList/RecipesContainer'
import RecetasProvider from './context/RecetasProvider'

const App: React.FC = () => {

  return (
    <RecetasProvider>
      <Header></Header>
      <RecipesContainer></RecipesContainer>
    </RecetasProvider>
  )
}

export default App