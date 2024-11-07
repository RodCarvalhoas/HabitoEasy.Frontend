import { AlertInstructions, Container, CreateAccount, DivCreateAccount, DivInnerCard, DivRegisterForm, HaveAccText, ForgotPasswordText, Form, ImageContainer, InnerContainer, RegisterImage, OrActualText, OrText, SpacedInput, TextContainer, TitleAnnouncer, TitleDescription, RegisterTitle } from "./RegisterPage.styles";
import RegisterImageIcon from "../../assets/registerImg.jpg"
import { useFormik } from "formik";
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useLogin } from "../../hooks/user/useLogin";
import Button from "../../components/Button/Button";

export default function RegisterPage() {
    const navigate = useNavigate();
    const {mutate: login, isLoading, isError, error: loginError} = useLogin();

    const validationSchema = yup.object({
        name: yup
          .string()
          .required('Digite o seu nome'),
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
            name: '',
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

    const handleEnterClicked = () => {
        navigate('/auth');
    }

    return(
        <Container>
            <ImageContainer>
                <RegisterImage src={RegisterImageIcon} alt="Foguete decolando com os hábitos"/>
                <TextContainer>
                    <TitleAnnouncer>
                        Você pode ir mais longe
                    </TitleAnnouncer>
                    <TitleDescription>
                        Rastreando os seus hábitos
                    </TitleDescription>
                </TextContainer>
            </ImageContainer>
            <InnerContainer>
                <DivRegisterForm>
                    <DivInnerCard>
                        <RegisterTitle>Cadastrar</RegisterTitle>
                        
                        <DivCreateAccount>
                            <HaveAccText>Já tem uma conta?</HaveAccText>
                            <CreateAccount onClick={handleEnterClicked}>
                                Entrar
                            </CreateAccount>
                        </DivCreateAccount>
                        <Form onSubmit={formik.handleSubmit}>
                            {!isLoading && (!!isError) && (
                                <AlertInstructions severity="error">
                                    {loginError?.message}
                                </AlertInstructions>
                            )}
                            <SpacedInput
                                label="Nome"
                                inputId="name"
                                type="text"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                error={formik.touched.name && Boolean(formik.errors.name)}
                                errorText={formik.errors.name || ''}
                            />
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
                        </Form>
                    </DivInnerCard>
                </DivRegisterForm>
            </InnerContainer>
        </Container>
    )
}