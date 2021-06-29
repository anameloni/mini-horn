import QuestionnaireItem from '../QuestionnaireItem/QuestionnaireItem';

export type FormItem = {
  category: string;
  type: string;
  id: string;
  ref: string; //optional
  label: string;
  placeholder: string; //optional
  required: boolean;
};

export type QuestionnaireType = {
  id: string;
  ref: string;
  title: string;
  type: string;
  items: FormItem [];
};

export type QuestionnaireProps = {
  questionnaire: QuestionnaireType;
}


export function Questionnaire(props: QuestionnaireProps) {
  return (
    <div>
      <h1>{props.questionnaire.title}</h1>
      <ul>
        {props.questionnaire.items.map((item: FormItem) => (
          <QuestionnaireItem item = {item} />
        ))}
      </ul>
    </div>
  );
}