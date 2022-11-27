import "./style.css";

const Section = ({title, body, extraContent}) => (
    <section className="section">
        <h2 className="section__header section__header--grid">
          {title}
          {extraContent}
        </h2>
        <div className="section__header--list">
          {body}
        </div>
      </section>
);

export default Section;