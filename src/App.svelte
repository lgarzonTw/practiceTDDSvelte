<script lang="ts">
	export let name: string = '';
	let age: number = 1;

	const increaseAge = () => {
		age += 1;
	}

	const changeName = () => {
		name = 'newName';
	}

	const handleNameInput = (event: any) => {
		const { value } = event.target;
		console.log(`value tiene: ${value}`);
		name = value;
	}
</script>

<main>
	<h1>Hello {name}!</h1>

	<h2>My age is {age}</h2>
	<button on:click="{increaseAge}">Increase age</button>
	<button on:click="{changeName}">Change name</button>

	<label for="nameInput">Name</label>
	<input type="text" name="nameInput" placeholder="Your name" on:input="{handleNameInput}"/>

	<label for="jobDescriptionInput">Name</label>
	<input type="text" name="jobDescriptionInput" placeholder="Input the job description"/>

</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>