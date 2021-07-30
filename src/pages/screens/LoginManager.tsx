import { FormEvent, useState } from "react";
import { DefaultRootState, useSelector } from "react-redux";
import { api } from "../../services/api";



export function LoginManager() {

    const data: DefaultRootState = useSelector((state) => state);

    //console.log(Object.entries(data));

    Object.values(data).map((item) => {
        return console.log(item.email)

    })





    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [token, setToken] = useState('');


    async function handleLogin(event: FormEvent) {
        event.preventDefault();
        console.log(email);
        console.log(password);


        try {
            const manager = await api.post('/user/login', {
                email,
                password,
            });
            setToken(manager.data.token);
            console.log('Logou', manager.data.token);

        } catch (error) {

        };
    };

    return (

        <>
            <h1>LoginManager</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Email"
                    onChange={(event) => setEmail(event.target.value)}
                    value={email}
                />
                <input
                    type="text"
                    placeholder="Password"
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}
                />
                <button type="submit">DÊ UM ENTER PARA ENTRAR</button>

            </form>
        </>
    )
}