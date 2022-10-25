import { styled } from "@mui/material/styles";
import { blueGrey } from "@mui/material/colors";
import { TextField, Button, Paper, IconButton, SpeedDial } from "@mui/material";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#f8d053",
      light: blueGrey[400],
      dark: "#000000",
    },
    secondary: {
      main: "#c49910",
      light: blueGrey[100],
      dark: blueGrey[600],
    },
    common: {
      main: "rgba(255, 255, 255, 0.1)",
      light: "rgba(156, 165, 222, 0.2)",
      dark: blueGrey[700],
    },
    text: {
      main: "#ffffff",
      white: "#ffffff",
      dark: blueGrey[300],
    },
  },
  typography: {
    fontFamily: ["Inter"].join(","), //Roboto Condensed
  },
});

export const CustomTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: theme.palette.primary.dark,
  },
  "& input": {
    color: theme.palette.primary.dark,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: theme.palette.primary.main,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.palette.primary.main,
      backgroundColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: theme.palette.secondary.main,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.secondary.main,
    },
  },
});

export const CustomTextFieldPost = styled(TextField)({
  "& label.Mui-focused": {
    color: theme.palette.secondary.main,
  },
  "& .MuiInput-input": {
    color: theme.palette.text.white,
  },
  "& label": {
    color: theme.palette.secondary.light,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: theme.palette.primary.main,
  },
  "& .MuiInputBase-root": {
    color: theme.palette.text.white,
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: theme.palette.primary.light,
  },
  "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
    borderBottomColor: theme.palette.primary.light,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.palette.primary.main,
      backgroundColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: theme.palette.secondary.main,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.secondary.main,
    },
  },
});

export const ColorButton = styled(Button)(() => ({
  color: theme.palette.getContrastText(theme.palette.primary.main),
  backgroundColor: theme.palette.primary.main,
  transition: "0.5s",
  filter: "grayScale(100)",
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    filter: "grayScale(0)",
    transform: "scale(1.09)",
  },
}));

export const ColorButtonIcons = styled(Button)`
  ${({ theme }) => `
   user-select: none;
  background: ${theme.palette.common.main};
  box-shadow: 0 5px 5px rgba(0,0,0,0.5);
  border: 1px solid rgba(255, 255, 255, 0.3);
  user-select: none;
  transition: ${theme.transitions.create(["background-color", "transform"], {
    duration: theme.transitions.duration.standard,
  })};
  &:hover {
    background-color: ${theme.palette.primary.dark};
    transform: scale(1.04);
  }
  `}
`;

export const CustomPaper = styled(Paper)`
  ${({ theme }) => `
  filter: grayscale(100);
  transition: 0.5s;
  box-shadow: 0px 8px 5px -8px ${theme.palette.common.main};
  &:hover {
    filter: grayscale(0);
    transform: scale(1.04);
  }
  `}
`;

export const CustomPaperNH = styled(Paper)`
  ${({ theme }) => `
  box-shadow: 0px 8px 5px -8px ${theme.palette.common.main};
  `}
`;

export const ColorButtonNH = styled(Button)(() => ({
  color: theme.palette.getContrastText(theme.palette.primary.main),
  backgroundColor: theme.palette.primary.main,
  transition: "0.5s",
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
  },
}));
