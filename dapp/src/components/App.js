import {DrizzleContext} from "@drizzle/react-plugin";

import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";

import '../css/App.css';

import Header from './Header';
import Evaluaciones from "./Evaluaciones";
import Alumnos from "./Alumnos";
import Calificaciones from "./Calificaciones";
import MisCosas from "./MisCosas";

const Navegacion = () => (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/evaluaciones/">Evaluaciones</Link></li>
            <li><Link to="/alumnos/">Alumnos</Link></li>
            <li><Link to="/calificaciones/">Calificaciones</Link></li>
            <li><Link to="/miscosas/">Mis Cosas</Link></li>
        </ul>
    </nav>
);

function App() {
    return (
        <DrizzleContext.Consumer>
            {drizzleContext => {
                const {drizzle, drizzleState, initialized} = drizzleContext;

                if (!initialized) {
                    return (<main><h1>⚙️ Cargando dapp...</h1></main>);
                }

                return (
                    <div className="App">
                        <Router>
                            <Header drizzle={drizzle} drizzleState={drizzleState}/>
                            <Navegacion/>
                            <Route path="/" exact>
                                <p>Bienvenido a la práctica de BCDA. </p>
                            </Route>
                            <Route path="/evaluaciones/">
                                <Evaluaciones drizzle={drizzle} drizzleState={drizzleState}/>
                            </Route>
                            <Route path="/alumnos/">
                                <Alumnos drizzle={drizzle} drizzleState={drizzleState}/>
                            </Route>
                            <Route path="/calificaciones/">
                                <Calificaciones drizzle={drizzle} drizzleState={drizzleState}/>
                            </Route>
                            <Route path="/miscosas/">
                                <MisCosas drizzle={drizzle} drizzleState={drizzleState}/>
                            </Route>
                        </Router>
                    </div>
                );
            }}
        </DrizzleContext.Consumer>
    );
}

export default App;
