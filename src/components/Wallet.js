import { Link, useLocation } from "react-router-dom"
import { useState } from "react/cjs/react.development"
import styled from "styled-components"
import exit from "../assets/Vector.png"
import plus from "../assets/plussign.svg"
import minus from "../assets/minussign.svg"

export default function Wallet(){
    const [transactions, setTransactions] = useState([])
    const { state } = useLocation()
    const token = state

    return (
        <Container>
            <Header>
                <p>Olá, Fulano</p>
                <Link to="/">
                    <img src={exit}/>
                </Link>
            </Header>
            <Content>
                {transactions.length === 0
                ? `Não há registros de entrada ou saída`
                : transactions.map(() => <p>transação</p>)}
            </Content>
            <Operations>
                <Link to="/deposit">
                    <Operation>
                        <img src={plus} />
                        <p>Nova entrada</p>
                    </Operation>
                </Link>
                <Link to="/withdraw">
                    <Operation>
                        <img src={minus} />
                        <p>Nova saída</p>
                    </Operation>
                </Link>
            </Operations>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    width: 326px;
    font-family: Raleway;
    font-weight: bold;
    font-size: 26px;
    line-height: 31px;
    color: #FFFFFF;
    margin-top: 25px;
    margin-bottom: 22px;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    font-family: Raleway;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #868686;
    width: 326px;
    height: 446px;
    background: #FFFFFF;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    margin-bottom: 13px;
`

const Operations = styled.div`
    display: flex;
    justify-content: space-between;
    width: 326px;
`

const Operation = styled.div`
    width: 155px;
    height: 114px;
    background: #A328D6;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 5px;
    font-family: Raleway;
    font-weight: bold;
    font-size: 17px;
    line-height: 20px;
    color: #FFFFFF;
    img  {
        width: 21.88px;
        margin-top: 10.56px;
        margin-left: 9.56px;
    }
    p {
        margin-left: 10px;
        margin-bottom: 9px;
    }
`