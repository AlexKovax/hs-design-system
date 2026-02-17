import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Tokens from './pages/Tokens'
import Components from './pages/Components'
import Patterns from './pages/Patterns'
import Themes from './pages/Themes'
import Usage from './pages/Usage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tokens" element={<Tokens />} />
        <Route path="components" element={<Components />} />
        <Route path="patterns" element={<Patterns />} />
        <Route path="themes" element={<Themes />} />
        <Route path="usage" element={<Usage />} />
      </Route>
    </Routes>
  )
}
