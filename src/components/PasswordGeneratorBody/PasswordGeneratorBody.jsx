import s from "./style.module.css";

export function PasswordGeneratorBody() {
  return (
    <form>
      <div className={s.grid_container}>
        <div className={s.grid_item}>
          Size
          <input type="number" defaultValue={16} min={6} max={24}/>
        </div>
        <div className={s.grid_item}>
          Uppercase
          <input type="checkbox" defaultChecked />
        </div>
        <div className={s.grid_item}>
          Numbers
          <input type="checkbox" defaultChecked />
        </div>
        <div className={s.grid_item}>
          Specials
          <input type="checkbox" defaultChecked />
        </div>
      </div>
      <div className={s.btn_container}>
        <button className={s.btn_generate}>GENERATE</button>
      </div>
    </form>
  );
}
