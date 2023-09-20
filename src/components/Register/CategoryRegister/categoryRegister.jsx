import * as React from 'react';
import { useState } from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box, styled } from '@mui/material';
import { validateName, validateDescription } from './validationsCategory';

const CustomizedButton = styled(Box)`
display: flex;
justify-content: space-between;
margin-bottom: 1rem;
`

export default function FormCategory({handleSubmit}) {
  const [name, setName] = useState({value: '', valid: null})
  const [description, setDescription] = useState({value: '', valid: null})

  handleSubmit = (values) => {
    console.log('APPJS:', values)
  }

  return (

    <Container component="form" maxWidth="lg" onSubmit={(e) => {
      e.preventDefault()
      handleSubmit({
        name,
        description,
      })
    }}
    handleSubmit={handleSubmit}>

      <Typography variant='h3' align='center' component="h1">New Category</Typography>

      <TextField 
      id="name" 
      label="Anime name" 
      variant="outlined" 
      fullWidth margin='normal'
      value={name.value}
      onChange={(input) => {
        const value = input.target.value
        const valid = validateName(value)
        setName({value,valid})
      }}
      error={name.valid == false}
      helperText={name.valid == false && 'The name cannot be empty'}/>

      <TextField 
      id="description" 
      label="Anime description" 
      variant="outlined" 
      fullWidth margin='normal'
      value={description.value}
      onChange={(input) => {
        const value = input.target.value
        const valid = validateDescription(value)
        setDescription({value,valid})
      }}
      error={description.valid == false}
      helperText={description.valid == false && 'The description cannot be empty'}/>

      <CustomizedButton>
      <Button variant="contained" type='submit'>Guardar</Button>
      </CustomizedButton>
      
    </Container>
    
  );
}