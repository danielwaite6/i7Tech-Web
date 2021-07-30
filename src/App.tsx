import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from './store'
import { LoginManager } from "./pages/screens/LoginManager";
import { ManageDrivers } from "./pages/screens/ManageDrivers";

export function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
          <Route path="/" exact component={LoginManager} />
          <Route path="/manage-drivers" component={ManageDrivers} />
          {/**<Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
          <Route path="/admin/rooms/:id" component={AdminRoom} /> */}
        </Switch>
      </Provider>
    </BrowserRouter>

  )
}