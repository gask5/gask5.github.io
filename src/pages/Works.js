import Section from "../components/Section";
import Paragraph from "../components/Paragraph";
import Hello from "../components/Hello";
import hairstudio from "./hairstudio.png";

function Works() {
    return (
        <>
            <Section content={<Hello text="My Works" />}></Section>
            <Section
                content={
                    <Paragraph
                        img={hairstudio}
                        header3="HairStyle Studio"
                        text={
                            <div>
                                Android barber booking app developed with
                                Android Studio.
                                <br />
                                <br /> The user can choose from the homepage the
                                barber, the hours and the service he wants.
                                <br /> The barber has a panel where he can
                                manage all kind of stuff as notifications,
                                bookings.
                                <br />
                                <br /> The app is available on Google Play
                                Store.
                            </div>
                        }
                    />
                }
            />
        </>
    );
}

export default Works;
