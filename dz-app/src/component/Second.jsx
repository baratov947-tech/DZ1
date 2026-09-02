export default function Second() {
    const logData = () => console.log("Клик по заголовку зарегистрирован");

    return <h2 onClick={logData}>Кликни, чтобы отправить лог в консоль</h2>;
}