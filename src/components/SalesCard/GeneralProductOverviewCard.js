import { Fragment } from "react";
import ProductImage from './ProductImage';
import ProductName from './ProductName';

const GeneralProductOverviewCard = (props) => {
    return(
        <Fragment>
        <div className="general-product-overview-card">
            <div class="clearfix">
                <ProductImage image = {props.image} />
                <ProductName name = {props.name} />
            </div>
        </div>
        </Fragment>
    );
};

export default GeneralProductOverviewCard;