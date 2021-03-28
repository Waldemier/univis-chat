import LoginForm from '../components/LoginForm';
import { withFormik } from 'formik';
import validationUtilits from '../../../utils/validationUtilits';

//FIXME: after click on button with empty fields validation has not show the errors (problem with empty default properties value)

export default withFormik({
    mapPropsToValues: () => ({}),
    validate: values => {

        let errors = {};

        validationUtilits({ isAuth: true, values, errors, confirm: false });

        return errors;
    },
    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },

    displayName: 'LoginForm'
})(LoginForm);