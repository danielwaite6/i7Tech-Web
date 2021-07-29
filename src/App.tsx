import { useCallback, useEffect, useState } from "react";
import { api } from "./services/api";

interface driversProps {
  name: string; 
  email: string; 
  password: string;
};
type driversPropsTypeList = driversProps[];



export function App() {

  const [token, setToken] = useState('');
  const [drivers, setDrivers] = useState<driversPropsTypeList>([]);
  

  // POST - /user/login
  async function handleLogin() {
    try {
      const manager = await api.post('/user/login', {
        email: 'manager@email.com',
        password: 'manager'
      });
      setToken(manager.data.token);
      console.log('Logou', manager.data.token);
      
    } catch (error) {
      console.log(error);
    };
  };    
  useEffect(()=>{
    handleLogin()
  },[]);

  // eslint-disable-next-line
  const data = {
    name: 'daniel',
    email: 'daniel@gmail.com',
    password: '123456'
  };

  //POST - /driver
  async function handleCreateDriver() {
    try {
      const driver = await api.post('/driver', data, {headers: { Authorization: "Bearer " + token }});
      console.log('Criou motorista', driver);
      

      /**let insere: driversProps = {
        name: driver.data.name,
        email: driver.data.email;
        password: driver.data.password;
      } */

      //setDrivers(insere);
      
    } catch (error) {
      console.log(error);
    };
  };


  const runThisUseCallback = useCallback(handleGetDrivers,[token])

  async function handleGetDrivers() {
    try {      
      const response = await api.get<driversPropsTypeList>('/driver', {headers: { Authorization: "Bearer " + token }})
      
      const datax = response.data
      console.log(datax);
      
      setDrivers(datax);
    } catch (error) {
      
    }
  };
 
   
   

  return (
    <div style={{marginTop: 50}}>
      <button onClick={handleCreateDriver}>Criar motorista</button>
      <button onClick={() => runThisUseCallback()} >Listar motoristas</button>


      {
        drivers.map((item) => {
          return (
            <>
              <p></p>
              <span>{item.name}</span><p></p>
              <span>{item.email}</span><p></p>
              <span>{item.password}</span>
            </>
          )
        })
      }

      
    </div>
  );
}
 
 