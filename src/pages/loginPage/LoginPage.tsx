import { AlertInstructions, Container, CreateAccount, DivCreateAccount, DivInnerCard, DivLoginForm, DntHave, ForgotPasswordText, Form, ImageContainer, InnerContainer, LoginImage, OrActualText, OrText, SpacedInput, TextContainer, TitleAnnouncer, TitleDescription, LoginTitle } from "./LoginPage.styles";
import LoginImageIcon from "../../assets/loginImg.jpg"
import { useFormik } from "formik";
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useLogin } from "../../hooks/user/useLogin";
import Button from "../../components/Button/Button";


export default function LoginPage() {
    const navigate = useNavigate();
    const {mutate: login, isLoading, isError, error: loginError} = useLogin();

    const validationSchema = yup.object({
        email: yup
          .string()
          .email('Digite um email válido')
          .required('Digite seu email'),
        password: yup
            .string()
            .min(8, 'Sua senha deve possuir mais do que 8 caracteres')
            .required('Digite sua senha')
    });
 
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: validationSchema,
        validateOnChange: true,
        onSubmit: () => {
            const submitData = {
                email: formik.values.email, 
                password: formik.values.password
            }

            login(submitData);
        }
    });

    const handleRegisterClicked = () => {
        navigate('/auth/register');
    }

    const handleForgotPasswordClick = () => {
        navigate('/auth/forgot');
    }

    return(
        <Container>
            <ImageContainer>
                <LoginImage src={LoginImageIcon} alt="Desenho de um jovem explorando seus hábitos"/>
                <TextContainer>
                    <TitleAnnouncer>
                        Rastreie os seus hábitos
                    </TitleAnnouncer>
                    <TitleDescription>
                        Tenha mais controle dos seus hábitos
                    </TitleDescription>
                </TextContainer>
            </ImageContainer>
            <InnerContainer>
                <DivLoginForm>
                    <DivInnerCard>
                        <LoginTitle>Entrar</LoginTitle>
                        <DivCreateAccount>
                            <DntHave>Não tem uma conta?</DntHave>
                            <CreateAccount onClick={handleRegisterClicked}>
                                Cadastrar
                            </CreateAccount>
                        </DivCreateAccount>
                        <Form onSubmit={formik.handleSubmit}>
                            {!isLoading && (!!isError) && (
                                <AlertInstructions severity="error">
                                    {loginError?.message}
                                </AlertInstructions>
                            )}
                            <SpacedInput
                                label="Email"
                                inputId="email"
                                type="email"
                                autocomplete="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                errorText={formik.errors.email || ''}
                            />
                            <SpacedInput
                                label="Senha"
                                inputId="password"
                                type="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                autocomplete="current-password"
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                errorText={formik.errors.password || ''}
                            />
                            <Button
                                type="submit"
                                text="Entrar"
                                buttonType="primary"
                                loading={isLoading}
                                onClick={formik.handleSubmit}
                            />
                            <ForgotPasswordText onClick={handleForgotPasswordClick}>
                                Esqueceu sua senha?
                            </ForgotPasswordText>
                        </Form>
                    </DivInnerCard>
                </DivLoginForm>
            </InnerContainer>
        </Container>
    )
}