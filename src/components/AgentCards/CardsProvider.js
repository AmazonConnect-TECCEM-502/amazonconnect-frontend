import { createContext, useState } from "react"
export const CardContext = createContext(); 

const CardsProvider = ({children}) => {
  const [qna, setQna] = useState(false);
  const [client, setClient] = useState(false);


  return (
    <CardContext.Provider
      value={[
        qna,
        setQna,
        client,
        setClient
      ]}>
      {children}
    </CardContext.Provider>
  )
}

export default CardsProvider