import { DefaultRootState, useSelector } from "react-redux";


export function ManageDrivers() {

    const data: DefaultRootState = useSelector((state) => state);

    //console.log('ESTOU EM MANAGED DRIVERS: ', data.data.email);
    //console.log('ESTOU EM MANAGED DRIVERS: ', data.data.name);
    /**Object.values(data).map((item) => {
        return console.log(item.email)
    }); */
    console.log('FUI REDIRECIONADO PARA A TELA: ManageDrivers', data);


    return (
        <h1>
            ESTOU EM MANAGED DRIVERS
            <br />
            <br />
            {data.data.name}
            <br />
            <br />
            {data.data.email}

        </h1>
    )
}