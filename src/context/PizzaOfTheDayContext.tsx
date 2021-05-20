import { createContext, ReactNode, useState, useContext } from 'react';
import { toast } from 'react-toastify';

import PizzaOfTheDay from '../model/PizzaOfTheDay';
import LocalStorageService from '../services/LocalStorageService';

interface PizzaFormContextData {
    pizzaOfTheDay?: PizzaOfTheDay;
    getPizzaOfTheDay: () => Promise<void>;
    getPizzaPoints: () => void;
    points: number;
}

interface PizzaFormContextProps {
    children: ReactNode;
}

const localStorageService = new LocalStorageService();
const PizzaOfTheDayContext = createContext({} as PizzaFormContextData);

export function PizzaOfTheDayContextProvider({ children }: PizzaFormContextProps) {
    const [ pizzaOfTheDay, setPizzaOfTheDay ] = useState<PizzaOfTheDay>();
    const [ points, setPoints ] = useState(localStorageService.getPoints());

    const getPizzaOfTheDay = async () => {
        const request = await fetch('http://localhost:3000/api/pizza-of-the-day', { method: 'GET' });
        const data = await request.json() as PizzaOfTheDay;

        setPizzaOfTheDay(data);
        return;
    }

    const getPizzaPoints = () => {
        localStorageService.addPoints(pizzaOfTheDay.points);
        setPoints(points + pizzaOfTheDay.points);

        toast.success(`Você acaba de resgatar os ${pizzaOfTheDay.points} da pizza do dia!`, {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    return (
        <PizzaOfTheDayContext.Provider
            value={{
                pizzaOfTheDay,
                getPizzaOfTheDay,
                getPizzaPoints,
                points
            }}
        >
            {children}
        </PizzaOfTheDayContext.Provider>
    );
}

export function usePizzaOfTheDayContext() {
    return useContext(PizzaOfTheDayContext);
}