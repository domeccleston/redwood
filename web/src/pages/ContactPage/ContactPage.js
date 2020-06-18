import BlogLayout from 'src/layouts/BlogLayout'
import {
  Form,
  Submit,
  TextAreaField,
  TextField,
  FieldError,
  Label,
  useMutation,
  FormError,
} from '@redwoodjs/web'

import { useForm } from 'react-hook-form'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const formMethods = useForm()

  const [create, { loading, error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      alert('Thank you for your submission!')
    },
  })

  const onSubmit = (data) => {
    create({ variables: { input: data } })
    console.log(data)
    formMethods.reset()
  }

  return (
    <BlogLayout>
      <Form onSubmit={onSubmit} validation={{ mode: 'onBlur' }} formMethods={formMethods} >
        <FormError 
          error={error}
          wrapperStyle={{ color: 'red', backgroundColor: 'lavenderblush' }}
        />
        <label htmlFor="name">Name</label>
        <TextField name="name" validation={{ required: true }} />
        <FieldError name="name" errorClassName="error" />

        <label htmlFor="email">Email</label>
        <TextField
          name="email"
          validation={{
            required: true,
            // pattern: {
            //   value: /[^@]+@[^.]+\..+/,
            //   message: 'Please enter a valid email address',
            // },
          }}
        />
        <FieldError name="email" errorClassName="error" />

        <label htmlFor="message">Message</label>
        <TextAreaField name="message" validation={{ required: true }} />
        <FieldError name="message" errorClassName="error" />

        <Submit disabled={loading}>Save</Submit>
      </Form>
    </BlogLayout>
  )
}

export default ContactPage
