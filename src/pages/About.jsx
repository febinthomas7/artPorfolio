import { ToastContainer } from "react-toastify";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";
import "../about.css";
function About() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Header />
      <ToastContainer autoClose={1000} hideProgressBar theme="dark" />
      <div className="content">
        <header className="headerr">
          <h1>Tesin Thomas</h1>
          <p className="subtitle">Senior Visual Designer | Storyteller</p>

          <div className="tags">
            <span className="tag tag-primary">5+ Years Experience</span>
            <span className="tag tag-secondary">BYJU'S</span>
            <span className="tag tag-secondary">Swiggy</span>
          </div>
        </header>

        <div className="sections">
          <section className="section">
            <div className="section-header">
              {/* <Sparkles className="icon" /> */}
              <h2>About</h2>
            </div>
            <div className="text-content">
              <p>
                Tesin Thomas is a passionate and skilled Graphic Designer and
                Visual Storyteller with over 5 years of creative experience,
                including roles as Associate – Art & Design at BYJU'S – Think &
                Learn Pvt. Ltd. and Senior Graphic Designer at Swiggy. With a
                strong foundation in Art, Design, and Multimedia, Tesin combines
                artistic vision, technical precision, and strategic thinking to
                craft visuals that inspire, engage, and communicate effectively.
              </p>
              <p>
                Throughout his career, Tesin has collaborated with professionals
                across Media, Animation, Gaming, and Advertising, gaining a deep
                understanding of diverse visual languages. His expertise in
                Adobe Creative Suite and Figma enables him to transform ideas
                into visually compelling and purposeful designs — from UI
                layouts, branding campaigns, and storyboards to concept art,
                book illustrations, and digital matte paintings.
              </p>
            </div>
          </section>

          <section className="section">
            <div className="section-header">
              {/* <Briefcase className="icon" /> */}
              <h2>Experience</h2>
            </div>
            <div className="cards">
              <div className="card">
                <h3>Senior Graphic Designer</h3>
                <p className="company">Swiggy</p>
                <p>
                  Leading the design of UI layouts, app interfaces, and
                  marketing campaigns, ensuring creative alignment with brand
                  strategy to enhance user engagement and retention.
                </p>
              </div>

              <div className="card">
                <h3>Associate – Art & Design</h3>
                <p className="company">BYJU'S – Think & Learn Pvt. Ltd.</p>
                <p>
                  Played a key role in creating educational visuals that made
                  complex learning concepts interactive and visually engaging.
                </p>
              </div>

              <div className="card">
                <h3>Freelance Designer</h3>
                <p className="company">Various Projects</p>
                <p>
                  Worked on numerous freelance projects, expanding exposure in
                  the creative industry and refining skills in photography,
                  photo editing, and retouching.
                </p>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="section-header">
              {/* <GraduationCap className="icon" /> */}
              <h2>Education</h2>
            </div>
            <div className="card">
              <h3>B.Sc. in Animation and Multimedia</h3>
              <p className="company">
                Maharishi University of Information Technology, Noida
              </p>
            </div>
          </section>

          <section className="section">
            <div className="section-header">
              {/* <Palette className="icon" /> */}
              <h2>Core Skills & Tools</h2>
            </div>
            <div className="card skills-card">
              <div className="skill-group">
                <h3>Design Tools:</h3>
                <p>
                  Adobe Photoshop, Illustrator, InDesign, After Effects, Figma,
                  Canva, Sketch
                </p>
              </div>

              <div className="skill-group">
                <h3>Specializations:</h3>
                <p>
                  Visual Design, UI/UX Layouts, Branding Campaigns,
                  Storyboarding, Concept Art, Matte Painting, Typography, Logo &
                  Poster Design
                </p>
              </div>

              <div className="skill-group">
                <h3>Creative Strengths:</h3>
                <p>
                  Detail-oriented, Innovative Thinker, Strong Collaborator,
                  Effective Communicator
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Newsletter />
    </div>
  );
}

export default About;
