import Input from '../../../shared/input/input/input'
import {
    BackgroundImage,
    ContainerLogin,
    ContainerLoginScreen,
    LimitedCointainer,
    LogoImage
}   from "../styles/loginScreen.styles";


const LoginScreen = () => {
    
    return (
        <div>
            <ContainerLoginScreen>
                <ContainerLogin>
                    <LimitedCointainer>
                        <LogoImage src="" />
                        <Input title="USUÁRIO" />
                        <Input title="SENHA" />
                    </LimitedCointainer>
                </ContainerLogin>
                <BackgroundImage src="./background.png" />
            </ContainerLoginScreen>
        </div>
    );
};

export default LoginScreen;