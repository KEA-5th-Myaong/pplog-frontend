import { FORM_TEXT } from '../../_constants/forms';
import SignUpForm from '../_components/SignUpForm';

export default function SignUpContainer() {
  return (
    <div className="flex-center flex-col self-stretch">
      <div className="flex flex-col items-center w-1/3">
        <p className="mb-9 form-title">{FORM_TEXT[4]}</p>
        <SignUpForm />
      </div>
    </div>
  );
}
