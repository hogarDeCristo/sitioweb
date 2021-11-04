import Index from './index'
import '../styles/globals.css'

function App ({Component, props}) {
    return(
        <Index>
         <Component {...props}/>
        </Index>
    )
}

export default App;