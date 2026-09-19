import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  useRef,
} from 'react';

interface DrawerContextType {
  isOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  toggleDrawer: () => void;
  registerNavigation: (nav: any) => void;
  navigateFromDrawer: (route: string, params?: any) => void;
}

const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

export const DrawerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<any>(null);

  const openDrawer = useCallback(() => setIsOpen(true), []);
  const closeDrawer = useCallback(() => setIsOpen(false), []);
  const toggleDrawer = useCallback(() => setIsOpen(prev => !prev), []);

  const registerNavigation = useCallback((nav: any) => {
    navRef.current = nav;
  }, []);

  const navigateFromDrawer = useCallback((route: string, params?: any) => {
    setIsOpen(false);
    if (navRef.current) {
      if (route === 'P3MainTabs' && params?.screen) {
        navRef.current.navigate('P3MainTabs', { screen: params.screen });
      } else {
        navRef.current.navigate(route, params);
      }
    }
  }, []);

  const value = useMemo(
    () => ({
      isOpen,
      openDrawer,
      closeDrawer,
      toggleDrawer,
      registerNavigation,
      navigateFromDrawer,
    }),
    [
      isOpen,
      openDrawer,
      closeDrawer,
      toggleDrawer,
      registerNavigation,
      navigateFromDrawer,
    ],
  );

  return (
    <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>
  );
};

export const useDrawer = (): DrawerContextType => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error('useDrawer must be used within a DrawerProvider');
  }
  return context;
};

export default DrawerContext;
