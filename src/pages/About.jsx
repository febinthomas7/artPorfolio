import { ToastContainer } from "react-toastify";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";

function About() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Header />
      <ToastContainer autoClose={1000} hideProgressBar theme="dark" />
      <div className="a-1">
        <div className="a-2">
          <img src="/tesin-thomas-2two 1-min.webp" alt="Tesin Thomas" />
        </div>
        <div className="a-3">
          <p>
            Tesin Thomas worked as an Associate - Art & Design with BYJU'S -
            Think & Learn Private Limited. He has a total work experience of 2+
            years.
            <br />
            <br />
            As a skilled artist/designer with more than 2+ years of experience
            in the industry, he <br />
            is confident that he possess the relevant qualifications and passion
            necessary to <br />
            make a valuable contribution to your team.
            <br />
            <br />
            Throughout his career span of more than two years, he had the
            opportunity to work <br />
            with a wide variety of artists/designers with expertise in the
            domain of Media,
            <br />
            Animation, Gaming, and Advertising. His ability to communicate with
            clients and <br />
            understand their needs, coupled with his expertise in Adobe Creative
            Suite, has
            <br />
            allowed him to create stunning designs and artworks that not only
            meet but exceed <br />
            expectations. He is comfortable working on projects of all sizes,
            from small
            <br />
            advertisements to full-scale branding campaigns which include Book
            Illustrations,
            <br />
            Concept Art, Game Designing, UI and digital Matte Painting as well.
            He also has a <br />
            deep interest in Photography, Photo Editing and Retouching.
            <br />
            <br />
            He has also got the opportunity to be a part of some really amazing
            freelancing works
            <br />
            which helped him in gaining more exposure in the Media Industry.
            Talking about his <br />
            educational qualification, He has a strong Art and Design knowledge
            with his degree <br />
            in B.Sc Multimedia from the Maharishi University of Information
            Technology, Noida.
            <br />
            <br />
            In addition to his technical skills, he is also a creative thinker
            who is always looking for <br />
            new and innovative ways to approach design challenges. He is
            constantly expanding <br />
            his knowledge and skills to keep up with the latest design trends
            and technologies.
            <br />
            This has allowed him to create unique and impactful designs that are
            both visually
            <br />
            appealing and effective in achieving the client's goals.
            <br />
            <br />
            He is also a collaborative team player who values open communication
            and
            <br />
            constructive feedback. He is committed to work closely with clients
            and colleagues to <br />
            ensure that the final product meets everyone's expectations and
            delivers the desired <br />
            results.
            <br />
            <br />
          </p>
        </div>
      </div>

      <Newsletter />
    </div>
  );
}

export default About;
