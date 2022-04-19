import "./style.css";

export function ListAdd(props) {
    return (
        <div className="container-task">
            <input
                type="checkbox"
                className="inputCheck"
                checked={props.done}
                onChange={props.onChange}
            />
            <p
                className="textList"
                style={{
                    color: props.done === true ? "red" : "#ffffff",
                    textDecoration:
                        props.done === true ? "line-through" : "none",
                }}
            >
                {props.task}
            </p>
            <button onClick={props.onClick} className="buttonDelete">
                X
            </button>
        </div>
    );
}
