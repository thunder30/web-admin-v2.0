import { useSelector } from 'react-redux'
import React, { useContext } from 'react'
import styled from 'styled-components'
import { Row, Col, Image, Spin } from 'antd'
import { Navigate } from 'react-router-dom'

import Login from '../components/auth/Login'
import landing from '../assets/auth/undraw_all_the_data_re_hh4w.svg'
import { AuthContext } from '../contexts/AuthProvider'
import { selectLoading, selectAuthenticated } from '../redux/slices/authSlice'

const WrapperStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const AuthStyled = styled.div`
    height: 100vh;
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`

function Auth({ authRoute }) {
    // const {
    //     authState: { isAuthenticated, isLoading },
    // } = useContext(AuthContext)
    const isAuthenticated = useSelector(selectAuthenticated)
    const isLoading = useSelector(selectLoading)

    if (isLoading)
        return (
            <WrapperStyled>
                {' '}
                <Spin size="large" tip="Loading..." />{' '}
            </WrapperStyled>
        )

    if (isAuthenticated) return <Navigate to="/" replace />

    const Form = {
        Login() {
            return <Login />
        },
    }

    const Component = Form[authRoute]

    //

    return (
        <AuthStyled>
            <Row justify="center" align="middle">
                <Col xs={0} sm={0} md={{ span: 10, offset: 0 }}>
                    <Image
                        preview={false}
                        width="100%"
                        src={landing}
                        alt="landing"
                    />
                </Col>
                <Col xs={24} sm={{ span: 24 }} md={{ span: 8, offset: 2 }}>
                    <Component />
                </Col>
            </Row>
        </AuthStyled>
    )
}

export default Auth
