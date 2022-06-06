// create your App component here
import react, {useState, useEffect} from "react";

function App(){
    const [dog, setDog] = useState('')
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(resp => resp.json())
        .then(obj => setDog(obj.message))
    }, [])

    return (<>
        {(dog) ? <img alt='A Random Dog' src={dog}/> : <p>Loading</p>} 
        </>)
}

export default App