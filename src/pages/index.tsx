import styles from '@/styles/Home.module.scss'
import Image from 'next/image';
import ViriyuLogo from '../assets/images/viriyu-01.png'
import Button from '@/components/Button';

export default function Home() {
    return (
        <main className={styles.home}>
            <div className={styles['home__logo']}>
                <Image src={ViriyuLogo} alt="" fill={true} objectFit={'contain'} priority={true}/>
            </div>
            
            <h1>Embed Viriyu directly on your website, for free.</h1>
            
            <div className={styles['home__content']}>
                <iframe
                    className={styles['home__map']}
                    src="http://localhost:3001/"
                    title="Viriyu Map"
                />
                <a href="mailto:kallum.parr@ntlworld.com?subject=Embedding Viriyu">
                <Button className={styles['home__onboarding']} onClick={() => {return}} text="Email us" />
                </a>
            </div>
        </main>
    )
}