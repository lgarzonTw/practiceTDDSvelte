import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/svelte';
import App from './App.svelte';

test('shows proper heading when rendered', () => {
    const { getByText } = render(App, { name: 'World' });
    expect(getByText('Hello World!')).toBeInTheDocument();
})

test('has an h2 element', () => {
    const { container } = render(App);
    const ageText = container.querySelector('h2');
    expect(ageText).toBeInTheDocument();
})

test('has age text in h2', () => {
    const { getByText } = render(App);
    const ageText = getByText('My age is 1');
    expect(ageText).toBeInTheDocument();
})

test('Has Increase age button', () => {
    const { container } = render (App);
    const increaseAgeButton = container.querySelector('button');
    expect(increaseAgeButton).toBeInTheDocument();
})

test('Count age increments when button is clicked', async() => {
    const { getByText } = render(App);
    const ageText = getByText('My age is 1');
    const button = getByText('Increase age');

    await fireEvent.click(button);

    expect(ageText).toHaveTextContent('My age is 2');
});

test('has change name button', () => {
    const { getByText } = render(App);
    const changeNameButton = getByText('Change name');
    expect(changeNameButton).toBeInTheDocument();
})

test('Changes name when change name button is clicked', async() =>{
    const { container, getByText } = render(App);
    const nameText = container.querySelector('h1');
    const button = getByText('Change name');

    await fireEvent.click(button);

    expect(nameText).toHaveTextContent('Hello newName!');
})

test('Has input for name', () => {
    const { queryByPlaceholderText } = render(App);
    const nameInput = queryByPlaceholderText('Your name');
    expect(nameInput).toBeInTheDocument();
})

test('Has input for job description', () => {
    const { queryByPlaceholderText } = render(App);
    const jobInput = queryByPlaceholderText('Input the job description');
    expect(jobInput).toBeInTheDocument();
})

test('set input name value on name variable', async () => {
    const { queryByPlaceholderText } = render(App);
    const nameInput = queryByPlaceholderText('Your name');

    await fireEvent.input(nameInput, {target: {value: 'Andres'}});
    expect(nameInput).toHaveValue('Andres');
})

test('set input name value on the title h1', async () => {
    const { queryByPlaceholderText, container } = render(App);
    const nameInput = queryByPlaceholderText('Your name');
    const title = container.querySelector('h1');

    await fireEvent.input(nameInput, {target: {value: 'Andres'}});
    expect(title).toHaveTextContent('Hello Andres!');
})