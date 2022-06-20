import Section from "../components/Section";
import Paragraph from "../components/Paragraph";
import Hello from "../components/Hello";
import Github from "./github.png";
import Instagram from "./instagram.png";

function Home() {
    return (
        <>
            <Section content={<Hello text="My Contacts" />}></Section>
            <a href="https://github.com/gask5">
            <Section
                content={
                    <Paragraph
                        img={Github}
                        header3=""
                        text={
                                    "GitHub"
                        }
                    />
                }
            />
            </a>
            <a href="https://www.instagram.com/gask.5/">
            <Section
                content={
                    <Paragraph
                        img={Instagram}
                        header3=""
                        text={                                
                                "Instagram"
                        }
                    />
                }
            />
            </a>
        </>
    );
}

export default Home;
