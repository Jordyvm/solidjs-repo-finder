import { NavLink } from "solid-app-router";
import { Component } from "solid-js";
import FetchBar from "./FetchBar";

const Nav: Component = () => {
  return (
    <div class="navbar bg-base-300 mb-3 shadow-xl">
      <div class="navbar-start">
        <NavLink href="/" class="btn btn-ghost normal-case text-xl">Repo Finder</NavLink>
      </div>
      <div class="flex-auto w-2/3">
        <div class="navbar-center w-full">
          {window.matchMedia("(max-width: 768px)").matches ? "" : <FetchBar />}
        </div>
      </div>
      <div class="navbar-end">
      <ul class="menu menu-horizontal px-1">
        <li><NavLink href="/" class="" end activeClass="link">Home</NavLink></li>
        <li><NavLink href="repos" class="" activeClass="link">Repos</NavLink></li>
      </ul>
      </div>
    </div>
  );
};

export default Nav;
