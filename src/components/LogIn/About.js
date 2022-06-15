import { Fragment } from "react";

const About = () => {

  const professors = [
    {
      name: "Alvaro Hernández Quijano",
      area: "Advanced project management",
      image: "/AlvaroH.jpg"
    },
    {
      name: "Victor Adrián Soza Hernández",
      area: "BackEnd",
      image: "/VictorA.jpeg"
    },
    {
      name: "Roberto Martínez Román",
      area: "FrontEnd",
      image: "/RobertoM.jpg"
    },
    {
      name: "Julio Guillermo Arriaga Blumenkron",
      area: "DataBases",
      image: "/JulioG.jpg"
    },
    {
      name: "Humberto Cárdenas Anaya",
      area: "Software Quality",
      image: "/HumbertoC.jpeg"
    },
    {
      name: "Ariel Ortíz Ramírez",
      area: "Software Design and Architecture",
      image: "/ArielO.jpeg"
    },
  ]

  const problemSugestionArea = [
    {
      name: "Diego Armando Ulibarri Hernández",
      area: "FrontEnd, BackEnd",
      image: "/DiegoU.jpeg"
    },
    {
      name: "José Benjamín Ruiz García",
      area: "FrontEnd, BackEnd",
      image: "/BenjaR.jpeg"
    },
    {
      name: "María Fernanda Ramírez Barragán",
      area: "FrontEnd",
      image: "/FerR.jpeg"
    },
    {
      name: "Andrea Vianey Díaz Álvarez",
      area: "FrontEnd, BackEnd",
      image: "/AndreaV.jpeg"
    },
  ]

  const recordingsArea = [
    {
      name: "Emilio Ríos Ochoa",
      area: "Frontend, BackEnd",
      image: "/Rivers.jpeg"
    },
    {
      name: "José Benjamín Ruiz García",
      area: "FrontEnd, BackEnd",
      image: "/BenjaR.jpeg"
    },
    {
      name: "Ariel Álvarez Cortés",
      area: "FrontEnd",
      image: "/ArielA.jpeg"
    },
    {
      name: "Eduardo Aguilar Chías",
      area: "BackEnd",
      image: "/Eduardo.jpeg"
    },
    {
      name: "Roberto Valdez Jasso",
      area: "BackEnd",
      image: "/RobertV.jpeg"
    },
    {
      name: "Melissa Garduño Ruiz",
      area: "BackEnd",
      image: "/TelmexLogo.jpg"
    },
  ]

  const clientAuthenticationArea = [
    {
      name: "Luis Ignacio Ferro Salinas",
      area: "BackEnd",
      image: "/LuisI.jpeg"
    },
    {
      name: "Joan Daniel Guerrero García",
      area: "FrontEnd",
      image: "/JoanD.jpeg"
    },
    {
      name: "Eric Alexis Castañeda Bravo",
      area: "FrontEnd",
      image: "/EricA.jpeg"
    },
    {
      name: "Rubén Sánchez Mayén",
      area: "BackEnd",
      image: "/RubenA.jpeg"
    },
  ]

  const reportsArea = [
    {
      name: "Alejandro Enríquez Coronado",
      area: "BackEnd",
      image: "/Alejandro.jpeg"
    },
    {
      name: "Isaac Andrés Cortés Martínez",
      area: "BackEnd",
      image: "/Isaac.jpeg"
    },
    {
      name: "Octavio Andrick Sánchez Perusquia",
      area: "BackEnd",
      image: "/Andrick.jpeg"
    },
  ]

  const salesArea = [
    {
      name: "Omar Rodrigo Sorchini Puente",
      area: "BackEnd",
      image: "/OmarR.jpeg"
    },
    {
      name: "Javier Emilio Moreno Márquez",
      area: "BackEnd",
      image: "/OmarR.jpeg"
    },
    {
      name: "Renata Montserrat De Luna Flores",
      area: "BackEnd",
      image: "/RenataM.jpeg"
    },
    {
      name: "Roberto Valdez Jasso",
      area: "BackEnd",
      image: "/RobertV.jpeg"
    }
  ]

  const autheticationArea = [
    {
      name: "José Benjamín Ruiz García",
      area: "FrontEnd, BackEnd",
      image: "/BenjaR.jpeg"
    },
    {
      name: "Diego Armando Ulibarri Hernández",
      area: "FrontEnd, BackEnd",
      image: "/DiegoU.jpeg"
    },
  ]

  return (
    <Fragment>
      <h1 className="about-title">Professors</h1>
      <div className="container-about">
        {professors.map((professor, index) => (
          <div className="card" key={index}>
            <img src={require( "../../images" + professor.image )} alt="No image" />
            <p> <strong>{professor.name}</strong></p>
            <p><i>{professor.area}</i></p>
          </div>
        ))}
      </div>

      <h1 className="about-title">Recordings Team </h1>
      <div className="container-about">
        {recordingsArea.map((user, index) => (
          <div className="card" key={index}>
            <img src={require( "../../images" + user.image )} alt="No image" />
            <p> <strong>{user.name}</strong></p>
            <p><i>{user.area}</i></p>
          </div>
        ))}
      </div>

      <h1 className="about-title">Client Authentication</h1>
      <div className="container-about">
        {clientAuthenticationArea.map((user, index) => (
          <div className="card" key={index}>
            <img src={require( "../../images" + user.image )} alt="No image" />
            <p> <strong>{user.name}</strong></p>
            <p><i>{user.area}</i></p>
          </div>
        ))}
      </div>

      <h1 className="about-title">Reports</h1>
      <div className="container-about">
        {reportsArea.map((user, index) => (
          <div className="card" key={index}>
            <img src={require( "../../images" + user.image )} alt="No image" />
            <p> <strong>{user.name}</strong></p>
            <p><i>{user.area}</i></p>
          </div>
        ))}
      </div>

      <h1 className="about-title">User Authentication</h1>
      <div className="container-about">
        {autheticationArea.map((user, index) => (
          <div className="card" key={index}>
            <img src={require( "../../images" + user.image )} alt="No image" />
            <p> <strong>{user.name}</strong></p>
            <p><i>{user.area}</i></p>
          </div>
        ))}
      </div>

      <h1 className="about-title">Problems Suggention</h1>
      <div className="container-about">
        {problemSugestionArea.map((problem, index) => (
          <div className="card" key={index}>
            <img src={require( "../../images" + problem.image )} alt="No image" />
            <p> <strong>{problem.name}</strong></p>
            <p><i>{problem.area}</i></p>
          </div>
        ))}
      </div>

      <h1 className="about-title">Cross Selling</h1>
      <div className="container-about">
        {salesArea.map((user, index) => (
          <div className="card" key={index}>
            <img src={require( "../../images" + user.image )} alt="No image" />
            <p> <strong>{user.name}</strong></p>
            <p><i>{user.area}</i></p>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default About;
