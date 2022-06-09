/*
  Authors: Javier Emilio Moreno Márquez 

           
  Description: Component that shows the image in the Product Card from the 
  selected bucket and the selected category key
*/

const ProductImage = (props) => {
  const bucket = "https://images-texmex-users-2-0.s3.amazonaws.com";
  const category_key = String(props.product_sku)[0];

  if (category_key === '1')
    return (
      <img src = {`${bucket}/sales/logoInfinitum.jpg`} alt = "Product" />
    )
  else if (category_key === '2')
    return (
      <img src = {`${bucket}/sales/logoDish.jpg`} alt = "Product" />
    )
  else if (category_key === '3')
    return (
      <img src = {`${bucket}/sales/logoTelcel.jpg`} alt = "Product" />
    )
  else
    return(
      <img src = {`${bucket}/sales/${props.product_sku}.jpg`} alt = "Product" />
    )
};

export default ProductImage;
