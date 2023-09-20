import SingInPageView from "./SingInPageView";
import AccountService from "../../services/AccountService";
import { useTheme } from "../../hooks/useTheme";

const SingInPageContainer = () => {
  const buttonText = "Zaloguj";
  const usernamePlaceholderText = "Nazwa użytkownika";
  const passwordPlaceholderText = "Hasło";
  const welcomeText = "Zaloguj się";
  const defaultInputClassName = "form__input";
  const errorInputClassName = "form__input--error";

  const errorText = (inputName) =>
    `${inputName} musi zawierać od 5 do 15 znaków!`;
  const { logIn, inputsRef, errorOccurred, setInputValue } = AccountService();
  const { theme } = useTheme();

  return (
    <SingInPageView
      buttonText={buttonText}
      usernamePlaceholderText={usernamePlaceholderText}
      passwordPlaceholderText={passwordPlaceholderText}
      welcomeText={welcomeText}
      errorText={errorText}
      defaultInputClassName={defaultInputClassName}
      errorInputClassName={errorInputClassName}
      logIn={logIn}
      errorOccurred={errorOccurred}
      inputsRef={inputsRef}
      setInputValue={setInputValue}
      theme={theme}
    />
  );
};

export default SingInPageContainer;