
import { ThemeProvider } from '@mui/material'
import './App.css'
import theme from './styles/theme'
import MainRoutes from './routes'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <MainRoutes />
    </ThemeProvider>
  )
}

export default App
