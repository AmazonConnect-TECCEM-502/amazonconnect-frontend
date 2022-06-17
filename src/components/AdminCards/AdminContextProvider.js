/*
  Authors: Andrea Vianey Diaz Alvarez
  Description: Context that saves the data for the admin configuration tab. 
*/
import { createContext, useState } from "react"
export const AdminContext = createContext(); 

const AdminContextProvider = ({children}) => {
  const [arrsolutions, setSolutions] = useState([]); //Array with all the solutions of one problem id
  const [preg_id, setPreg_id] = useState([]); // Problem id 
  const [categories, setCategories] = useState([]); //Array with all the problem categories
  const [proposals, setProposals] = useState([]); // Array with all the proposals
  const [arrpreguntas, setPreguntas] = useState([]);//Array with all the problems
  const [ProbDesc, setProbDesc]=useState([]); //Problem Description 
  const [category, setCategory]=useState([]); 
  const [categoryid, setCategoryid] = useState([]);

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
        setPreguntas,
        ProbDesc,
        setProbDesc,
        category,
        setCategory,
        categoryid,
        setCategoryid
      ]}>
      {children}
    </AdminContext.Provider>
  )
}

export default AdminContextProvider