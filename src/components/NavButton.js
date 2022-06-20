function NavButton(props) {
    return (
        <div
            style={{
                position: "relative",
                margin: "1rem",
                transition: "1s",
                zIndex: "1",
                borderRadius: "0.5rem",
                textDecoration: "none",
                letterSpacing: "-0.5px",
            }}
        >
            {props.name}
        </div>
    );
}

export default NavButton;
