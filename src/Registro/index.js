import React from 'react';
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton
} from './SignUpElements';

const SignUp = () => {
    return (
        <>
        <Container>
            <FormWrap>
                <Icon to ="/">TURI</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Regístrate</FormH1>
                        <FormLabel htmlFor='for'>Username</FormLabel>
                        <FormInput type="text" required></FormInput>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type="email" required></FormInput>
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type="password" required></FormInput>
                        <FormLabel htmlFor='for'>Confirm Password</FormLabel>
                        <FormInput type="password" required></FormInput>
                        <FormButton>Registrarte</FormButton>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
        </>
    )
}

export default SignUp;
