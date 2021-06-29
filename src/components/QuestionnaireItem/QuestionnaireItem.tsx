import { FormItem } from "../Questionnaire/Questionnaire";

type ItemProps = {
  item: FormItem;
}

export default function QuestionnaireItem(props: ItemProps) {
  let myInput;

  switch (props.item.type) {
    case "text":
      myInput = <input type="text" placeholder={props.item.placeholder} />;
      break;
    case "email":
      myInput = <input type="email" placeholder={props.item.placeholder} />;
      break;
    case "textArea":
      myInput = (
        <textarea name="textArea" defaultValue={props.item.placeholder}></textarea>
      );
      break;
    default:
      throw new Error("erro");
  }

  return (
    <li key={props.item.id}>
      <h3>{props.item.label}</h3> 
      <br />
      {myInput}
    </li>
  );
}