import { ReactNode, createContext, useContext, useState } from "react";

type ContextValueType = {
  currentPath: string;
  navigate: (path: string) => void;
}

const RouterContext = createContext<ContextValueType>(undefined as never);

export const useRouter = () => useContext(RouterContext);

export const RouterProvider = ({children}: {children: ReactNode}) => {
  const [currentPath, setCurrentPath] = useState('/');

  const navigate = (path: string) => {
    setCurrentPath(path)
  }

  const contextValue = {
    currentPath,
    navigate
  }

  return (
    <RouterContext.Provider value={contextValue}>
      {children}
    </RouterContext.Provider>
  )
}