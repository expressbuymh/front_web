import { useSelector, useDispatch } from "react-redux";
import { InputText } from "../../components/forms/InputText";
import { parseDataFromForm } from "../../utils/handleData";
import { ActionButton } from "../../components/forms/ActionButton";
import { useEffect, useState } from "react";
import authActions from '../../store/user/auth/authActions'
import { ErrorMessage } from "../../components/forms/ErrorMessage";
import { toast } from "react-hot-toast";

const {sign_in} = authActions

export function SignIn() {
  const dispatch = useDispatch()
  const {loading, error, success} = useSelector(store => store.user.data)
  function handleSubmit(e) {
    let {data} = parseDataFromForm(e);
    console.log(data)
    dispatch(sign_in({data}))
  }
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-bg-light">
      <div className="w-11/12 lg:w-1/2 flex flex-col justify-center items-center gap-6">
        <img src="../src/assets/logo.svg" className="w-12 h-12" alt="" />
        <h1 className="text-paragraph-primary font-bold text-2xl">Sign in to your account</h1>
        <form onSubmit={handleSubmit} className="w-full flex flex-col justify-center items-center gap-3">
          <InputText name="email" label="Email address" error={error?.sign_in?.email} type={"email"} />
          <InputText name="password" label="Password" error={error?.sign_in?.password} type={"password"} />
          {error?.sign_in?.Credential && <ErrorMessage error={error?.sign_in?.Credential}/>}
          <ActionButton loading={loading.sign_in}>
            Sign in
          </ActionButton>
        </form>
      </div>
    </div>
  )
}