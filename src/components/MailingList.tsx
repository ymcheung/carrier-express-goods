import { z } from 'zod';
import { createSignal } from 'solid-js';
import TextInput from '@components/TextInput';
import {
  createForm,
  // email,
  required,
  zodForm,
  type SubmitHandler
} from '@modular-forms/solid';
import { supabase } from '../lib/supabase';
import './styles/mailingList.scss';

const emailInputSchema = z.object({
  email: z.string().email({ message: '⬆️ Email 格式不對 🤔' })
});

type EmailInput = z.infer<typeof emailInputSchema>;

export default function MailingList() {
  // async function handleLoggedInCheck() {
  //   const { data, error } = await supabase.auth.getSession();

  //   console.log({ data });
  // }
  // const isLoggedIn = handleLoggedInCheck();
  // handleLoggedInCheck();
  //
  const [isSubmitted, setIsSubmitted] = createSignal(false);

  const [emailInput, { Form, Field }] = createForm<EmailInput>({
    validate: zodForm(emailInputSchema)
  });

  const handleSubmit: SubmitHandler<EmailInput> = async (values) => {
    try {
      const { error } = await supabase.auth.signInWithOtp({
        ...values
      });
      if (error) throw error;
      setIsSubmitted(true);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      console.log('success');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label class="label" for="email">
        訂閱最新訊息
      </label>
      <div class="formLayout">
        {isSubmitted() ? (
          '歡迎對貓商品有興趣！確認信箱正確之後，很快就會與你聯繫。'
        ) : (
          <>
            {' '}
            <div>
              <Field
                name="email"
                validate={[
                  required('⬆️ 沒填寫 Email 喔')
                  //  email('⬆️ Email 格式不對 🤔')
                ]}
              >
                {(field, props) => {
                  return (
                    <TextInput
                      type="email"
                      label="Email"
                      value={field.value}
                      placeholder="Email 信箱位址"
                      error={field.error}
                      required
                      {...props}
                    />
                  );
                }}
              </Field>
            </div>
            <div class="action">
              <button
                class="submit"
                type="submit"
                disabled={emailInput.submitting}
              >
                送出
              </button>
            </div>
          </>
        )}
        <div>
          <p class="promise">每個月最多分享一篇有趣的彙整。</p>
        </div>
      </div>
    </Form>
  );
}
