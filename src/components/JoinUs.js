import btc from "../assets/btc-float.png";
import eth from "../assets/eth-float.png";

export default function JoinUs() {
  return (
    <div className="join-container">
      <div className="join-content">
        <img className="btc-float float" src={btc} alt="btc-float" />
        <h1>
          Join Us Via
          <br></br>
          <span>Discord</span>
        </h1>
        <img className="eth-float float" src={eth} alt="eth-float" />
      </div>

      <p>Invest and manage all your crypto at one place.</p>
      <button>
        <a href="https://discord.com/" target="blank">
          Join via Discord
        </a>
      </button>
    </div>
  );
}
