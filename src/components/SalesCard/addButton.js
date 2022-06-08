import { useState } from "react";

const AddButton = (props) => {
  const ButtonViews = {
    USED: 1,
    UNUSED: 2,
  };

  const [currentButtonView, setCurrentButtonView] = useState(
    ButtonViews.UNUSED
  );

  if (currentButtonView === ButtonViews.UNUSED)
    return (
      <button
        className="product-header-add-button-UNUSED"
        onClick={() => {
          buyProduct(props.product_id, props.client_id);
          setCurrentButtonView(ButtonViews.USED);
        }}
      >
        Add
      </button>
    );
  else if (currentButtonView === ButtonViews.USED)
    return <button className="product-header-add-button-USED">Add</button>;
};

export default AddButton;
