import "./style.css";

export function ListAdd({ item, onChange, co }) {
    return (
        <div className="container-task" done={item.toString()}>
            <input
                type="checkbox"
                className="inputCheck"
                checked={item.done}
                onChange={(e) => onChange(item.id, e.target.checked)}
            />
            <label
                className="textList"
                style={{
                    color: co === true ? "red" : "black",
                    textDecoration: co === true ? "line-through" : "none",
                }}
            >
                {item.task}
            </label>
        </div>
    );
}
