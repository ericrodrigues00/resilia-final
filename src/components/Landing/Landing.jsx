import { LandingText, MainBg, MainImg } from "./styled"


export function Iniciar(){
    return(
    <MainBg>
        <section>
            <LandingText>
                <h3>Welcome To Alexandria</h3>
                <p>The most complete book database of the internet</p>
            </LandingText>
            <MainImg>
                <img src="/img/asset.png" alt="asset" />
            </MainImg>
        </section>    
    </MainBg>

    )
}

