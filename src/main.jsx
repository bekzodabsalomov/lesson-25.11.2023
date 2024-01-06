import './index.css'
import App from './App'
import ReactDOM from 'react-dom/client'
import { GlobalContextProvider } from './context/GlobalContext'

ReactDOM.createRoot(document.getElementById('root')).render(
    <GlobalContextProvider>
        <App />
    </GlobalContextProvider>
)