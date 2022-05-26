import { createContext, useState } from "react"
export const CardContext = createContext(); 

const CardsProvider = ({children}) => {
  const [problem, setProblem] = useState(false);
  const [client, setClient] = useState(false);

  return (
    <CardContext.Provider
      value={[
        problem,
        setProblem,
        client,
        setClient
      ]}>
      {children}
    </CardContext.Provider>
  )
}

export default CardsProvider