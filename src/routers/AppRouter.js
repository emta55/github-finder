import React from "react";
import {  Route, Switch, NavLink } from "react-router-dom";

const Nav = () => (
  <nav>
    <NavLink exact to="/" activeClassName="active">
      Home
    </NavLink>{" "}
    |
    <NavLink to="/contact#email" activeClassName="active">
      Contact
    </NavLink>{" "}
    |
    <NavLink exact to="/products" activeClassName="active">
      Products
    </NavLink>{" "}
    |
    <NavLink to="/products/12?orderby=price" activeClassName="active">
      Product Details
    </NavLink>{" "}
    |
  </nav>
);
const Header = () => (
  <header>
    <h3>Github Finder</h3>
  </header>
);

const HomePage = () => (
  <>
    <div>Home Page</div>
  </>
);
const ContactPage = (props) => {
  console.log(props);
  return (
    <>
      <div>Contact Page</div>
    </>
  );
}
const ProductsPage = () => (
  <>
    <div>Products Page</div>
  </>
);
const ProductDetailsPage = (props) => {
  console.log(props);
  return (
    <>
      <div>ProductDetails Page</div>
      <div>{props.match.params.id}</div>
    </>
  );
}
const NotFoundPage = () => (
  <>
    <div>404 NotFound</div>
  </>
);

const AppRouter = () => (
  <>
    <Header />
    <Nav />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/contact" component={ContactPage} />
      <Route exact path="/products" component={ProductsPage} />
      <Route path="/products/:id" component={ProductDetailsPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </>
);

export default AppRouter;
