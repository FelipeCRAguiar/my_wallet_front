import Login from "./Login";
import Signin from "./Signin";
import Wallet from "./Wallet";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />}/>
                <Route path='/signin' element={<Signin />}/>
                <Route path='/wallet' element={<Wallet />}/>
                <Route path='/deposit' element={<Deposit />}/>
                <Route path='/withdraw' element={<Withdraw />}/>
            </Routes>
        </BrowserRouter>
    )
}