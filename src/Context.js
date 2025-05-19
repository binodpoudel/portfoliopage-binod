import { createContext, useReducer, useEffect, useMemo } from "react";

export const ThemeContext = createContext();

const initialState = { 
  darkMode: false,
  systemPreference: false
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case "toggle":
      return { 
        ...state,
        darkMode: !state.darkMode,
        systemPreference: false 
      };
    case "system":
      return {
        ...state,
        darkMode: action.payload,
        systemPreference: true
      };
    default:
      return state;
  }
};

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  // Check system preference
  useEffect(() => {
    if (state.systemPreference) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handler = () => dispatch({ 
        type: "system", 
        payload: mediaQuery.matches 
      });

      // Set initial value
      dispatch({ 
        type: "system", 
        payload: mediaQuery.matches 
      });

      // Listen for changes
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    }
  }, [state.systemPreference]);

  // Persist theme preference to localStorage
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify({
      value: state.darkMode,
      systemPreference: state.systemPreference
    }));
  }, [state.darkMode, state.systemPreference]);

  // Load saved preference on initial render
  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved) {
      const { value, systemPreference } = JSON.parse(saved);
      if (systemPreference) {
        dispatch({ 
          type: "system", 
          payload: window.matchMedia('(prefers-color-scheme: dark)').matches 
        });
      } else {
        dispatch({ 
          type: "toggle", 
          payload: value 
        });
      }
    }
  }, []);

  const value = useMemo(() => ({
    state,
    dispatch,
    toggleTheme: () => dispatch({ type: "toggle" }),
    useSystemTheme: () => dispatch({ type: "system", payload: window.matchMedia('(prefers-color-scheme: dark)').matches })
  }), [state]);

  return (
    <ThemeContext.Provider value={value}>
      <div className={`theme-${state.darkMode ? 'dark' : 'light'}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};