/**
 * A reusable CTA button component.
 * When clicked, it opens the Google Drive resume link in a new tab.
 */

const Button = ({ text, className, id }) => {
  return (
    <a
      href="https://drive.google.com/drive/folders/1l5N7tonuOS8YDGZME9RTl5JC4omRqKal?usp=drive_link"
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        // Allow default link behavior to open in new tab
        // Don't preventDefault() here since we want the link to work
      }}
      className={`${className ?? ""} cta-wrapper`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/code.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
