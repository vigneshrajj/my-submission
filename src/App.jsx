import "./styles.scss";
import SeaImage from "./assets/sea-shore.jpg";
import RightView from "./components/RightView";

export default function App() {
  return (
    <div className="App">
      <img className="sea-image" src={SeaImage} alt="sea shore" />
      <RightView />
    </div>
  );
}
