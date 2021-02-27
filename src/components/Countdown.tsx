import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import { FaCheckCircle } from 'react-icons/fa';
import styles from '../styles/components/Countdown.module.css';

export default function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  console.log(minuteLeft);


  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button
          disabled
          className={`${styles.countdownButton} ${styles.countdownButtonDone}`}
        >
          Ciclo encerrado
          <FaCheckCircle size={20} color="#4CD62B" />
        </button>
      ) : (
          <>
            {isActive ? (
              <button
                type="button"
                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                onClick={resetCountdown}
              >
                Abandonar um ciclo
              </button>
            ) : (
                <button
                  type="button"
                  className={styles.countdownButton}
                  onClick={startCountdown}
                >
                  Iniciar um ciclo
                </button>
              )}
          </>
        )}
    </div>
  );
}
