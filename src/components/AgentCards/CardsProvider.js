import { createContext, useState } from "react"
export const CardContext = createContext(); 

const CardsProvider = ({children}) => {
  const [qna, setQna] = useState(false);
  const [client, setClient] = useState(false);
  const [clientID, setClientID] = useState("");


  return (
    <CardContext.Provider
      value={[
        qna,
        setQna,
        client,
        setClient,
        clientID,
        setClientID
      ]}>
      {children}
    </CardContext.Provider>
  )
}

export default CardsProvider