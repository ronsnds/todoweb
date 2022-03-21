import "./task.css";

export function Task({ item, check }) {
    return (
        <div className="container-task">
            <input value={check} type="checkbox" className="inputCheck" />
            <p className="textList">{item}</p>
        </div>
    );
}
