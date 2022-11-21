import styles from './select.module.css';

export const Select = ({
  option2,
  option1,
  option3,
  titlePopup,
  text,
  Property_1,
  ...props
}: SelectProps) => {
  return (
    <div
      className={`Select_Property1Default bg_main effect_button_bottom_shadow Select_376_679 ${styles.Select_376_679} ${props.className}`}
      Property_1={Property_1}
    >
      <p className={`text_normal ${styles.Allerretour_306_699}`}>{text}</p>

      <svg className={`${styles.Vector_306_700}`}>
        <path
          d="M 1.2337498664855957 0 L 5.25 5.25808637410201 L 9.266250133514404 0 L 10.5 1.6266847067914207 L 5.25 8.5 L 0 1.6266847067914207 L 1.2337498664855957 0 Z"
          fillRule="nonzero"
        />
      </svg>
    </div>
  );
};

type SelectProps = React.HTMLAttributes<HTMLDivElement> & {
  option2: string;
  option1: string;
  option3: string;
  titlePopup: string;
  text: string;
  Property_1: 'Default' | 'Variant2';
};
