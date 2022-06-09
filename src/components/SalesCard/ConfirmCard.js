/*
  Authors: Javier Emilio Moreno Márquez 
           
  Description: Component that confirms with the Agent the acquisition of product selected.
*/

const ConfirmCard = (props) => {
    return (
    <div>
        <p>Are you sure you want to add {props.product.product_name} to the client's products?</p>
        <button className="back-button-product" onClick={props.backAction}>Back</button>{" "}
        <button className="product-header-add-button-UNUSED" onClick={async () => {
                                                                            await props.buttonAction(props.product.product_id, props.client_id)
                                                                            //await props.afterAction(props.category_id)
                                                                            props.afterAction()}
                                                                    }>Add</button>
    </div>
    );
};

export default ConfirmCard;