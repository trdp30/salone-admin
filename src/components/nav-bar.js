import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <Link to="/dashboard" >Dashboard</Link><br/>
      <Link to="/categories" >Categories</Link><br/>
      <Link to="/category/create" >CategoryCreate</Link><br/>
      <Link to="/category/1/details" >CategoryDetails</Link><br/>
      <Link to="/category/1/edit" >CategoryEdit</Link><br/>
      <Link to="/items" >Items</Link><br/>
      <Link to="/item/create" >ItemCreate</Link><br/>
      <Link to="/item/1/details" >ItemDetails</Link><br/>
      <Link to="/item/1/edit" >ItemEdit</Link><br/>
      <Link to="/orders" >Orders</Link><br/>
      <Link to="/order/create" >OrderCreate</Link><br/>
      <Link to="/order/1/details" >OrderDetails</Link><br/>
      <Link to="/order/1/edit" >OrderEdit</Link><br/>
      <Link to="/users" >Users</Link><br/>
      <Link to="/user/1/edit" >UpdateUser</Link><br/>
      <Link to="/user/1/change-role" >ChangeRole</Link><br/>
      <Link to="/login" >Login</Link><br/>
      <Link to="/logout" >Logout</Link><br/>
      <Link to="/register" >Register</Link><br/>
    </>
  )
}

export default NavBar;