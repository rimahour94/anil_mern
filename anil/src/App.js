import HooksUseState from "./components/hooks/HooksUseState";
import PropsHandling from "./components/props/PropsHandling";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  const dt = new Date();
  console.log(dt);
  const hr = dt.getHours();
  const min = dt.getMinutes();
  let text = "";
  console.log(hr, min);

  if (hr < 12) {
    text = "Good Morning";
  } else if (hr >= 12 && hr < 16) {
    text = "Good Afternoon";
  } else if (hr >= 16 && hr < 20) {
    text = "Good Evening";
  } else if (hr >= 20) {
    text = "Good Night";
  }

  return (
    <>
      {/* <PropsHandling /> */}
      <h2>{text}</h2>
      <HooksUseState />
    </>
  );
}

// function AppOne() {
//   return (
//     <>
//       <h2>App One</h2>
//       <p>THis is Paragraph</p>
//       <button>New</button>
//     </>
//   );
// }

export default App;
// export { AppOne }; // naming export
// there are two types of exports default/naming export
//only one default export allowed per module.
