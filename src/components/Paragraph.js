const headerStyle = {
    textDecorationColor: "rgba(255,255,255,0.5)",
    marginLeft: "1em",
};

const imgStyle = {
    maxWidth: "25rem",
    maxHeight: "40rem",
    borderRadius: "0.5rem",
    objectFit: "cover",
};

const paragraphStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: "5vw",
    borderRadius: "1em",

    color: "rgba(255,255,255,1)",
};

const textStyle = {
    textAlign: "left",
    maxWidth: "20rem",
    margin: "2.5rem",
    fontSize: "1.0rem",
};

function Paragraph(props) {
    let header;
    if (props.header1 != null)
        header = <h1 style={headerStyle}>{props.header1}</h1>;
    else if (props.header2 != null)
        header = <h2 style={headerStyle}>{props.header2}</h2>;
    else if (props.header3 != null)
        header = <h3 style={headerStyle}>{props.header3}</h3>;

    return (
        <div style={paragraphStyle}>
            <img alt="" style={imgStyle} src={props.img} />
            <div style={textStyle}>
                {header}
                <p>{props.text}</p>
            </div>
        </div>
    );
}

export default Paragraph;
