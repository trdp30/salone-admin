import React, { useState } from "react";
import InputField from "../../components/elements/input";
import Dropdown from "../../components/helpers/dropdown";
import { connect } from "react-redux";
import { fetchItems } from "../../store/actions/item.action";

function OrderCreate(props) {
  const [phone, setPhone] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [addressSecondary, setAddressSecondary] = useState();
  const { itemModel, getItems } = props;
  const [ selectedItem, setSelectedItem] = useState(null)

  return (
    <div>
      <div className="row">
        <div className="col-md-4 order-md-2 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Your cart</span>
            <span className="badge badge-secondary badge-pill">3</span>
          </h4>
          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">Product name</h6>
                <small className="text-muted">Brief description</small>
              </div>
              <span className="text-muted">$12</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">Second product</h6>
                <small className="text-muted">Brief description</small>
              </div>
              <span className="text-muted">$8</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">Third item</h6>
                <small className="text-muted">Brief description</small>
              </div>
              <span className="text-muted">$5</span>
            </li>
            <li className="list-group-item d-flex justify-content-between bg-light">
              <div className="text-success">
                <h6 className="my-0">Promo code</h6>
                <small>EXAMPLECODE</small>
              </div>
              <span className="text-success">-$5</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>$20</strong>
            </li>
          </ul>

          <form className="card p-2" style={{ width: "100%" }}>
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Promo code" />
              <div className="input-group-append">
                <button type="submit" className="btn btn-secondary">
                  Redeem
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-8 order-md-1">
          <h4 className="mb-3">Billing address</h4>
          <form className="needs-validation" noValidate="">
            <div className="row">
              <div className="col-md-6 mb-3">
                <InputField
                  name="Phone Number"
                  label="Phone Number"
                  type="number"
                  placeholder="Enter Phone Number"
                  value={phone}
                  setValue={setPhone}
                  required={true}
                />
              </div>
              <div className="col-md-6 mb-3">
                <InputField
                  name="Name"
                  label="Name"
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  setValue={setName}
                  required={true}
                />
              </div>
            </div>

            <div className="mb-3">
              <InputField
                name="Email"
                label="Email"
                type="email"
                placeholder="you@example.com"
                value={email}
                setValue={setEmail}
                required={false}
              />
            </div>

            <div className="mb-3">
              <InputField
                name="Address"
                label="Address"
                type="text"
                placeholder="1234 Main St"
                value={address}
                setValue={setAddress}
                required={true}
              />
            </div>

            <div className="mb-3">
              <InputField
                name="Address-2"
                label="Address 2"
                type="text"
                placeholder="Apartment or suite"
                value={addressSecondary}
                setValue={setAddressSecondary}
                required={false}
              />
            </div>

            <div className="row">
              <div className="col-md-5 mb-3">
                <label htmlFor="country">Country</label>
                <Dropdown
                  className="custom-select d-block w-100"
                  setSelectedOption={setSelectedItem}
                  fetchData={getItems}
                  selectedOption={selectedItem}
                  modelName={"item"}
                  content={itemModel}
                />
                <div className="invalid-feedback">Please select a valid country.</div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="state">State</label>
                <select className="custom-select d-block w-100" id="state" required="">
                  <option value="">Choose...</option>
                  <option>California</option>
                </select>
                <div className="invalid-feedback">Please provide a valid state.</div>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="zip">Zip</label>
                <input type="text" className="form-control" id="zip" placeholder="" required="" />
                <div className="invalid-feedback">Zip code required.</div>
              </div>
            </div>

            <hr className="mb-4" />
            <button className="btn btn-primary btn-lg btn-block" type="submit">
              Continue to checkout
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  getItems: (query) => dispatch(fetchItems(query)),
});

export default connect(null, mapDispatchToProps)(OrderCreate);
