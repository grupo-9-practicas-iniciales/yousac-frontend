import { Input, ToogleThemeButton } from "../components";
import { useForm } from "../hooks/useForm";

const formInitialState = {
  email: "",
  password: "",
};

type FormState = typeof formInitialState;

export const LoginPage = () => {
  const { onInputChange, email, password } =
    useForm<FormState>(formInitialState);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <form className="bg-light dark:bg-dark" onSubmit={onSubmit}>
      <Input
        placeholder="Email"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <ToogleThemeButton fab={true} />
    </form>
  );
};
