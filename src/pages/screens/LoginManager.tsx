import { FormEvent, useState } from "react";
import { useHistory } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { api } from "../../services/api";
//import { useEffect } from "react";



export function LoginManager() {
    const history = useHistory();
    const dispatch = useDispatch();


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //const [token, setToken] = useState('');

    /*useEffect(() => {
        if (token) {
            console.log(`LOGOU COM SUCESSO:${'\n'} Token: ${token} ${'\n\n'}`);
            console.log(email);
        } else {
            return
        }
    }, [token, email])*/

    //const tokenManaged = useCallback(() => token, [token]);
    //console.log('tokenManaged: ', tokenManaged);



    async function handleLogin(event: FormEvent) {
        event.preventDefault();

        try {
            const response = await api.post('/user/login', {
                email,
                password,
            });
            //setToken(response.data.token);

            dispatch({
                type: 'LOGIN_SUCCESS',
                data: {
                    name: response.data.user.name,
                    email: response.data.user.email,
                    token: response.data.token,
                    access: response.data.user.access
                }
            });



            history.push('manage-drivers');

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