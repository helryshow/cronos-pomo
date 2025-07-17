import styles from './styles.module.css';

type DefautButtonProps = {
    icon: React.ReactNode;
    color?: 'green' | 'red';
  
} & React.ComponentProps<'button'>;

export function DefautButton({ icon, color ='green', ...props }: DefautButtonProps) {
    return (
        <>
        <button className={`${styles.button} ${styles[color]}`}  {...props}>
             {icon} </button>
       </> 
    )
}