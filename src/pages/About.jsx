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
            <div className="text-content">
              <p className="about">
                Tesin Thomas is a passionate and skilled Graphic Designer and
                Visual Storyteller with over 5 years of creative experience,
                including roles as Associate – Art & Design at BYJU’S – Think &
                Learn Pvt. Ltd. and Senior Graphic Designer at Swiggy. With a
                strong foundation in Art, Design, and Multimedia, Tesin combines
                artistic vision, technical precision, and strategic thinking to
                craft visuals that inspire, engage, and communicate effectively.
              </p>
              <p className="about">
                Throughout his career, Tesin has collaborated with professionals
                across Media, Animation, Gaming, and Advertising, gaining a deep
                understanding of diverse visual languages. His expertise in
                Adobe Creative Suite and Figma enables him to transform ideas
                into visually compelling and purposeful designs — from UI
                layouts, branding campaigns, and storyboards to concept art,
                book illustrations, and digital matte paintings.
              </p>
              <p className="about">
                At BYJU’S, Tesin played a key role in creating educational
                visuals that made complex learning concepts interactive and
                visually engaging. At Swiggy, he currently leads the design of
                UI layouts, app interfaces, and marketing campaigns, ensuring
                creative alignment with brand strategy to enhance user
                engagement and retention.
              </p>

              <p className="about">
                In addition to his professional roles, Tesin has worked on
                numerous freelance projects, further expanding his exposure in
                the creative industry and refining his skills in photography,
                photo editing, and retouching. His academic foundation — a B.Sc.
                in Animation and Multimedia from Maharishi University of
                Information Technology, Noida — has strengthened both his
                creative and technical expertise.
              </p>

              <p className="about">
                Tesin is not only a designer but also a creative thinker and
                problem-solver. Constantly exploring new ideas, he embraces
                emerging design trends and tools to deliver work that remains
                both relevant and impactful. Known for his attention to detail,
                collaboration, and storytelling-driven design, Tesin thrives in
                dynamic environments where creativity meets purpose.
              </p>
            </div>
          </section>
        </div>
      </div>

      <Newsletter />
    </div>
  );
}

export default About;
