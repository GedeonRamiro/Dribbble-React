
/*  Qual a diferenca no export default na arrow 
function e funçao normal no meus componentes 
ou a diferenca é só a sintaxe?
 */

const App = () => {
    return (
        <h1>Olá</h1>
    )
}

export default App

export default function App2 () {
    return (
        <h1>Olá</h1>
    )
}


/* Sempre devemos monstrar os erros do back-end 
como vimos nos fomularios do modulo 3? 
Porque no frontend também monstra o retorno do 
erros no Toast e fica duplicado ou é bom monstra apenas 
alguns erros espefificos como email não disponivel*/

const ProtectedRouter: React.FC<RouteProps> = ({ children, ...rest }) => 

/* Fiquei com duvida na parte do ...rest 
  pode dar outro exemplo?   
*/

