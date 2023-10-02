import React from 'react'
import RecetasProvider from './context/RecetasProvider'
import Container from './components/Container/Container'

const App: React.FC = () => {

  return (
    <RecetasProvider>
      <Container />
    </RecetasProvider>
  )
}

export default App