import styles from "./homeScreen.module.css";

import { Carrousel } from "../Carrousel";
import { SearchBar } from "../SearchBar";
import { Grermarservation } from "../Grermarservation";
import { Centredaide } from "../Centredaide";
export const HomeScreen = () => {
  return (
    <div className={`${styles.HomeScreen_222_422}`}>
      <div className={`${styles.Frame90_426_923}`}>
        <Carrousel
          className={`${styles.Carrousel} ${styles.Carrousel_426_924}`}
          Property_1="carrousel"
        />
        <SearchBar
          className={`${styles.SearchBar} ${styles.searchBar_386_1172}`}
        />
        <div className={`${styles.Frame91_426_940}`}>
          <div className={`bg_main ${styles.Frame92_429_942}`}>
            <p className={`${styles.VoyageztraversleCameroun_426_941}`}>
              Voyagez à travers le Cameroun.
            </p>
          </div>

          <div className={`bg_main ${styles.Frame93_429_943}`}>
            <p
              className={`text_white ${styles.Travaillervoyagerconomiserrpter_429_944}`}
            >
              Travailler, voyager, économiser, répéter
            </p>
          </div>
        </div>

        <div className={`bg_white ${styles.Frame94_429_945}`}>
          <div className={`${styles.Avion_429_990}`} />
          <div className={`${styles.Frame96_429_962}`}>
            <Grermarservation
              className={`${styles.Grermarservation} ${styles.G_rer_ma_r_servation_429_988}`}
              Property_1="Default"
            />
            <Centredaide
              className={`${styles.Centredaide} ${styles.Centre_d_aide_429_979}`}
              Property_1="Default"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
