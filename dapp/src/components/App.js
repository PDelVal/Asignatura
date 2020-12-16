import {DrizzleContext} from "@drizzle/react-plugin";


import '../css/App.css';

import Header from './Header';
import Evaluaciones from "./Evaluaciones";
import Alumnos from "./Alumnos";
import Calificaciones from "./Calificaciones";
import MisCosas from "./MisCosas";


function App() {
    return (
        <DrizzleContext.Consumer>
            {drizzleContext => {
                const {drizzle, drizzleState, initialized} = drizzleContext;

                if (!initialized) {
                    return (<main><h1>⚙️ Cargando dapp...</h1></main>);
                }

                return (<div className="App"><Header         drizzle={drizzle}drizzleState={drizzleState}/>
                <Evaluaciones   drizzle={drizzle}drizzleState={drizzleState}/>
                <Alumnos        drizzle={drizzle}drizzleState={drizzleState}/>
                <Calificaciones drizzle={drizzle}drizzleState={drizzleState}/>
                <MisCosas       drizzle={drizzle}drizzleState={drizzleState}/>
                </div>
              );
              }}
              </DrizzleContext.Consumer>
            );
            }
                
export default App;
