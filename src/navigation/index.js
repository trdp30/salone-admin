import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Categories from '../pages/category/categories';
import CategoryCreate from '../pages/category/create';
import CategoryDetails from '../pages/category/details';
import CategoryEdit from '../pages/category/edit';
import Items from '../pages/item/items';
import ItemCreate from '../pages/item/create';
import ItemDetails from '../pages/item/details';
import ItemEdit from '../pages/item/edit';
import Orders from '../pages/order/orders';
import OrderCreate from '../pages/order/create';
import OrderDetails from '../pages/order/details';
import OrderEdit from '../pages/order/edit';

import Users from '../pages/user/users';
import UpdateUser from '../pages/user/update-user';
import ChangeRole from '../pages/user/change-role';

import Login from '../pages/login';
import Logout from '../pages/logout';
import Register from '../pages/register';
import DashBoard from '../pages/dashboard';
import NavBar from '../components/nav-bar';

export default function Navigation() {
  return (
    <BrowserRouter>
      <Switch>
        <ContainerRoute />
        <Route path="/" component={DashBoard}/>
        <Route path="*" render={() => <div>No route found</div>}/>
      </Switch>
    </BrowserRouter>
  )
}

const ContainerRoute = () => {
  // return (
  //   <div className="ui container height-view-port">
  //     {/* <Logo /> */}
  //     <div className="ui grid height-view-port">
  //       <div className="sixteen wide column margin-top-hundred padding-no-top">
  //         <Switch>
  //           {/* <Route path="/assessment/post-section" exact component={PostSection} /> */}
  //           {/* <Route path="/assessment/init" exact component={LandingPage} /> */}
  //           {/* <Route path="/assessment/:assessment_id" component={Passage}/> */}
  //           {/* <Route path="/error" component={ErrorView} /> */}
  //           <Route path="/" exact/>
  //           {/* <Route path="*" render={() => <ErrorView error={{message: "No Route Found."}} />}/> */}
  //         </Switch>
  //       </div>
  //     </div>
  //   </div>
  // )
  return (
    <div>
      <NavBar />
      <Route path="/categories" exact component={Categories} />
        <Route path="/category/create" exact component={CategoryCreate} />
        <Route path="/category/:category_id/details" exact component={CategoryDetails} />
        <Route path="/category/:category_id/edit" exact component={CategoryEdit} />
        <Route path="/items" exact component={Items} />
        <Route path="/item/create" exact component={ItemCreate} />
        <Route path="/item/:item_id/details" exact component={ItemDetails} />
        <Route path="/item/:item_id/edit" exact component={ItemEdit} />
        <Route path="/orders" exact component={Orders} />
        <Route path="/order/create" exact component={OrderCreate} />
        <Route path="/order/:order_id/details" exact component={OrderDetails} />
        <Route path="/order/:order_id/edit" exact component={OrderEdit} />
        <Route path="/users" exact component={Users} />
        <Route path="/user/:user_id/edit" exact component={UpdateUser} />
        <Route path="/user/:user_id/change-role" exact component={ChangeRole} />
        <Route path="/login" exact component={Login} />
        <Route path="/logout" exact component={Logout} />
        <Route path="/register" exact component={Register} />
        <Route path="/dashboard" exact component={DashBoard}/>
    </div>
  )
}