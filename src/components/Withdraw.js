import { useNavigate } from "react-router-dom"
import { useState } from "react/cjs/react.development"
import axios from "axios"
import styled from "styled-components"

export default function Withdraw(){
    const [formData, setFormData] = useState({value: '', description: '', type: 'withdraw'})
    const [isDisabled, setIsDisabled] = useState(false)
    const navigate = useNavigate()

    function handleData(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        setIsDisabled(true)
        const promise = axios.post('http://localhost:5000/mywallet/transaction', formData, {headers: {"Authorization": `Bearer `}})
        promise.then(() => {
            setIsDisabled(false)
            navigate("/wallet")
        })
        promise.catch(() => {
            setIsDisabled(false)
            alert('Opa! aconteceu algum erro, tente novamente.')
        })
    }

    return (
        <Container>
            <Header>Nova saida</Header>
            <Form onSubmit={handleSubmit}>
                <Input 
                    type="text"
                    placeholder="Valor"
                    name="value"
                    onChange={handleData}
                    value={formData.name}
                    disabled={isDisabled}
                    required
                />
                <Input 
                    type="text"
                    placeholder="Descrição"
                    name="description"
                    onChange={handleData}
                    value={formData.name}
                    disabled={isDisabled}
                    required
                />
                <Button type="submit" disabled={isDisabled}>Salvar saida</Button>
            </Form>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Header = styled.p`
    font-family: Raleway;
    font-weight: bold;
    font-size: 26px;
    line-height: 31px;
    color: #FFFFFF;
    margin-top: 25px;
    margin-bottom: 40px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Input = styled.input`
    width: 326px;
    height: 58px;
    background-color: #FFFFFF;
    border-radius: 5px;
    font-family: Raleway;
    font-size: 20px;
    color: #000000;
    margin-bottom: 13px;

    pointer-events: ${(props) => props.disabled ? "none" : "all"};
  
    background-color: ${(props) => props.disabled ? "#F2F2F2" : "#FFFFFF"};
    color: ${(props) => props.disabled ? "#AFAFAF" : "#666666"};
    
`

const Button = styled.button`
    width: 326px;
    height: 46px;
    background: #A328D6;
    border-radius: 5px;
    font-family: Raleway;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    margin-bottom: 36px;

    cursor: pointer;
    pointer-events: ${(props) => props.disabled ? "none" : "all"};
    opacity: ${(props) => props.disabled ? 0.7 : 1};
`