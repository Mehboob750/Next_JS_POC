import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import styles from '../styles/Form.module.css'
export default Form;

function Form() {
    // form validation rules 
    const validationSchema = Yup.object().shape({
        image: Yup
        .mixed()
        .required("You need to provide a file"),
        title: Yup.string()
            .required('Title is required'),
        firstName: Yup.string()
            .required('First Name is required'),
        lastName: Yup.string()
            .required('Last name is required'),
        dob: Yup.string()
            .required('Date of Birth is required')
            .matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/, 'Date of Birth must be a valid date in the format YYYY-MM-DD'),
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        password: Yup.string()
            .required('Password is required')
            .min(8, 'Password must be at least 8 characters'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
        acceptTermsandConditions: Yup.bool()
            .oneOf([true], 'You must accept our terms & conditions')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    console.log('register==>',register)
    console.log('handleSubmit==>',handleSubmit)
    console.log('reset==>',reset)
    console.log('formState==>',formState)
    const { errors } = formState;

    function onSubmit(data) {
        // display form data on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
        return false;
    }

    return (
        <div className={styles.form}>
        <div className={styles.formContainer}>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <div>
                            <lable>Image</lable>
                            <input name="image" type="file" accept=".jpg,.jpeg,.png" {...register('image')} />
                            <div className={styles.invalidFeedback}>{errors.image?.message}</div>
                            <label>Title</label>
                            <select {...register('title')}>
                                <option value=""></option>
                                <option value="Mr">Mr</option>
                                <option value="Mrs">Mrs</option>
                                <option value="Miss">Miss</option>
                                <option value="Ms">Ms</option>
                            </select>
                            <div className={styles.invalidFeedback}>{errors.title?.message}</div>
                        </div>
                        <div>
                            <label>First Name</label>
                            <input name="firstName" type="text" {...register('firstName')} />
                            <div className={styles.invalidFeedback}>{errors.firstName?.message}</div>
                        </div>
                        <div>
                            <label>Last Name</label>
                            <input name="lastName" type="text" {...register('lastName')} />
                            <div className={styles.invalidFeedback}>{errors.lastName?.message}</div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>Date of Birth</label>
                            <input name="dob" type="date" {...register('dob')} />
                            <div className={styles.invalidFeedback}>{errors.dob?.message}</div>
                        </div>
                        <div>
                            <label>Email</label>
                            <input name="email" type="text" {...register('email')} />
                            <div className={styles.invalidFeedback}>{errors.email?.message}</div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>Password</label>
                            <input name="password" type="password" {...register('password')} />
                            <div className={styles.invalidFeedback}>{errors.password?.message}</div>
                        </div>
                        <div>
                            <label>Confirm Password</label>
                            <input name="confirmPassword" type="password" {...register('confirmPassword')} />
                            <div className={styles.invalidFeedback}>{errors.confirmPassword?.message}</div>
                        </div>
                    </div>
                    <div>
                        <input name="acceptTermsandConditions" type="checkbox" {...register('acceptTermsandConditions')} id="acceptTermsandConditions" />
                        <label htmlFor="acceptTermsandConditions">Accept Terms & Conditions</label>
                        <div className={styles.invalidFeedback}>{errors.acceptTermsandConditions?.message}</div>
                    </div>
                    <div>
                        <button type="submit">Register</button>
                        <button type="button" onClick={() => reset()}>Reset</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
       
    );
}