import { createContext, useContext, useState } from 'react';
import './UseContext.css';
const ThemeContext = createContext(null);
const CurrentUserContext = createContext(null);

export default function UseContext() {
    const [theme, setTheme] = useState('light');
    const [currentUser, setCurrentUser] = useState(null);
    return (
        <div className='useContext bg-lime-300 m-4 p-4 rounded-lg text-black'>
            <ThemeContext.Provider value={theme}>
                <CurrentUserContext.Provider
                    value={{
                        currentUser,
                        setCurrentUser
                    }}
                >
                    <WelcomePanel />
                    <label>
                        <input
                            type="checkbox"
                            checked={theme === 'dark'}
                            onChange={(e) => {
                                setTheme(e.target.checked ? 'dark' : 'light')
                            }}
                        />
                        Use dark mode
                    </label>
                </CurrentUserContext.Provider>
            </ThemeContext.Provider>
        </div>
    )
}

function WelcomePanel({ children }) {
    const { currentUser } = useContext(CurrentUserContext);
    return (
        <Panel title="Welcome">
            {currentUser !== null ?
                <Greeting /> :
                <LoginForm />
            }
        </Panel>
    );
}

function Greeting() {
    const { currentUser } = useContext(CurrentUserContext);
    return (
        <p>You logged in as {currentUser.name}.</p>
    )
}

function LoginForm() {
    const { setCurrentUser } = useContext(CurrentUserContext);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const canLogin = firstName.trim() !== '' && lastName.trim() !== '';
    return (
        <>
            <label>
                First name{': '}
                <input
                    placeholder='First Name'
                    required
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
            </label>
            <label>
                Last name{': '}
                <input
                    placeholder='Last Name'
                    required
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
            </label>
            <Button
                disabled={!canLogin}
                onClick={() => {
                    setCurrentUser({
                        name: firstName + ' ' + lastName
                    });
                }}
            >
                Log in
            </Button>
            {!canLogin && <i>Fill in both fields.</i>}
        </>
    );
}

function Panel({ title, children }) {
    const theme = useContext(ThemeContext);
    const className = 'panel-' + theme;
    return (
        <section className={className}>
            <h1>{title}</h1>
            {children}
        </section>
    )
}

function Button({ children, disabled, onClick }) {
    const theme = useContext(ThemeContext);
    const className = 'button-' + theme;
    return (
        <button
            className={className}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
}