const FxCupIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 155.4 51.2" role="img" aria-label="FXCup">
    <defs>
      <linearGradient id="cup-gradient" x1="0" y1="25.6" x2="155.4" y2="25.6" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00ff95" />
        <stop offset=".46" stopColor="#2cb297" />
        <stop offset="1" stopColor="#047b79" />
      </linearGradient>
    </defs>
    <path className="cup-piece cup-piece--lower" d="M70.24 34.67h12.08c.37 0 .58.41.37.71L71.27 50.98a.48.48 0 0 1-.38.2l-48.18-.02c-.41 0-.64-.54-.37-.89l6.71-9.18a.48.48 0 0 1 .38-.2h35.9c.15 0 .29-.08.38-.2l4.17-5.83a.45.45 0 0 1 .36-.19Z" fill="url(#cup-gradient)" />
    <path className="cup-piece cup-piece--spark" d="m83.44 34.33-.13.18-6.56-8.91 6.69 8.73Z" fill="url(#cup-gradient)" />
    <path className="cup-piece cup-piece--spark-two" d="M83.71 34.67h-.29l-.11-.16-6.56-8.91 6.69 8.73.27.34Z" fill="url(#cup-gradient)" />
    <path className="cup-piece cup-piece--main" d="m155.27.71-21.75 29.76a.44.44 0 0 1-.35.18H120.6c-.36 0-.57-.4-.36-.69l13.65-18.51c.21-.3 0-.71-.37-.71h-32.71a.45.45 0 0 0-.37.2L90.14 25.12a.46.46 0 0 0 .03.51l10.77 14.86c.09.11.22.17.36.17h23.96c.35 0 .55.4.34.66l-7.06 9.67a.45.45 0 0 1-.36.18H95.81a.47.47 0 0 1-.38-.2L65.69 10.59H42.57a.48.48 0 0 0-.38.2l-6.4 8.7c-.27.35-.04.89.37.89h19.07c.42 0 .64.55.36.9l-6.68 9.18a.45.45 0 0 1-.37.19H27.78a.48.48 0 0 0-.38.21L12.81 50.97a.47.47 0 0 1-.38.2H.49c-.41 0-.64-.53-.38-.88L36.46.54a.47.47 0 0 1 .38-.2h34.33c.14 0 .28.08.37.2l11.53 15.64c.18.25.55.24.72 0L95.1.28a.44.44 0 0 1 .36-.19L142.3.03 154.91 0c.36 0 .58.42.36.71Z" fill="url(#cup-gradient)" />
    <path className="cup-trail cup-trail--one" d="M18 31C41 18 56 14 79 14" />
    <path className="cup-trail cup-trail--two" d="M71 44c31 0 50-9 68-27" />
  </svg>
);

function Loader() {
  return (
    <div className="loader" aria-label="Loading FXCup">
      <div className="loader__arena">
        <div className="loader__name">FXCUP</div>
        <div className="loader__line" />
        <svg className="loader__trophy" viewBox="0 0 220 190" aria-hidden="true">
          <defs>
            <linearGradient id="trophy-gradient" x1="25" y1="20" x2="190" y2="175" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00ff95" />
              <stop offset=".56" stopColor="#2cb297" />
              <stop offset="1" stopColor="#047b79" />
            </linearGradient>
          </defs>
          <path className="trophy-part trophy-part--handles" d="M58 39H28l7 32 37 19M162 39h30l-7 32-37 19" />
          <path className="trophy-part trophy-part--bowl" d="M54 24h112l-13 57-30 29H97L67 81 54 24Z" />
          <path className="trophy-part trophy-part--stem" d="M99 110h22v29h20v16H79v-16h20v-29Z" />
          <path className="trophy-part trophy-part--base" d="M68 168h84" />
          <path className="trophy-shine" d="m78 35 12 50M132 35l-8 24" />
        </svg>
        <FxCupIcon className="loader__cup" />
        <div className="loader__caption">MONTHLY TRADING CUP</div>
        <div className="loader__particles"><i /><i /><i /><i /></div>
      </div>
    </div>
  );
}

export default function Home() {
  return <main className="black-screen"><Loader /></main>;
}
