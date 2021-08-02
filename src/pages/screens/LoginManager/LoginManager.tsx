import { FormEvent, useState } from "react";
import { useHistory } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { addNote } from '../../../LoginReducer/nameActions';
import { api } from "../../../services/api";
import { Title, Container, Button, Form, Input } from "./styles";



export function LoginManager() {
    const history = useHistory();
    const dispatch = useDispatch();


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    async function handleLogin(event: FormEvent) {
        event.preventDefault();

        try {
            const response = await api.post('/user/login', {
                email,
                password,
            });

            history.push('manage-drivers');

            const data = {
                name: response.data.user.name,
                email: response.data.user.email,
                token: response.data.token,
            }

            dispatch(addNote(data))


        } catch (error) {

        };
    };

    return (

        <Container>

            <Form onSubmit={handleLogin}>
                <Title>Login Manager</Title>
                <Input
                    type="text"
                    placeholder="Email"
                    onChange={(event) => setEmail(event.target.value)}
                    value={email}
                /><br />
                <Input
                    type="text"
                    placeholder="Password"
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}
                /><br />
                <Button type="submit">DÊ UM ENTER PARA ENTRAR</Button>

            </Form>
        </Container>
    )
}