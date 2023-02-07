import { Component } from 'solid-js';
import { savedRepos, setSavedRepos } from '../pages/SavedRepos';

export type Repo = {
  id: string
  html_url: string
  name: string
  description: string
  stargazers_count: string
  owner: {
    login: string
  }
}

interface Props {
  repo: Repo
}

const saveRepo = (repo: Repo) => {
  setSavedRepos([repo, ...savedRepos()])
  localStorage.setItem('savedRepos', JSON.stringify(savedRepos()))
}

const unsaveRepo = (repoId: string) => {
  setSavedRepos(savedRepos()?.filter(item => item.id !== repoId))
  localStorage.setItem('savedRepos', JSON.stringify(savedRepos()))
}

const repoIsSaved = (repoId: string) => {
  const repo = savedRepos()?.filter(item => item.id === repoId)
  return repo?.length > 0
}

const RepoCard: Component<Props> = ({ repo }) => {
    return (
        <div class="card w-auto bg-base-300 shadow-xl my-6">
          <div class="card-body">
            <a class="link link-hover" href={repo.html_url} target="_blank" rel="noreferrer">
              <h2 class="card-title">{repo.owner?.login}/{repo.name}</h2>
            </a>
            <p>{repo.description}</p>
            <div class="card-actions justify-between items-end">
              <span class="badge badge-accent badge-lg">Stars: {repo.stargazers_count}</span> 

              {repoIsSaved(repo.id) ? (
                <button class="btn btn-error btn-sm" onClick={ () => unsaveRepo(repo.id)}>Unsave</button>
              ) : (
                <button class="btn btn-success btn-sm" onClick={ () => saveRepo(repo)}>Save</button>
              )}
            </div>
          </div>
        </div>
    )
}

export default RepoCard;