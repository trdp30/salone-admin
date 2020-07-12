import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  userIsAuthenticatedRedir,
  userIsNotAuthenticatedRedir,
} from "../config/auth";

import Categories from "../pages/category/categories";
import CategoryCreate from "../pages/category/create";
import CategoryDetails from "../pages/category/details";
import CategoryEdit from "../pages/category/edit";
import Items from "../pages/item/items";
import ItemCreate from "../pages/item/create";
import ItemDetails from "../pages/item/details";
import ItemEdit from "../pages/item/edit";
import Orders from "../pages/order/orders";
import OrderCreate from "../pages/order/create";
import OrderDetails from "../pages/order/details";
import OrderEdit from "../pages/order/edit";
import Users from "../pages/user/users";
import UpdateUser from "../pages/user/update-user";
import ChangeRole from "../pages/user/change-role";
import Login from "../pages/login";
import Logout from "../pages/logout";
import Register from "../pages/register";
import DashBoard from "../pages/dashboard";
import AppContainer from "../components/app-container";

function Navigation() {
  return (
    <Router>
      <AppContainer>
        <Switch>
          <Route
            path="/login"
            exact
            component={userIsNotAuthenticatedRedir(Login)}
          />
          <Route path="/logout" exact component={Logout} />
          <Route path="/register" exact component={Register} />
          <Route
            path="/categories"
            exact
            component={userIsAuthenticatedRedir(Categories)}
          />
          <Route
            path="/category/create"
            exact
            component={userIsAuthenticatedRedir(CategoryCreate)}
          />
          <Route
            path="/category/:category_id/details"
            exact
            component={userIsAuthenticatedRedir(CategoryDetails)}
          />
          <Route
            path="/category/:category_id/edit"
            exact
            component={userIsAuthenticatedRedir(CategoryEdit)}
          />
          <Route
            path="/items"
            exact
            component={userIsAuthenticatedRedir(Items)}
          />
          <Route
            path="/item/create"
            exact
            component={userIsAuthenticatedRedir(ItemCreate)}
          />
          <Route
            path="/item/:item_id/details"
            exact
            component={userIsAuthenticatedRedir(ItemDetails)}
          />
          <Route
            path="/item/:item_id/edit"
            exact
            component={userIsAuthenticatedRedir(ItemEdit)}
          />
          <Route
            path="/orders"
            exact
            component={userIsAuthenticatedRedir(Orders)}
          />
          <Route
            path="/order/create"
            exact
            component={userIsAuthenticatedRedir(OrderCreate)}
          />
          <Route
            path="/order/:order_id/details"
            exact
            component={userIsAuthenticatedRedir(OrderDetails)}
          />
          <Route
            path="/order/:order_id/edit"
            exact
            component={userIsAuthenticatedRedir(OrderEdit)}
          />
          <Route
            path="/users"
            exact
            component={userIsAuthenticatedRedir(Users)}
          />
          <Route
            path="/user/:user_id/edit"
            exact
            component={userIsAuthenticatedRedir(UpdateUser)}
          />
          <Route
            path="/user/:user_id/change-role"
            exact
            component={userIsAuthenticatedRedir(ChangeRole)}
          />
          <Route
            path="/dashboard"
            exact
            component={userIsAuthenticatedRedir(DashBoard)}
          />
          <Route
            path="/"
            exact
            component={userIsAuthenticatedRedir(DashBoard)}
          />
          <Route path="*" render={() => <div>No route found</div>} />
        </Switch>
      </AppContainer>
    </Router>
  );
}

export default Navigation;
