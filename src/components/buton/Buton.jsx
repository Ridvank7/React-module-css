import ButonStyle from "./buton.module.css";

function Buton({ btn }) {
  return (
    <div className={ButonStyle.title}>
      <button className={ButonStyle["btn"]}>{btn}</button>
    </div>
  );
}

export default Buton;
