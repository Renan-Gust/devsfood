import { BrowserRouter, Route, Routes } from "react-router-dom"
import ReactTooltip from "react-tooltip"

import { Cart } from "./components/Cart"
import { MenuItem } from "./components/MenuItem"
import { PrivateRoute } from "./components/PrivateRoute"
import { Auth } from "./pages/Auth"
import { HomeScreen } from './pages/HomeScreen'

import { ThemeProvider } from 'styled-components'
import { Container, Menu, PageBody } from "./styles/AppStyled"
import { theme } from './styles/colors'
import { GlobalStyle } from './styles/global'


import order from '/assets/order.png'
import profile from '/assets/profile.png'
import store from '/assets/store.png'

function App(){
    return(
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <BrowserRouter>                
                <Container>
                    <Menu>
                        <MenuItem icon={store} link="/" title="Loja" />
                        <MenuItem icon={order} link="/orders" title="Pedidos" />
                        <MenuItem icon={profile} link="/profile" title="Meu perfil" />
                    </Menu>

                    <PageBody>
                        <Routes>
                            <Route path="/" element={<HomeScreen />} />
                            <Route path="/orders" element={<PrivateRoute><HomeScreen /></PrivateRoute>} />
                            <Route path="/profile" element={<PrivateRoute><HomeScreen /></PrivateRoute>} />
                            <Route path="/authentication" element={<Auth />} />
                        </Routes>
                    </PageBody>

                    <Cart />

                    <ReactTooltip id="tip-top" place="top" effect="solid" />
                    <ReactTooltip id="tip-right" place="right" effect="solid" />
                </Container>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App