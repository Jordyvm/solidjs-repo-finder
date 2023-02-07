import { Route, Routes } from "solid-app-router";
import { Component, createEffect, createSignal } from "solid-js";

import styles from "./App.module.css";
import FetchBar from "./components/FetchBar";
import Nav from "./components/Nav";

import Home from "./pages/Home";
import SavedRepos from "./pages/SavedRepos";

const [username, setUsername] = createSignal('solidjs')
const [repos, setRepos] = createSignal([])
const [userExists, setUserExists] = createSignal(false)

const UrlExists = (url: string) =>{
  var http = new XMLHttpRequest();
  http.open('HEAD', url, false);
  http.send();
  if (http.status != 404)
      return true;
  else
      return false;
}

createEffect(async()=> {
  if (UrlExists(`https://api.github.com/users/${username()}/repos?sort=created`)){
    const res = await fetch(`https://api.github.com/users/${username()}/repos?sort=created`)
    setRepos(await res.json())
    setUserExists(true) 
  } 
  else{
    setRepos([]) 
    setUserExists(false)
  }
})

const App: Component = () => {
  return (
    <div class="container bg-base-100 mx-auto px-4">
      <Nav />
      <div class="md:hidden">
        <FetchBar />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/repos' element={<SavedRepos />} />
      </Routes>
    </div>
  );
};

export { username, setUsername, repos, userExists }
export default App;
