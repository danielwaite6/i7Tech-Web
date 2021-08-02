//import { useEffect } from "react";
import { FormEvent, useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { DataState } from '../../../LoginReducer'

import { api } from "../../../services/api";
import { Lista, ItemList, Button, Input, Title } from "./styles";

interface driversProps {
    _id: string;
    name: string;
    email: string;
    password: string;
};
type driversPropsTypeList = driversProps[];


export function ManageDrivers() {
    const data = useSelector<DataState, DataState>((state) => state);

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
                alert('Email já existe');
                return;
            };

            if (password.length < 6) {
                alert('A Senha precisa ter pelo menos 6 caracteres ');//e máximo de 20
                return;
            }

            if (password.length > 20) {
                alert('A Senha não pode ter mais do que 20 caracteres');//e máximo de 20
                return;
            }
            // REGRA DO BACKEND - SENHA TEM QUE ESTAR ENTRE 6 A 20 CARACTERES




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


    /**Object.values(data).map((item) => {
        return console.log(item.email)
    }); */


    return (
        <div>
            <Title>TELA DE GERENCIAMENTO DE MOTORISTAS</Title>
            <br />
            <br />

            <form onSubmit={handleCreateDriver}>
                <Input
                    type="text"
                    placeholder="Nome"
                    onChange={(event) => setName(event.target.value)}
                    value={name}
                />
                <Input
                    type="text"
                    placeholder="Email"
                    onChange={(event) => setEmail(event.target.value)}
                    value={email}
                />
                <Input
                    type="text"
                    placeholder="Password"
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}

                /><br />
                <Button type="submit">DÊ UM ENTER PARA CRIAR UM MOTORISTA</Button>
            </form>
            <br />


            {
                listDrivers.map((item) => (
                    <Lista key={item._id}>
                        <ItemList> {`Nome: ${item.name}`}</ItemList><br />
                        <ItemList> {`Email: ${item.email}`}</ItemList>
                        <p />
                    </Lista>
                ))
            }


        </div>
    )
}