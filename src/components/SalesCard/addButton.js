import { useState } from "react";


const AddButton = (props) => {

    const ButtonViews = {
        USED : 1,
        UNUSED : 2
      };

    const addProduct = async (productID, clientID) => {

      const request_options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          product_id: productID,
          client_id: clientID
      })}

      await fetch(`http://localhost:8080/sales/buyProduct`, request_options);
    };

    const [currentButtonView, setCurrentButtonView] = useState(ButtonViews.UNUSED);
    
    if (currentButtonView === ButtonViews.UNUSED)
      return(<button className="product-header-add-button-UNUSED" onClick={() => {
                                                                                    addProduct(props.product_id, props.client_id)
                                                                                    setCurrentButtonView(ButtonViews.USED)
                                                                                }
                                                                            }>Add</button>)
    else if (currentButtonView === ButtonViews.USED)
      return(<button className="product-header-add-button-USED" >Add</button>)

};

export default AddButton;