import Section from "../components/Section";
import Paragraph from "../components/Paragraph";
import Hello from "../components/Hello";
import Github from "./github.png";
import Instagram from "./instagram.png";

function Home() {
    return (
        <>
            <Section content={<Hello text="My Contacts" />}></Section>
            <Section
                content={
                    <Paragraph
                        img={Github}
                        header3=""
                        text={
                            <strong>
                                <a
                                    style={{
                                        textDecoration: "none",
                                        color: "white",
                                    }}
                                    href="https://github.com/gask5"
                                >
                                    GitHub
                                </a>
                            </strong>
                        }
                    />
                }
            />
            <Section
                content={
                    <Paragraph
                        img={Instagram}
                        header3=""
                        text={
                            <strong>
                                <a
                                    style={{
                                        textDecoration: "none",
                                        color: "white",
                                    }}
                                    href="https://www.instagram.com/gask.5/"
                                >
                                    Instagram
                                </a>
                            </strong>
                        }
                    />
                }
            />
        </>
    );
}

export default Home;
