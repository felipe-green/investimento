import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";


import { useRecoilState } from "recoil";
import MainTable from "./components/MainTable";
import TitleHeader from "./components/TitleHeader";
import DividerWrapper from "./components/DividerWrapper";
import DeleteButton from "./components/Buttons/DeleteButton";
import SwitchPrototype from "./components/Form/SwitchPrototype";
import HandleChange from "./components/Form/HandleChange";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FormWrapper from "./components/Form/FormWrapper";
import TextFieldWrapper from "./components/Form/TextFieldWrapper";
import SaveButton from "./components/Buttons/SaveButton";

import {
  confirmationDialogState,
} from "./GlobalAtoms";

const Content = () => {
  // States
  const [data, setData] = useState([]);

  // Recoil
  const [confirmationDialog, setConfirmationDialogState] = useRecoilState(
    confirmationDialogState
  );

  // States
  const [values, setValue] = useState({
    initial_value: null,
    monthly_value: null,
    monthly_time: null,
    interest_time: null,
    monthly_ratio: null,
    interest_ratio: null,
    wage_ratio: null,
    withdraw: null,
  });
 

  useEffect(() => {
    let dataHistory = JSON.parse(window.localStorage.getItem("data_history"));

    if(dataHistory === null) {
      dataHistory = [];
    }

    setData([ ...dataHistory ]);
  }, []);

  const handleChange = (name) => (event) => {
    const data = HandleChange(name, event);
    setValue({ ...values, [data.name]: data.value });
  };

  const store = event => {
    event.preventDefault();

    let initial_value = parseInt(values.initial_value);
    let monthly_value = parseInt(values.monthly_value);
    let monthly_time = parseInt(values.monthly_time);
    let monthly_ratio = values.monthly_ratio;
    let initial_value_yield = (initial_value * ((1 + (monthly_ratio / 100)) ** (monthly_time / 12)));
    let monthly_value_yield = 0;
    
    let monthly_ratio_per_month = monthly_ratio / 12;
    
    for (let line = 1; line < monthly_time; line++) {
      monthly_value_yield = (monthly_value_yield * (1 + (monthly_ratio_per_month / 100))) + monthly_value;
    }
    
    let total_value_yield = monthly_value_yield + initial_value_yield;
    let interest_time = parseInt(values.interest_time);
    let interest_ratio = values.interest_ratio;
    let interest_yield = (total_value_yield * ((1 + (interest_ratio / 100)) ** (interest_time / 12)));
    let wage_ratio = values.wage_ratio;
    let wage_yield = (interest_yield * (wage_ratio / 100) * 0.85 / 12);
    let withdraw = parseInt(values.withdraw);

    let withdraw_yield = interest_yield;
    let withdraw_wage = 0;
    let total_withdraw_time = 0;
    if(withdraw_yield > 0 && wage_yield < withdraw) {
      while (withdraw_yield > 0) {
        withdraw_wage = (withdraw_yield * (wage_ratio / 100) * 0.85 / 12);
        withdraw_yield = withdraw_yield - (withdraw - withdraw_wage);
        total_withdraw_time++;
      }
    } else {
      total_withdraw_time = 900;
    }
    let withdraw_time = Math.round(total_withdraw_time/12);
    let total_time = (monthly_time / 12) + (interest_time / 12) + withdraw_time;

    let newData = {
      initial_value: (isNaN(initial_value)) ? '' : Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(initial_value),
      monthly_value: (isNaN(monthly_value)) ? '' : Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(monthly_value),
      monthly_time: monthly_time + ' meses',
      monthly_ratio: monthly_ratio + '%',
      initial_value_yield: (isNaN(initial_value_yield)) ? '' : Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(initial_value_yield),
      monthly_value_yield: (isNaN(monthly_value_yield)) ? '' : Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(monthly_value_yield),
      total_value_yield: (isNaN(total_value_yield)) ? '' : Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total_value_yield),
      interest_time: interest_time + ' meses',
      interest_ratio: interest_ratio + '%',
      interest_yield: (isNaN(interest_yield)) ? '' : Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(interest_yield),
      wage_ratio: wage_ratio + '%',
      wage_yield: (isNaN(wage_yield)) ? '' : Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(wage_yield),
      withdraw: (isNaN(withdraw)) ? '' : Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(withdraw),
      withdraw_time: (isNaN(withdraw_time)) ? '' : Intl.NumberFormat('pt-BR').format(withdraw_time) + ' anos',
      total_time: (isNaN(total_time)) ? '' : Intl.NumberFormat('pt-BR').format(total_time) + ' anos',
    };

    let dataHistory = JSON.parse(window.localStorage.getItem("data_history"));

    if(dataHistory !== null) {
      dataHistory.push({ ...newData });
    } else {
      dataHistory = [{ ...newData }];
    }

    setData([ ...dataHistory ]);
    localStorage.setItem('data_history', JSON.stringify([ ...dataHistory ]));
  }

  const deleteRow = row => {
    let dataProvisory = [ ...data ];
    dataProvisory.splice(row, 1);
    setData([ ...dataProvisory ]);
    localStorage.setItem('data_history', JSON.stringify([ ...dataProvisory ]));
  }

  const columns = [
    {
      label: "Valor inicial",
      name: "initial_value",
    },
    {
      label: "Aporte Mensal",
      name: "monthly_value",
    },
    {
      label: "Tempo/ Aporte",
      name: "monthly_time",
    },
    {
      label: "% Rend.",
      name: "monthly_ratio",
    },
    {
      label: "Vlr. Inicial - Final",
      name: "initial_value_yield",
    },
    {
      label: "Vlr. Mensal - Final",
      name: "monthly_value_yield",
    },
    {
      label: "Vlr. Final",
      name: "total_value_yield",
    },
    {
      label: "Tempo Rend.",
      name: "interest_time",
    },
    {
      label: "% Rend.",
      name: "interest_ratio",
    },
    {
      label: "Vlr. Final",
      name: "interest_yield",
    },
    {
      label: "% Rend.",
      name: "wage_ratio",
    },
    {
      label: "Renda Mensal",
      name: "wage_yield",
    },
    {
      label: "Renda Esperada",
      name: "withdraw",
    },
    {
      label: "Tempo de Renda",
      name: "withdraw_time",
    },
    {
      label: "Tempo Total",
      name: "total_time",
    },
    {
      label: "Excluir",
      name: "id",
      options: {
        // eslint-disable-next-line no-unused-vars
        customBodyRender: (
          value,
          tableMeta,
          // eslint-disable-next-line no-unused-vars
          updateValue
        ) => (
          <>
            <DeleteButton onClick={() => deleteRow(tableMeta.currentTableData[tableMeta.rowIndex].index)} />
          </>
        ),
      },
    },
  ];

  return (
    <>
      <TitleHeader>Adicionar Simulação</TitleHeader>
      <DividerWrapper />
      <FormWrapper onSubmit={(event) => store(event)}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <TextFieldWrapper
              label="Valor Inicial"
              name="initial_value"
              id="initial_value"
              onChange={handleChange("initial_value")}
              value={values.initial_value}
              required
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextFieldWrapper
              label="Aporte mensal"
              name="monthly_value"
              id="monthly_value"
              onChange={handleChange("monthly_value")}
              value={values.monthly_value}
              type="monthly_value"
              required
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextFieldWrapper
              label="Tempo do aporte"
              name="monthly_time"
              id="monthly_time"
              onChange={handleChange("monthly_time")}
              value={values.monthly_time}
              required
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextFieldWrapper
              label="Tempo em rendimento"
              name="interest_time"
              id="interest_time"
              onChange={handleChange("interest_time")}
              value={values.interest_time}
              required
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextFieldWrapper
              label="Ganho / aporte"
              name="monthly_ratio"
              id="monthly_ratio"
              onChange={handleChange("monthly_ratio")}
              value={values.monthly_ratio}
              required
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextFieldWrapper
              label="Ganho / rendimento"
              name="interest_ratio"
              id="interest_ratio"
              onChange={handleChange("interest_ratio")}
              value={values.interest_ratio}
              required
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextFieldWrapper
              label="Ganho / renda mensal"
              name="wage_ratio"
              id="wage_ratio"
              onChange={handleChange("wage_ratio")}
              value={values.wage_ratio}
              required
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextFieldWrapper
              label="Meta mensal"
              name="withdraw"
              id="withdraw"
              onChange={handleChange("withdraw")}
              value={values.withdraw}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <DividerWrapper />
          </Grid>
          <Grid item xs={12}>
            <Box>
              <SaveButton type="submit" />
            </Box>
          </Grid>
        </Grid>
      </FormWrapper>
      <DividerWrapper />
      <TitleHeader>Lista de Simulações</TitleHeader>
      <DividerWrapper />
      <MainTable data={data} columns={columns} />
    </>
  );
};

export default Content;
