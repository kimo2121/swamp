import "./social.scss";
import { Twitter } from "@material-ui/icons";

export default function Social() {
  return (
    <div className="social">
      <div className="socialDiscord">
        <a href="https://twitter.com/SwampMnstrsNFT">
          <Twitter />
        </a>
      </div>
      <div className="socialDiscord">
        <a href="https://discord.com/invite/gu5JCegAQJ">
          <i className="fab fa-discord"></i>
        </a>
      </div>
    </div>
  );
}
