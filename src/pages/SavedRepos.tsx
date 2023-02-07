import { Component, createSignal, For } from "solid-js";
import RepoCard, { Repo } from "../components/RepoCard";

const reposFromLocalStorage = JSON.parse(localStorage.getItem('savedRepos') || '[]')
const [savedRepos, setSavedRepos] = createSignal(reposFromLocalStorage as Repo[]);

const unsaveAllRepos = (() =>{
	setSavedRepos([])
})

const SavedRepos: Component = () => {
  return (
    <div class="relative">
			<h1 class="font-bold text-center">You have {savedRepos().length} saved repositories</h1>
			<button class="btn btn-error btn-sm mx-2 absolute right-0 top-2" onClick={ () => unsaveAllRepos()}>Delete all saved repos</button>
			<For each={savedRepos()}>
				{(repo: Repo) => <RepoCard repo={repo} />}
			</For>
    </div>
  );
};

export { savedRepos, setSavedRepos }
export default SavedRepos;
