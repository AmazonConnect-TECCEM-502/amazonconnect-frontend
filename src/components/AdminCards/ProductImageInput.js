const ProductImageInput = (props) => {

  if (props.category >= 1 && props.category <= 3)
    return (<p>This product category does not allow unique product images. Proceed to submit.</p>)
  else if (props.category >= 4 && props.category <= props.maxCategoryId) {
    return (
    <div>
      <p>Image: </p>
      <input className="user-ID" type="file" name="Answer" onChange={(event) => props.buttonAction(event.target.files[0])}/>
    </div>
    )
  }
  else return (<p></p>)
};

export default ProductImageInput;