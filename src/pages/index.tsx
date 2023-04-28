import Button from '@/components/Button';
import styles from '@/styles/Home.module.scss';
import Image from 'next/image';
import ViriyuLogo from '../assets/images/viriyu-01.png';

export default function Home() {
    return (
        <main className={styles.home}>
            <a className={styles['home__logo']} href="https://viriyu.com">
                <Image
                    src={ViriyuLogo}
                    alt=""
                    fill={true}
                    objectFit={'contain'}
                    priority={true}
                />
            </a>

            <h1>Embed Viriyu directly on your website, for free.</h1>

            <div className={styles['home__content']}>
                <iframe
                    className={styles['home__map']}
                    src="https://map.viriyu.com"
                    title="Viriyu Map"
                />
                <a href="mailto:kallum.parr@ntlworld.com?subject=Embedding Viriyu">
                    <Button
                        className={styles['home__onboarding']}
                        onClick={() => {
                            return;
                        }}
                        text="Email us"
                    />
                </a>
                <p className={styles['home__notice']}>Free for personal use, commercial licence may apply.</p>
            </div>
        </main>
    );
}