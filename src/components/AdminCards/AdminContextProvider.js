/*
  Authors: Andrea Vianey Diaz Alvarez
  Description: Context that saves the data for the admin configuration tab. 
*/
import { createContext, useState } from "react"
export const AdminContext = createContext(); 

const AdminContextProvider = ({children}) => {
  const [arrsolutions, setSolutions] = useState([]); //Array with all the solutions of one problem id
  const [preg_id, setPreg_id] = useState([]); // Problem id 
  const [categories, setCategories] = useState([]);
  const [proposals, setProposals] = useState([]);
  const [arrpreguntas, setPreguntas] = useState([]);

  return (
    <AdminContext.Provider
      value={[
        arrsolutions,
        setSolutions,
        preg_id,
        setPreg_id,
        categories,
        setCategories,
        proposals,
        setProposals,
        arrpreguntas,
        setPreguntas
      ]}>
      {children}
    </AdminContext.Provider>
  )
}

export default AdminContextProvider