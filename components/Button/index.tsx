import styles from './button.module.css';

export const Button = ({ textButton, ...props }: ButtonProps) => {
  return (
    <div
      className={`Button bg_main effect_button_bottom_shadow ${styles.Button_58_487} ${props.className}`}
    >
      <p className={`text_bold_text ${styles.RECHERCHER_58_486}`}>
        {textButton}
      </p>
    </div>
  );
};

type ButtonProps = React.HTMLAttributes<HTMLDivElement> & {
  textButton: string;
};
