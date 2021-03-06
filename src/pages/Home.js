import Section from "../components/Section";
import Paragraph from "../components/Paragraph";
import Hello from "../components/Hello";
import profile from "./me.jpg";

function Home() {
  return (
    <>
      <Section
        content={
          <Hello
            text={
              <div>
                Welcome <br /> on my portfolio.{" "}
              </div>
            }
          />
        }
      ></Section>{" "}
      <Section
        content={
          <Paragraph
            img={profile}
            header3="Who am I?"
            text={
              <div>
                Hello, nice to meet you,
                <br /> I 'm Gabriele Veneziano Broccia. <br />
                <br /> Currently I am Computer Science student at <a href="https://www.unict.it/en"> University of
                Catania</a>.
                <br />
                <br />
                <br /> My main interests are Tech, Music and Movies. <br />
                <br />
                <br /> Minimalism as lifestyle.
                <br />
              </div>
            }
          />
        }
      />
      <Section content={"Made with React."} />
    </>
  );
}

export default Home;
