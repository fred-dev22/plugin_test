import styles from './jerechercheunvol.module.css';

export const Jerechercheunvol = ({ ...props }: JerechercheunvolProps) => {
  return (
    <div
      className={`Jerechercheunvol ${styles.Jerechercheunvol_64_75} ${props.className}`}
    >
      <p className={`text_bold_text ${styles.Jerechercheunvol_51_112}`}>
        Je recherche un vol
      </p>
    </div>
  );
};

type JerechercheunvolProps = React.HTMLAttributes<HTMLDivElement> & {};
