import { useAppSelector } from './redux';

export const useAuth = () => useAppSelector((state) => state.authorizationStatus);
