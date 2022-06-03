const ProductImage = (props) => {
  const bucket = "https://sales-product-bucket.s3.amazonaws.com";
  const category_key = String(props.product_sku)[0];

  if (category_key === '1')
    return (
      <img src = {`${bucket}/images/logoInfinitum.jpg`} alt = "Product" />
    )
  else if (category_key === '2')
    return (
      <img src = {`${bucket}/images/logoDish.jpg`} alt = "Product" />
    )
  else if (category_key === '3')
    return (
      <img src = {`${bucket}/images/logoTelcel.jpg`} alt = "Product" />
    )
  else
    return(
      <img src = {`${bucket}/images/${props.product_sku}.jpg`} alt = "Product" />
    )
};

export default ProductImage;
