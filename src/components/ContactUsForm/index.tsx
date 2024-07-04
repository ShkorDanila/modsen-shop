import * as emailjs from '@emailjs/browser';
import { useFormik } from 'formik';
import * as yup from 'yup';

import * as FormStyles from './styled';

export function ContactUsForm() {
  const validationSchema = yup.object().shape({
    firstName: yup
      .string()
      .min(3, 'Name must be at least 3 characters long')
      .required('Required'),
    lastName: yup
      .string()
      .min(3, 'Lastname must be at least 3 characters long')
      .required('Required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    subject: yup
      .string()
      .oneOf(['Error', 'Idea', 'Other'], 'Invalid Type')
      .required('Required'),
    message: yup.string().required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    },
    onSubmit: (values) => {
      try {
        emailjs.send('service_kts1md9', 'template_sfxchak', values);
        alert('Сообщение успешно отправлено!');
        formik.resetForm();
      } catch (e) {
        alert(e);
        return;
      }
    },
    validationSchema: validationSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormStyles.InputsContainer>
        <FormStyles.InputWrapper>
          <FormStyles.Input
            placeholder="First Name"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          <FormStyles.ErrorMessage>
            {formik.errors.firstName ? formik.errors.firstName : ''}
          </FormStyles.ErrorMessage>
        </FormStyles.InputWrapper>
        <FormStyles.InputWrapper>
          <FormStyles.Input
            placeholder="Last Name"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          <FormStyles.ErrorMessage>
            {formik.errors.lastName ? formik.errors.lastName : ''}
          </FormStyles.ErrorMessage>
        </FormStyles.InputWrapper>
      </FormStyles.InputsContainer>
      <FormStyles.InputsContainer>
        <FormStyles.InputWrapper>
          <FormStyles.Input
            placeholder="Email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <FormStyles.ErrorMessage>
            {formik.errors.email ? formik.errors.email : ''}
          </FormStyles.ErrorMessage>
        </FormStyles.InputWrapper>
        <FormStyles.InputWrapper>
          <FormStyles.Select
            name="subject"
            onChange={formik.handleChange}
            value={formik.values.subject}
          >
            <option hidden>Subject</option>
            <option value="Error">Error</option>
            <option value="Idea">Idea</option>
            <option value="Other">Other</option>
          </FormStyles.Select>
          <FormStyles.ErrorMessage>
            {formik.errors.subject ? formik.errors.subject : ''}
          </FormStyles.ErrorMessage>
        </FormStyles.InputWrapper>
      </FormStyles.InputsContainer>
      <FormStyles.ButtonContainer>
        <FormStyles.MessageInput
          placeholder="Message"
          name="message"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.message}
        />
        <FormStyles.ErrorMessage>
          {formik.errors.message ? formik.errors.message : ''}
        </FormStyles.ErrorMessage>
        <FormStyles.SubmitButton type="submit">SEND</FormStyles.SubmitButton>
      </FormStyles.ButtonContainer>
    </form>
  );
}
