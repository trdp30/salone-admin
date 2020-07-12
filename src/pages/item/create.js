import React, { useState } from "react";
import InputField from "../../components/elements/input";
import { connect } from "react-redux";
import { createItem } from "../../store/actions/item.action";

function ItemCreate(props) {
  const { createNew, itemModel } = props;
  const [duration, setDuration] = useState();
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [mrpPrice, setMrpPrice] = useState();
  const [sortOrder, setSortOrder] = useState();
  const [imageUrl, setImageUrl] = useState();

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    let response = await createNew({
      category_id: 91,
      description: description,
      duration: duration,
      file_id: 459,
      image_source:
        "https://firebasestorage.googleapis.com/v0/b/homswag.appspot.com/o/images%2FPuryfing%20Canva.png?alt=media&token=6898e04c-069b-4dea-bd6f-dc18f9be33f2",
      mrp_price: mrpPrice,
      name: name,
      organization_id: 1,
      price: price,
      sort_order: sortOrder,
      sub_category: {},
    });
    console.log(response, itemModel);
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-8 order-md-1">
          <form className="needs-validation" noValidate="" onSubmit={onSubmit}>
            <div className="row">
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
                name="Description"
                label="Description"
                type="text"
                placeholder="Items Description"
                value={description}
                setValue={setDescription}
                required={false}
              />
            </div>

            <div className="mb-3">
              <InputField
                name="Price"
                label="Price"
                type="number"
                placeholder="Applicable Price"
                value={price}
                setValue={setPrice}
                required={true}
              />
            </div>

            <div className="mb-3">
              <InputField
                name="MRP Price"
                label="MRP Price"
                type="number"
                placeholder="MRP Price"
                value={mrpPrice}
                setValue={setMrpPrice}
                required={false}
              />
            </div>
            <div className="mb-3">
              <InputField
                name="Duration"
                label="Duration (enter minutes only)"
                type="number"
                placeholder="Duration to complete this service"
                value={duration}
                setValue={setDuration}
                required={false}
              />
            </div>
            <div className="mb-3">
              <InputField
                name="Sort Order"
                label="Sort Order (Number only. Like - 1 for hair cut. It will be display in the 1st position"
                type="number"
                placeholder="Order to sort the item"
                value={sortOrder}
                setValue={setSortOrder}
                required={true}
              />
            </div>

            <div className="mb-3">
              <InputField
                name="Image"
                label="Image"
                type="file"
                value={imageUrl}
                setValue={setImageUrl}
                required={false}
              />
            </div>

            <hr className="mb-4" />
            <button className="btn btn-primary btn-lg btn-block">Save</button>
          </form>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  itemModel: state.items,
});

const mapDispatchToProps = (dispatch) => ({
  createNew: (data) => dispatch(createItem(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemCreate);
