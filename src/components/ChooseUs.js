import choose from "../assets/choose-1.png";

export default function ChooseUs() {
  return (
    <div className="choose-us-container" id="choose-us">
      <h2>
        WHY <span>CHOOSE US</span>
      </h2>

      <div className="card-box-container">
        <div className="card-box-column-1">
          <CardBox
            icon="fa-wallet"
            header="CONNECT YOUR WALLET"
            content="Use Trust Wallet, Metamask or to connect to the app."
          />
          <CardBox
            icon="fa-pen-ruler"
            header="SELECT YOUR QUANTITY"
            content="Upload your crypto and set a title, description and price."
          />
          <CardBox
            icon="fa-bolt"
            header="CONFIRM TRANSACTION"
            content="Earn by selling your crypto on our marketplace."
          />
        </div>
        <div className="card-box-column-2">
          <img src={choose} alt="choose" />
        </div>
        <div className="card-box-column-3">
          <CardBox
            icon="fa-satellite-dish"
            header="RECEIVE YOUR OWN NFTS"
            content="Invest all your crypto at one place on one platform."
          />
          <CardBox
            icon="fa-chess-knight"
            header="TAKE A MARKET TO SELL"
            content="Discover, collect the right crypto collections to buy or sell."
          />
          <CardBox
            icon="fa-boxes-stacked"
            header="DRIVE YOUR COLLECTION"
            content="We make it easy to Discover, Invest and manage."
          />
        </div>
      </div>
    </div>
  );
}

function CardBox({ icon, header, content }) {
  return (
    <div className="card-box-item">
      <i className={"fa solid " + icon}></i>
      <div className="card-box-content">
        <h4>{header}</h4>
        <p>{content}</p>
      </div>
    </div>
  );
}
