import styles from './inputColumn.module.css';

import { InputWithLabel } from '../InputWithLabel';
export const InputColumn = ({ ...props }: InputColumnProps) => {
  return (
    <div
      className={`InputColumn stroke_border_color effect_button_bottom_shadow ${styles.InputColumn_20_34} ${props.className}`}
    >
      <InputWithLabel
        className={`${styles.InputWithLabel} ${styles.InputWithLabel_308_656}`}
        placeholder="placeholder"
        withIcon
        label="Label"
        variantInp="Default"
      />
      <InputWithLabel
        className={`${styles.InputWithLabel} ${styles.InputWithLabel_308_902}`}
        placeholder="placeholder"
        withIcon
        label="Label"
        variantInp="Default"
      />
    </div>
  );
};

type InputColumnProps = React.HTMLAttributes<HTMLDivElement> & {};
