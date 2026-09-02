export default function First() {
    const showMessage = () => alert("Первая компонента отработала!");

    return <button onClick={showMessage}>Нажми меня</button>;
}