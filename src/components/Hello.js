const style = {
    backgroundColor: "rgba(255,255,255,0.0)",
    textAlign: "center",
    borderRadius: "5px 5px 5px 5px",
    padding: "5rem 0 5rem 0",
    fontSize: "1.5rem",
};

function Hello(props) {
    return <div style={style}>{props.text}</div>;
}

export default Hello;
