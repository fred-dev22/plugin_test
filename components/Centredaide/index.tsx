import styles from './centredaide.module.css';

export const Centredaide = ({ Property_1, ...props }: CentredaideProps) => {
  return (
    <div
      className={`Centredaide_Property1Default Centredaide_429_957 ${styles.Centredaide_429_957} ${props.className}`}
      Property_1={Property_1}
    >
      <p className={`text_textnavbar ${styles.Centredaide_429_955}`}>
        Centre d'aide
      </p>
    </div>
  );
};

type CentredaideProps = React.HTMLAttributes<HTMLDivElement> & {
  Property_1: 'Default' | 'Variant2';
};
