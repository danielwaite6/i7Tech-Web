//import { useEffect } from "react";
import { FormEvent, useCallback, useEffect, useState } from "react";
import { DefaultRootState, useSelector } from "react-redux";
import { api } from "../../services/api";
//import { api } from "../../services/api";

interface driversProps {
    _id: string;
    name: string;
    email: string;
    password: string;
};
type driversPropsTypeList = driversProps[];


export function ManageDrivers() {

    const data: DefaultRootState = useSelector((state) => state);


    const [listDrivers, setlistDrivers] = useState<driversPropsTypeList>([]);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    //POST - /driver
    async function handleCreateDriver(event: FormEvent) {


        event.preventDefault();
        try {

            const response_driver = await api.get<driversPropsTypeList>('/driver', { headers: { Authorization: "Bearer " + data.data.token } });

            // metodo some() retorn true/false.
            const existsEmail = response_driver.data.some((item) => item.email === email)
            console.log('existsEmail: ', existsEmail);
            if (existsEmail) {
                alert('Email já existe ou Erro de senha: A Senha precisa ter no mínimo 6 caracteres e máximo de 20');

                return;
            }
            // REGRA DO BACKEND - SENHA TEM QUE ESTAR ENTRE 6 A 20 CARACTERES
            /**if (password.length <= 6 && password.length >= 20) {
                alert('A Senha precisa ter no mínimo 6 caracteres e máximo de 20.');
                return;
            } */

            const driverData = {
                name: name,
                email: email,
                password: password,
            }

            await api.post('/driver', driverData, { headers: { Authorization: "Bearer " + data.data.token } });

        } catch (error) {

        };
    };

    async function handleGetDrivers() {
        try {
            const response = await api.get<driversPropsTypeList>('/driver', { headers: { Authorization: "Bearer " + data.data.token } });
            setlistDrivers(response.data);
        } catch (error) {

        }
    };

    const DoCallBack = useCallback(handleGetDrivers, [data.data.token]);

    useEffect(() => {
        DoCallBack();
    }, [DoCallBack, listDrivers]);

    //console.log('ESTOU EM MANAGED DRIVERS: ', data.data.email);
    //console.log('ESTOU EM MANAGED DRIVERS: ', data.data.name);
    /**Object.values(data).map((item) => {
        return console.log(item.email)
    }); */
    //console.log('FUI REDIRECIONADO PARA A TELA: ManageDrivers', data);


    return (
        <div>
            ESTOU EM MANAGED DRIVERS
            <br />
            <br />

            <form onSubmit={handleCreateDriver}>
                <input
                    type="text"
                    placeholder="Nome"
                    onChange={(event) => setName(event.target.value)}
                    value={name}
                />
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
                <button type="submit">DÊ UM ENTER PARA CRIAR UM MOTORISTA</button>
            </form>
            <br />

            {
                listDrivers.map((item) => (
                    <ul key={item._id}>
                        <li>{item.name}</li>
                        <li>{item.email}</li>
                    </ul>
                ))
            }

        </div>
    )
}