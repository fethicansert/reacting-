import reactLogoBig from '../logos/reactLogo_big.png'

function Main(){
    return (
        <main>
            <h1>Fun facts about React</h1>
            <ul className="reasons-list">
                <li>Was first released in 2013</li>
                <li>Was orginally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterpise apps, including mobile apps</li>
            </ul>
            <img className='react-logo-big' src={ reactLogoBig } alt='React Big Logo'></img>
        </main>
    );
}

export default Main;