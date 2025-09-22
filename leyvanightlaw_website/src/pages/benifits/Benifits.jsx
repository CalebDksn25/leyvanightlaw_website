import "./Benifits.css";
import athlete from "../../assets/athleteinj.png";
import death from "../../assets/deathbenifits.png";
import medicare from "../../assets/medicare.png";
import tempdisability from "../../assets/tempdis.png";
import supplemental from "../../assets/supplementjobdis.png";
import permmdisability from "../../assets/permdis.png";

const benefits = [
  {
    id: 1,
    image: medicare,
    title: "Medical Care",
    description:
      "Decades of combined experience focused on employment and injury law.",
  },
  {
    id: 2,
    image: tempdisability,
    title: "Temporary Disability Benefits",
    description:
      "Direct communication and tailored strategies for your unique situation.",
  },
  {
    id: 3,
    image: athlete,
    title: "Athlete Injuries",
    description:
      "A track record of favorable settlements and verdicts for our clients.",
  },
  {
    id: 4,
    image: permmdisability,
    title: "Permanent Disability Benefits",
    description:
      "Compassionate guidance that makes the process clear and stress-free.",
  },
  {
    id: 5,
    image: supplemental,
    title: "Supplemental Job Displacement Benefits",
    description:
      "We only get paid if we win your case, so your success is our priority.",
  },
  {
    id: 6,
    image: death,
    title: "Death Benefits",
    description:
      "English and Spanish-speaking team ready to assist you and your family.",
  },
];

const Benifits = () => {
  return (
    <div className="benefits-page">
      <div className="benefits-header">
        <h1>KNOW YOUR RIGHTS AND BENEFITS AVAILABLE TO INJURED WORKERS</h1>
        <p>
          Have you had one of the following rights violated? Contact us today.
        </p>
      </div>

      <div className="benefits-grid">
        {benefits.map((b) => (
          <div key={b.id} className="benefit-card">
            <div className="benefit-image-wrap">
              <img src={b.image} alt={b.title} className="benefit-image" />
            </div>
            <div className="benefit-content">
              <h3 className="benefit-title">{b.title}</h3>
              <p className="benefit-description">{b.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benifits;
