import styles from '../styles/Home.module.css'

const Main = ({numberOfWhitelisted, renderButton}) => {
    return (
        <div className={styles.main}>
            <div>
                <h1 className={styles.title}>Welcome to Binna Devs!</h1>
                
                <div className={styles.description}>
                    Its an NFT collection for developers in Crypto.
                </div>
                
                <div className={styles.description}>
                    {numberOfWhitelisted} have already joined the Whitelist
                </div>

                {renderButton()}
            </div>
          
        <div>
          <img className={styles.image} src="./crypto-devs.svg" />
        </div>
    </div>
  )
}

export default Main