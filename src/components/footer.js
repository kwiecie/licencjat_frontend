import React from 'react'
import * as footerStyles from "../components/footer.module.scss"

const Footer = () => {  
    return (
        <footer>
            <div className={footerStyles.about}>
                <h4 className={footerStyles.h4}>
                    O projekcie
                </h4>
                <p className={footerStyles.p}>
                    Serwis stanowi integralną część pracy licencjackiej w ramach kierunku Elektroniczne Przetwarzanie Informacji, przygotowanej pod kierunkiem prof. dra. hab. Jerzego Koniora, na Wydziale Zarządzania i Komunikacji Społecznej Uniwersytetu Jagiellońskiego.
                </p>
            </div>
        </footer>
    )
}

export default Footer