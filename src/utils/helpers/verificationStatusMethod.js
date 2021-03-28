export default function verificationStatusMethod(field, touched, errors, values) {
    if (touched[field] && errors[field]) {
        return 'error';
    }
    else if (touched[field] && !errors[field] && values[field] == null) {
        return '';
    }
    else if (!touched[field]) {
        return '';
    }
    else {
        return 'success';
    }
}