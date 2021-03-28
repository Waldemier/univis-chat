import { withFormik } from 'formik';
import RegistrationForm from '../components/RegistrationForm';
import validationUtilits from '../../../utils/validationUtilits';

//FIXME: after click on button with empty fields validation has not show the errors (problem with empty default properties value)

export default withFormik({
    mapPropsToValues: () => ({ confirm: '' }),
    validate: values => {

        let errors = {};

        validationUtilits({ isAuth: false, values, errors });

        return errors;
    },
    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },

    displayName: 'RegistrationForm'
})(RegistrationForm);