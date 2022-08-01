import React from 'react'
import * as footerStyles from "../components/footer.module.scss"

const Footer = () => {  
    return (
        <footer>
            <div className={footerStyles.about}>
                <p className={footerStyles.p}>
                    © 2022 Copyright: Olga Kwiecień
                </p>
            </div>
        </footer>
    )
}

export default Footer