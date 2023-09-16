import SingInPageView from "./SingInPageView";
import SignInService from "../../services/SignInService";
import { useTheme } from "../../hooks/useTheme";

const SingInPageContainer = () => {
  const buttonText = "Zaloguj";
  const usernamePlaceholderText = "Nazwa użytkownika";
  const passwordPlaceholderText = "Hasło";
  const welcomeText = "Zaloguj się";
  const defaultInputClassName = "form__input";
  const errorInputClassName = "form__input--error";

  const ErrorText = (inputName) =>
    `${inputName} musi zawierać od 5 do 15 znaków!`;
  const { logInFunction, InputsRef, errorOccurred, setInputValue } =
    SignInService();
  const { theme } = useTheme();

  return (
    <SingInPageView
      buttonText={buttonText}
      usernamePlaceholderText={usernamePlaceholderText}
      passwordPlaceholderText={passwordPlaceholderText}
      welcomeText={welcomeText}
      ErrorText={ErrorText}
      defaultInputClassName={defaultInputClassName}
      errorInputClassName={errorInputClassName}
      logInFunction={logInFunction}
      InputsRef={InputsRef}
      errorOccurred={errorOccurred}
      setInputValue={setInputValue}
      theme={theme}
    />
  );
};

export default SingInPageContainer;
