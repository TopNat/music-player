import s from './App.module.scss';
import { Routes, Route } from 'react-router-dom';
import Antry from '../../pages/entry';
import MainP from '../main';
import Exit from '../exit';
import Registration from '../registration/Registration';
import ProtectedRoute from '../../components/ProtectedRoute';
import { ThemeContext, themes } from '../../ThemeContext';
import { useState } from 'react';
import Test from '../../components/test';

function App() {
    const [currentTheme, setCurrentTheme] = useState(themes.light);

    const toggleTheme = () => {
        if (currentTheme === themes.dark) {
            setCurrentTheme(themes.light);
            return;
        }
        setCurrentTheme(themes.dark);
    };

    return (
        <div className={s.wrapper}>
            <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
                <Routes>
                    <Route path="/entry" element={<Antry />} />
                    <Route path="/reg" element={<Registration />} />
                    <Route path="/test" element={<Test />} />
                    <Route
                        path="/exit"
                        element={
                            <ProtectedRoute>
                                <Exit />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/"
                        element={
                            <ProtectedRoute>
                                {' '}
                                <MainP />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/playlist/:id"
                        element={
                            <ProtectedRoute>
                                {' '}
                                <MainP />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/favorite"
                        element={
                            <ProtectedRoute>
                                {' '}
                                <MainP />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </ThemeContext.Provider>
        </div>
    );
}

export default App;
