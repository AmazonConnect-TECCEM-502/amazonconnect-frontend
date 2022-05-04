import "../../style/Menu/Menu.css"

const Element = (props) =>{
    return(
        
        <div className="element">
            <input type="checkbox" id="cbox"/> 
            <label for="cbox">&nbsp;{props.element}&nbsp;{props.input}</label>
            
        </div>

    )

};
export default Element;