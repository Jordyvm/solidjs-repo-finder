import { Component, createEffect, For } from 'solid-js'
import { repos, userExists, username } from '../App'
import RepoCard, { Repo } from '../components/RepoCard'

const Home: Component = () => {
    return (
        <div>
          <h1 class='text-center font-bold'>{
            username()!= null && userExists() == true ? 'Github repositories of ' + username() :
            username()!= null && userExists() == false ? username() + " doesn't exist please search for other user":
            'Search for username in the field above'}
          </h1>            
          <div class="cards">
            <For each={repos()}
            fallback={
            repos.length < 1  && userExists() == true ? <div class="text-center">This user doesn't have any repositories yet.</div> :
            ""
            }
            >
                {(repo: Repo) => <RepoCard repo={repo} />}
            </For>
          </div>
          <div class="btn-group my-3 w-full justify-center">
            <button class="btn">1</button>
            <button class="btn btn-active">2</button>
            <button class="btn">3</button>
            <button class="btn">4</button>
          </div>
        </div>
    )
}

export default Home;