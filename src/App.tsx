import React from 'react'
import RecetasProvider from './context/RecetasProvider'
import Wrapper from './components/Wrapper/Wrapper'

const App: React.FC = () => {

  return (
    <RecetasProvider>
      <Wrapper></Wrapper>
    </RecetasProvider>
  )
}

export default App