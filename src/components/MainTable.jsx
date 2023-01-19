import React from "react";

import MUIDataTable from "mui-datatables";

// @material-ui components
import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
  adaptV4Theme,
} from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const getTheme = () =>
  createTheme(
    adaptV4Theme({
      overrides: {
        MUIDataTableBodyRow: {
          root: {
            "&:nth-child(odd)": {
              backgroundColor: grey[100],
            },
          },
        },
        MUIDataTablePagination: {
          root: {
            borderBottom: "none",
          },
        },
      },
    })
  );

const MainTable = (props) => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={getTheme()}>
      <MUIDataTable
        {...props}
        title={<></>}
        options={{
          responsive: "standard",
          elevation: 0,
          selectableRows: "none",
          filterType: "textField",
          textLabels: {
            body: {
              noMatch: "Nenhum resultado encontrado",
              toolTip: "Ordenar",
              columnHeaderTooltip: (column) => `Orderne por ${column.label}`,
            },
            pagination: {
              next: "Próxima",
              previous: "Anterior",
              rowsPerPage: "Por página:",
              displayRows: "de",
            },
            toolbar: {
              search: "Procurar",
              downloadCsv: "Download CSV",
              print: "Imprimir",
              viewColumns: "Ver colunas",
              filterTable: "Filtrar",
            },
            filter: {
              all: "TODOS",
              title: "FILTROS",
              reset: "RESET",
            },
            viewColumns: {
              title: "Exibir colunas",
              titleAria: "Exibir/Esconder colunas",
            },
            selectedRows: {
              text: "linha(s) selecionadas",
              delete: "Deletar",
              deleteAria: "Deletar linhas selecionadas",
            },
          },
        }}
      />
    </ThemeProvider>
  </StyledEngineProvider>
);

export default MainTable;
