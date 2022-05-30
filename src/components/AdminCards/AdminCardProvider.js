import { createContext, useState } from "react"
export const CardContext2 = createContext(); 

const AdminCardProvider = ({children}) => {
  const [nqna, setnqna] = useState(false);
  const [uqna, setuqna] = useState(false);
  const [nu, setnu] = useState(false);
  const [uu, setuu] = useState(false);
  const [np, setnp] = useState(false);
  const [up, setup] = useState(false);
  const [nc, setnc] = useState(false);
  const [nca, setnca] = useState(false);
  const [arrsolutions, setSolutions] = useState([]);
  const [csol, setcsol] = useState(false)
  const [na,setna] = useState(false);
  const [preg_id, setPreg_id] = useState([])

  return (
    <CardContext2.Provider
      value={[
        nqna,
        setnqna,
        uqna,
        setuqna,
        nu,
        setnu,
        uu,
        setuu,
        np,
        setnp,
        up,
        setup,
        nc,
        setnc,
        nca,
        setnca,
        arrsolutions,
        setSolutions,
        csol,
        setcsol,
        na,
        setna,
        preg_id,
        setPreg_id,
      ]}>
      {children}
    </CardContext2.Provider>
  )
}

export default AdminCardProvider