import { useRef } from 'react';
import { ACTION } from '../../Constants/Constants';
import Button from '../Button/Button';
import Section from '../Section/Section';
import styles from './Contact.module.css';

const Contact = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const queryRef = useRef<HTMLTextAreaElement>(null);
  return (
    <Section heading='Contace Me' id={ACTION.CONTACT}>
        <form>
            <input className={styles.input} placeholder="name" type="text"/>
            <input className={styles.input} placeholder='Phone Number' type='number'/>
            <input className={styles.input} placeholder='Email' ref={emailRef} type='email'/>
            <textarea className={styles.input} placeholder='Query' ref={queryRef}/>
            <Button type='submit' variant='outlined'>
                <a href={`mailto:insravat@gmail.com?body=${queryRef.current?.value}`}>Send</a>
            </Button>
        </form>
    </Section>
  )
}

export default Contact