import '../../App.css';
import SectionTitle from '../SectionTitle';

export default function About() {
  return (
    <div style={{ background: "#0f0e0ee1", borderRadius: "0.5rem", marginBottom: "2rem" }}>
      <SectionTitle title="About The Hackathon" />
      <div className="flex flex-col-reverse px-6 py-4 items-center md:justify-evenly md:flex-row">
        <div className="flex text-lg leading-7 items-start text-justify font-secondary text-white w-full md:w-8/12 md:text-left">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat necessitatibus, aspernatur autem in, consequuntur deserunt, praesentium molestiae cumque explicabo dolorem ad doloremque eius officia. Neque animi, esse nostrum perferendis asperiores sint illo voluptatum at, minus nesciunt quidem aliquam, sequi Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, repellendus!  praesentium molestiae cumque explicabo dolorem ad doloremque eius officia.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, maxime?
        </div>
        <img className='pb-4' src="/Images/about/hackathons-logo.png" alt="" />
      </div>
    </div>
  )
}
// style={{ background: "#0f0e0ee1" }}