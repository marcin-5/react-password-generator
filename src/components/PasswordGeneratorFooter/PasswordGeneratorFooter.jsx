import copyPasteIcon from "../../assets/copy-paste.svg";
import s from "./style.module.css";

export function PasswordGeneratorFooter(props) {
  return (
    <div className={s.root}>
      <div>{props.password}</div>
      <img className={s.icon} src={copyPasteIcon} alt="Copy paste icon" />
    </div>
  );
}
