import { Component } from 'solid-js';
import { setUsername } from '../App';

const FetchBar: Component = () => {
  const refetchWithUsername = (event: Event) => {
    console.log("Fetch")
    event.preventDefault()
    const usernameInput = document.querySelector('#usernameInput') as HTMLInputElement
    setUsername(usernameInput.value)
  }

    return (
      <form class="form-control flex-row" onSubmit={(event) => refetchWithUsername(event)}>
        <input class="input input-bordered mx-2 w-full" type="text" placeholder="Search" id="usernameInput" required/>
        <button class="btn btn-primary mx-2">Fetch</button>
      </form>
    )
}

export default FetchBar;