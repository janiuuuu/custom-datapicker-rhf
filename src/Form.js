import react from "react";
import { useForm, Controller } from "react-hook-form";
import LocalDate from "./LocalDate";
import React, { useState, useEffect } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "react-bootstrap";

const Form = () => {
  const [generalAgreementSignDate, setGeneralAgreementSignDate] =
    useState(undefined);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    alert("Dziękujemy za wysłanie!!!");
    reset();
  };

  function handleChangeSignDate(date) {
    setGeneralAgreementSignDate(LocalDate.fromJSDate(date));
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DatePicker
        innerRef={register}
        className={"form-control"}
        selected={generalAgreementSignDate?.toJSDate()}
        onChange={handleChangeSignDate}
        dateFormat={"yyyy-MM-dd"}
        placeholderText={"YYYY-MM-DD"}
      />

      <Controller
        as={LocalDate}
        control={control}
        name="data"
        render={({ field }) => (
          <DatePicker
            onChange={(date) => field.onChange(LocalDate.fromJSDate(date))}
            selected={field?.value?.toJSDate}
            className="form-control"
            dateFormat={"yyyy-MM-dd"}
            placeholderText={"YYYY-MM-DD"}
          />
        )}
      />
      <Button
        type="submit"
        style={{
          width: "208px",
          marginRight: "20px",
        }}
        variant="outline-primary"
      >
        Zapisz
      </Button>
    </form>
  );
};
export default Form;
