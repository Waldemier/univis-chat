import { withFormik } from 'formik';
import RegistrationForm from '../components/RegistrationForm';

export default withFormik({
    mapPropsToValues: () => ({}),
    validate: values => {
        let errors = {};
        if (!values.email) { //id email in form input
            errors.email = 'Введіть email';
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Некоректний email';
        }

        if (!values.password) { //id password in form input
            errors.password = 'Введіть пароль';
        }
        else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/.test(values.password)) {
            errors.password = 'Занадто легкий пароль. Довжина має бути не менше 6 символів'
        }

        return errors;
    },
    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },
    displayName: 'RegistrationForm'
})(RegistrationForm);;