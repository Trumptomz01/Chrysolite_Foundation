import Hero from "./Hero"
import AboutUs from "./about-us"
// import Contact from "./Contact"
import Projects from "./Projects"
import Impact from "./impacts"
// import Journey from "./Journey"
import GetInvolved from "./GetInvolved"

export const metadata = {
  title: "Chrysolite Foundation",
  description: "Chrysolite Foundation is advancing the welfare of the future generations " +
      "in low-income communities through empowerment and education. Our mission is to create a movement" +
      " and empowerment strategy for the total man and to assist in the educational advancement and the general " +
      "welfare of the future generation.",
};

const Home = () => {
    return (
        <main>
            <Hero/>
            <AboutUs/>
            <Impact/>
            <Projects/>
           <GetInvolved/>
        </main>
    )
}

export default Home