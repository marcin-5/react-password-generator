import s from "./style.module.css";

export function PasswordGeneratorBody(props) {
  const submit = (e) => {
    e.preventDefault();
    const formData = {};
    new FormData(e.currentTarget).forEach((value, key) => (formData[key] = value));
    console.log(formData);
    props.onSubmit("Generated Password");
  };

  return (
    <form onSubmit={submit}>
      <div className={s.grid_container}>
        <div className={s.grid_item}>
          Size
          <input name="size" type="number" defaultValue={16} min={6} max={24} />
        </div>
        <div className={s.grid_item}>
          Uppercase
          <input name="uppercase" type="checkbox" defaultChecked />
        </div>
        <div className={s.grid_item}>
          Numbers
          <input name="number" type="checkbox" defaultChecked />
        </div>
        <div className={s.grid_item}>
          Specials
          <input name="special" type="checkbox" defaultChecked />
        </div>
      </div>
      <div className={s.btn_container}>
        <button className={s.btn_generate}>GENERATE</button>
      </div>
    </form>
  );
}
