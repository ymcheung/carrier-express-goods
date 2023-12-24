import { z } from 'zod';
import { createSignal, createResource } from 'solid-js';
import TextInput from '@components/TextInput';
import {
  createForm,
  // email,
  required,
  zodForm,
  type SubmitHandler
} from '@modular-forms/solid';
import { supabase } from '../lib/supabase';
import { isSignedIn } from '../auth';
import HourGlass from '@elements/icons/HourGlass';
import './styles/mailingList.scss';

const emailInputSchema = z.object({
  email: z.string().email({ message: '⬆️ Email 格式不對 🤔' })
});

type EmailInput = z.infer<typeof emailInputSchema>;

async function getSession() {
  const { data } = await supabase.auth.getSession();
  return !!data.session?.user;
}

export default function MailingList() {
  // const [session] = createResource(getSession);
  const [session] = createResource(isSignedIn);

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
        setIsSubmitted(false);
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label class="label withIcon" for="email">
        <HourGlass />
        <span class="labelText">追蹤最新消息</span>
      </label>
      <div class="formLayout">
        {session() || isSubmitted() ? (
          <p class="sentMagic">
            歡迎對貓商品有興趣！{isSubmitted() ? '確認信箱正確之後，' : '我們'}
            很快就會與你聯繫。
          </p>
        ) : (
          <>
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
              <p class="promise">準備好之後，每個月與你分享一篇有趣的彙整。</p>
              <div class="actionButton">
                <button
                  class="submit lgspt-submit-email"
                  type="submit"
                  disabled={emailInput.submitting}
                >
                  {emailInput.submitting ? '請稍等...' : '送出'}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </Form>
  );
}
