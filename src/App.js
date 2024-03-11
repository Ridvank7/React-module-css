import Card from "./components/card/Card";
import data from "./utils/data";

function App() {
  console.log(data);
  return (
    <>
      {data.map((item, index) => {
        const { id, language, img, btnName } = item;
        return (
          <Card key={index} language={language} img={img} btnName={btnName} />
        );
      })}
    </>
  );
}

export default App;
