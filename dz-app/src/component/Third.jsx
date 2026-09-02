export default function Third() {
    const calculate = () => alert(`Секретное вычисление: 5 + 5 = ${5 + 5}`);

    return <p onMouseEnter={calculate}>Наведи курсор на этот текст</p>;
}