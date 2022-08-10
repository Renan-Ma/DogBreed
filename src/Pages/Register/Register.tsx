import { Box, TextField } from "@mui/material";
import { MainContainer, Button } from "./styled";

const Register = () => {
  return (
    <MainContainer>
      <h1>Dog Breed</h1>
      <p>Faça seu registro para admirar os cachorros!</p>
      <div>
        <Box
          sx={{
            width: 500,
          }}
        >
          <TextField className="text"
            fullWidth
            id="outlined-basic"
            label="E-mail"
            variant="outlined"
            color="success"
          />
        </Box>
      </div>
      <Button>Registrar</Button>
    </MainContainer>
  );
};

export default Register;
