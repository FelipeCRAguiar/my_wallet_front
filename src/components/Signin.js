import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function Signin(){
    const [formData, setFormData] = useState({name: '', email: '', password: ''})
    const [passwordConfirmation, setPasswordConfirmation] = useState({password: ''})
    const [isDisabled, setIsDisabled] = useState(false)
    const navigate = useNavigate()

    function handleData(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    function handleConfirmation(e){
        setPasswordConfirmation({password: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        setIsDisabled(true)
        if (formData.password !== passwordConfirmation.password) {
            setIsDisabled(false)
            return alert('A senha tem que ser igual nos dois campos')
        }
        const promise = axios.post('http://localhost:5000/mywallet/sign-up', formData)
        promise.then(() => {
            setIsDisabled(false)
            navigate("/")
        })
        promise.catch(() => {
            setIsDisabled(false)
            return alert("Opa! Aglo deu errado, por favor tente novamente.")
        })
    }

    return (
        <Container>
            <Logo>MyWallet</Logo>
            <Form onSubmit={handleSubmit}>
                <Input 
                    type="text"
                    placeholder="Nome"
                    name="name"
                    onChange={handleData}
                    value={formData.name}
                    disabled={isDisabled}
                    required
                />
                <Input 
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    onChange={handleData}
                    value={formData.email}
                    disabled={isDisabled}
                    required
                />
                <Input 
                    type="password"
                    placeholder="Senha"
                    name="password"
                    onChange={handleData}
                    value={formData.password}
                    disabled={isDisabled}
                    required
                />
                <Input 
                    type="password"
                    placeholder="Confirme a senha"
                    name="password confirmation"
                    onChange={handleConfirmation}
                    value={passwordConfirmation.password}
                    disabled={isDisabled}
                    required
                />
                <Button type="submit" disabled={isDisabled}>Cadastrar</Button>
            </Form>
            <StyledLink to="/">Já tem uma conta? Entre agora!</StyledLink>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Logo = styled.p`
    font-family: Saira Stencil One;
    font-size: 32px;
    line-height: 50px;
    color: #FFFFFF;
    margin-bottom: 24px;
    margin-top: 95px;
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

const StyledLink = styled(Link)`
    font-family: Raleway;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    color: #FFFFFF;
`