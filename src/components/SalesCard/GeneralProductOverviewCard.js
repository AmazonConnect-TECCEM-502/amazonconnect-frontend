import { Fragment } from "react";


const GeneralProductOverviewCard = (props) => {
    return(
        <Fragment>
        <div className="general-product-overview-card">
            <div class="clearfix">
                <img src = {require(`../../images/sales/${props.image}.jpg`)} alt = "Product" />
                <p className="product-name">{props.name}</p>
            </div>
        </div>
        </Fragment>
    );
};

export default GeneralProductOverviewCard;