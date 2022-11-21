import styles from './searchBar.module.css';

import { Jerechercheunvol } from '../Jerechercheunvol';
import { Select } from '../Select';
import { InputColumn } from '../InputColumn';
import { InputPerson } from '../InputPerson';
import { Button } from '../Button';
export const SearchBar = ({ ...props }: SearchBarProps) => {
  return (
    <div className={`SearchBar ${styles.SearchBar_376_988} ${props.className}`}>
      <div className={`${styles.HeaderSearchBar_376_803}`}>
        <Jerechercheunvol
          className={`${styles.Jerechercheunvol} ${styles.Je_recherche_un_vol_376_804}`}
        />
        <Select
          className={`${styles.Select} ${styles.select_376_866}`}
          option3="multi-destinations"
          option2="aller simple"
          option1="aller-retour"
          titlePopup="Je recherche un vol"
          text="aller-retour"
          Property_1="Default"
        />
        <p className={`text_bold_text ${styles.En_classe_382_1106}`}>
          en classe
        </p>

        <Select
          className={`${styles.Select} ${styles.select_376_869}`}
          option3="Première"
          option2="Affaire"
          option1="Économique"
          titlePopup="en classe :"
          text="Économique"
          Property_1="Default"
        />
      </div>

      <div className={`${styles.Frame6_376_808}`}>
        <InputColumn
          className={`${styles.InputColumn} ${styles.InputColumn_376_919}`}
        />
        <InputColumn
          className={`${styles.InputColumn} ${styles.InputColumn_376_932}`}
        />
        <InputPerson
          className={`${styles.InputPerson} ${styles.inputPerson_376_945}`}
          Property_1="Variant3"
        />
        <Button
          className={`${styles.Button} ${styles.button_376_986}`}
          textButton="RECHERCHER"
        />
      </div>
    </div>
  );
};

type SearchBarProps = React.HTMLAttributes<HTMLDivElement> & {};
