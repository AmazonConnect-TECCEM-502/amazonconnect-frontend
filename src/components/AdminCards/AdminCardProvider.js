/*
  Authors: Andrea Vianey Diaz Alvarez
  Description: Context that saves the data for the admin configuration cards
  to enable or desable.
*/
import { createContext, useState } from "react"
export const AdminCardContext = createContext(); 

const AdminCardProvider = ({children}) => {
  const [nqna, setnqna] = useState(false); // New Problem and Solution card
  const [uc, setc] = useState(false); // Categories card
  const [nu, setnu] = useState(false); // New user card
  const [np, setnp] = useState(false); // New product card
  const [up, setup] = useState(false); // Update product card
  const [nc, setnc] = useState(false); // New Client card
  const [nca, setnca] = useState(false); // New category card
  const [csol, setcsol] = useState(false) // Solutions card
  const [na,setna] = useState(false); // New solution card
  const [ap, setap] = useState(false); //Update Proposal Card
  const [uq, setuq] = useState(false); //Problems card 

  return (
    <AdminCardContext.Provider
      value={[
        nqna,
        setnqna,
        uc,
        setc,
        nu,
        setnu,
        np,
        setnp,
        up,
        setup,
        nc,
        setnc,
        nca,
        setnca,
        csol,
        setcsol,
        na,
        setna,
        ap,
        setap,
        uq,
        setuq
      ]}>
      {children}
    </AdminCardContext.Provider>
  )
}

export default AdminCardProvider