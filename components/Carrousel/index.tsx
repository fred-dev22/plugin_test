import styles from './carrousel.module.css';

export const Carrousel = ({ Property_1, ...props }: CarrouselProps) => {
  return (
    <div
      className={`Carrousel_Property1carrousel Carrousel_426_908 ${styles.Carrousel_426_908} ${props.className}`}
      Property_1={Property_1}
    >
      <div className={`${styles.UnsplashHVytxpsuIxg_426_884}`} />
      <div className={`${styles.UnsplashoCdVtGFeDC0_426_885}`} />
      <div className={`${styles.UnsplashpXnMG0FfSwA_426_886}`} />
      <div className={`${styles.UnsplashtOYuS3Uk5Yk_426_887}`} />
    </div>
  );
};

type CarrouselProps = React.HTMLAttributes<HTMLDivElement> & {
  Property_1: 'carrousel' | 'carrousel 2' | 'carrousel 3' | 'carrousel 4';
};
