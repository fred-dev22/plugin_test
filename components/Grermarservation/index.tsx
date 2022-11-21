import styles from './grermarservation.module.css';

export const Grermarservation = ({
  Property_1,
  ...props
}: GrermarservationProps) => {
  return (
    <div
      className={`Grermarservation_Property1Default Grermarservation_429_983 ${styles.Grermarservation_429_983} ${props.className}`}
      Property_1={Property_1}
    >
      <p className={`text_textnavbar ${styles.Grermarservation_429_981}`}>
        Gérer ma réservation
      </p>
    </div>
  );
};

type GrermarservationProps = React.HTMLAttributes<HTMLDivElement> & {
  Property_1: 'Default' | 'Variant2';
};
