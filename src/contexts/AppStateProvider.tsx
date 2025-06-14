
import React, { createContext, useContext, useReducer, ReactNode } from 'react';

interface AppState {
  isMenuOpen: boolean;
  scrollPosition: number;
  activeSection: string;
  theme: 'light' | 'dark';
}

type AppAction =
  | { type: 'TOGGLE_MENU' }
  | { type: 'SET_SCROLL_POSITION'; payload: number }
  | { type: 'SET_ACTIVE_SECTION'; payload: string }
  | { type: 'TOGGLE_THEME' };

const initialState: AppState = {
  isMenuOpen: false,
  scrollPosition: 0,
  activeSection: 'home',
  theme: 'light',
};

const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return { ...state, isMenuOpen: !state.isMenuOpen };
    case 'SET_SCROLL_POSITION':
      return { ...state, scrollPosition: action.payload };
    case 'SET_ACTIVE_SECTION':
      return { ...state, activeSection: action.payload };
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    default:
      return state;
  }
};

const AppStateContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | null>(null);

export const AppStateProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within AppStateProvider');
  }
  return context;
};
