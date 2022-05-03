import "../../style/Menu/Menu.css"

const Element = (props) =>{
    return(
        
        <div className="element">
            <input type="checkbox" id="cbox"/> 
            <label for="cbox">{props.element}</label>
        </div>
    )

};
export default Element;