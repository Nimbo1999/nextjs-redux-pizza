import { createContext, ReactNode, useCallback, useState, useContext } from 'react';
import { toast } from 'react-toastify';

import LocalStorageService from '../services/LocalStorageService';

export interface PizzaFormStep {
    title?: string;
    values?: string[];
    selectedValue: string;
}

export type CurrentStep = 'edge' | 'pizza' | 'size';

interface PizzaSteps {
    edge: PizzaFormStep;
    pizza: PizzaFormStep;
    size: PizzaFormStep;
}

interface PizzaFormContextData {
    currentStep: CurrentStep;
    steps: PizzaSteps;
    changeStep: (step: string) => void;
    getPizzaStepData: () => Promise<void>;
    getEdgeStepData: () => Promise<void>;
    getSizeStepData: () => Promise<void>;
    onChangeValue: (currentStep: CurrentStep, value: string) => void;
    confirmPizzaOrder: (points: number, callback?: () => void) => void;
}

interface PizzaFormContextProps {
    children: ReactNode
}

interface ResponsePayload {
    title: string;
    options: string[];
}

const PizzaContext = createContext({} as PizzaFormContextData);

export function PizzaContextProvider({ children }: PizzaFormContextProps) {
    const [ currentStep, setCurrentStep ] = useState<CurrentStep>('pizza');
    const [ steps, setSteps ] = useState<PizzaSteps>({
        pizza: { selectedValue: '' },
        edge: { selectedValue: '' },
        size: { selectedValue: '' },
    });
    const localStorageService = new LocalStorageService();

    async function httpRequest(endPoint: string) {
        const request = await fetch(`http://localhost:3000/api/pizza${endPoint}`, { method: 'GET' });
        const data = await request.json() as ResponsePayload;
        return data;
    }

    const getPizzaStepData = async () => {
        const data = await httpRequest('/pizzas');

        setSteps({
            ...steps,
            pizza: {
                ...steps.pizza,
                title: data.title,
                values: data.options
            }
        });
        return;
    };

    const getSizeStepData = async () => {
        const data = await httpRequest('/sizes');

        setSteps({
            ...steps,
            size: {
                ...steps.size,
                title: data.title,
                values: data.options
            }
        });

        return;
    }

    const getEdgeStepData = async () => {
        const data = await httpRequest('/edges');

        setSteps({
            ...steps,
            edge: {
                ...steps.edge,
                title: data.title,
                values: data.options
            }
        });

        return;
    }

    const confirmPizzaOrder = (points: number, callback?: () => void) => {
        if (typeof window !== 'undefined') {
            toast.success(`Você fez ${points} pontos com essa pizza!`, {
                position: 'top-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                onClose: callback
            });
            localStorageService.addPoints(points);
        }
    }

    const changeStep = useCallback((step: CurrentStep) => {
        setCurrentStep(step);
    }, []);

    const onChangeValue = useCallback((step: CurrentStep, value: string) => {
        setSteps({
            ...steps,
            [step]: {
                ...steps[step],
                selectedValue: value
            }
        });
    }, [steps]);

    return (
        <PizzaContext.Provider
            value={{
                currentStep,
                changeStep,
                getPizzaStepData,
                getSizeStepData,
                getEdgeStepData,
                onChangeValue,
                confirmPizzaOrder,
                steps
            }}
        >
            {children}
        </PizzaContext.Provider>
    );
}

export function usePizzaContext() {
    return useContext(PizzaContext);
}