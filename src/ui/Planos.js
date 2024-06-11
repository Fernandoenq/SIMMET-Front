import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function getContent(title, description, list) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {description}
      </Typography>
      <List>
        {list.map((item, index) => (
          <ListItem key={index}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
}

function Item(props) {
  const { sx, children, onClick, selected, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: selected ? '#007bff' : (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
        color: selected ? '#fff' : (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        p: 2,
        m: 1,
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        cursor: 'pointer',
        ...sx,
      }}
      onClick={onClick}
      {...other}
    >
      {children}
    </Box>
  );
}

Item.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
  children: PropTypes.node,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
};

export default function PlanosGrid(props) {
  const { onSelectPlan } = props;
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    onSelectPlan(plan); // Notifica o componente pai sobre o plano selecionado
  };

  let description1 = "Simulação metereológica de qualquer região do Brasil";
  var list1 = ['80% de precisão', '5 simulações diárias', 'Feedback por e-mail'];

  let description2 = "Simulação metereológica de qualquer região do Brasil";
  var list2 = ['80% de precisão', '10 simulações diárias', 'Feedback por e-mail', 
    'Contato para suporte via email'];
  
  let description3 = "Simulação metereológica de qualquer região do Brasil";
  var list3 = ['80% de precisão', '25 simulações diárias', 'Feedback por e-mail', 
    'Contato para suporte via email', '10 meta valores', 'Acesso ao SIMMET Socio APP'];
  
  let description4 = "Simulação metereológica de qualquer região do Brasil";
  var list4 = ['80% de precisão', 'simulações ilimitadas', 'Feedback por e-mail', 
    'Contato para suporte via email e whatsapp', '20 meta valores', 'Acesso ao SIMMET Socio APP'];
  

  return (
    <div style={{ width: '80%', textAlign: 'center', marginLeft: '10%', marginRight: '10%', marginBottom: '2%' }}>
      <Box sx={{ display: 'grid', columnGap: 4, rowGap: 1, gridTemplateColumns: 'repeat(4, 1fr)' }}>
        <Item onClick={() => handlePlanSelect(1)} selected={selectedPlan === 1}>
          {getContent('SIMMET gratuito', description1, list1)}
        </Item>
        <Item onClick={() => handlePlanSelect(2)} selected={selectedPlan === 2}>
          {getContent('SIMMET Básico',description2, list2)}
        </Item>
        <Item onClick={() => handlePlanSelect(3)} selected={selectedPlan === 3}>
          {getContent('SIMMET Completo',description3, list3)}
        </Item>
        <Item onClick={() => handlePlanSelect(4)} selected={selectedPlan === 4}>
          {getContent('SIMMET Plus',description4, list4)}
        </Item>
      </Box>
    </div>
  );
}

PlanosGrid.propTypes = {
  onSelectPlan: PropTypes.func.isRequired,
};
