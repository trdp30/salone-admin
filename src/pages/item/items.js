import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchItems } from "../../store/actions/item.action";
import { Link } from "react-router-dom";
import Loading from "../../components/loading";

function Items(props) {
  const { itemModel } = props;
  useEffect(() => {
    if (!itemModel.request.isLoading && !itemModel.request.error) {
      props.getItems();
    }
  }, []);

  return (
    <>
      {!itemModel.request.isLoading ? (
        <div
          className="desktop-list"
          style={{ marginTop: "24px", fontSize: "12px" }}
        >
          <div className="table-responsive">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Logo</th>
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Duration</th>
                  <th scope="col">Price</th>
                  <th scope="col">MRP</th>
                </tr>
              </thead>
              <tbody>
                {!itemModel.request.isLoading &&
                  itemModel.data.allIds &&
                  itemModel.data.allIds.length &&
                  itemModel.data.allIds.map((itemId) => (
                    <tr key={itemId}>
                      <td>
                        <img
                          src={itemModel.data.byId[itemId].image_source}
                          alt="Avatar"
                          style={{ height: "23px", width: "31px" }}
                        />
                      </td>
                      <td>{itemModel.data.byId[itemId].name}</td>
                      <td>{itemModel.data.byId[itemId].description}</td>
                      <td>{itemModel.data.byId[itemId].duration}</td>
                      <td>{itemModel.data.byId[itemId].price}</td>
                      <td>{itemModel.data.byId[itemId].mrp_price}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  itemModel: state.item,
});

const mapDispatchToProps = (dispatch) => ({
  getItems: () => dispatch(fetchItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Items);
