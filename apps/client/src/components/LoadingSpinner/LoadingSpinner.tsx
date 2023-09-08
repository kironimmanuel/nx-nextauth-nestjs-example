import styles from './LoadingSpinner.module.css';

export default function LoadingSpinner() {
    return (
        <div className='w-full h-full flex justify-center items-center p-10'>
            <span className={styles.loader}></span>
        </div>
    );
}
