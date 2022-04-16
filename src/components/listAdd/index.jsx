import "./style.css";

export function ListAdd({ item, onChange, onClick }) {
    return (
        <div className="container-task" done={item.toString()}>
            <input
                type="checkbox"
                className="inputCheck"
                checked={item.done}
                onChange={(e) => onChange(item.id, e.target.checked)}
            />
            <p
                className="textList"
                style={{
                    color: item.done === true ? "red" : "#ffffff",
                    textDecoration:
                        item.done === true ? "line-through" : "none",
                }}
            >
                {item.task}
            </p>
            <button onClick={onClick} className="buttonDelete">X</button>
        </div>
    );
}
