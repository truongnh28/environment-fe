import { useAppDispatch, useAppSelector } from 'app/hooks';

export const useLogin = () => {
    const counter = useAppSelector((state) => state.counter);
    const dispatch = useAppDispatch();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return [handleSubmit];
};
