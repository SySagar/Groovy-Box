import * as Label from '@radix-ui/react-label';
import styles from './label.module.css';

export const LabelDemo = (
    { htmlFor='firstname', children='hello' }: { htmlFor: string; children: string }
) => (
  <div
    style={{ display: 'flex', padding: '0 20px', flexWrap: 'wrap', gap: 15, alignItems: 'center' }}
  >
    <Label.Root className={styles.LabelRoot} htmlFor={htmlFor}>
        {children}
    </Label.Root>
    <input className={styles.Input} type="text" id="firstName" defaultValue="Pedro Duarte" />
  </div>
);
