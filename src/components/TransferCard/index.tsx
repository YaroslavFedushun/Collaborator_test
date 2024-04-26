import cardLogo from "../../assets/images/card-logo.png";
import styles from "./TransferCard.module.scss";
import { FlightDetails } from "../../interface/FlightDetails.interface";

function index({ data }: { data: FlightDetails }) {
  return (
    <div className={styles.flightCard}>
      <div className={styles.flightCard__head}>
        <span className={styles.flightCard__price}>
          {data.price.toLocaleString()}$
        </span>
        <img
          className={styles.flightCard__logo}
          alt={"AirLine For Europe"}
          src={cardLogo}
        />
      </div>

      <div className={styles.flightCard__body}>
        {[data.from, data.to].map((route, index) => (
          <div className={styles.flightCard__line} key={index}>
            <div className={styles.flightCard__item}>
              <span className={styles.flightCard__title}>{route.route}</span>
              <span className={styles.flightCard__info}>{route.time}</span>
            </div>
            <div className={styles.flightCard__item}>
              <span className={styles.flightCard__title}>{route.status}</span>
              <span className={styles.flightCard__info}>{route.duration}</span>
            </div>
            <div className={styles.flightCard__item}>
              <span className={styles.flightCard__title}>
                {route.connections.length
                  ? `${route.connections.length} ${route.connections.length > 1 ? 'пересадки': 'пересадка'}`
                  : "без пересадок"}
              </span>
              <span className={styles.flightCard__info}>
                {route.connections.join(", ")}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default index;
