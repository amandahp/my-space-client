import { useEffect } from "react";
import * as S from "./ToastError.styles.js";

export const ToastError = (props) => {
  useEffect(() => {
    if (props.error) {
      setTimeout(() => {
        props.setError(null);
      }, [3000]);
    }
  }, [props.error]);

  return <S.Toast>{props.error}</S.Toast>;
};
