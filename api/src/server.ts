import express from 'express';
import cors from 'cors';

interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  cpf: number;
  age: number;
  gender: string;
  email: string;
  phone: number;
  escolaridade?: string;
}

let customers: Customer[] = [
  {
    id: 1,
    firstName: 'Caio',
    lastName: 'Soares',
    cpf: 11111111111,
    age: 33,
    gender: 'M',
    email: 'caio@teste.com',
    phone: 11991225544,
  },
  {
    id: 2,
    firstName: 'Marcela',
    lastName: 'Carvalho',
    cpf: 22222222222,
    age: 20,
    gender: 'F',
    email: 'marcela@teste.com',
    phone: 11991335788,
  },
  {
    id: 3,
    firstName: 'Thais',
    lastName: 'Souza',
    cpf: 33333333333,
    age: 27,
    gender: 'F',
    email: 'thais@teste.com',
    phone: 11991784455,
  }
];

const app = express();

app.use(cors());
app.use(express.json());

app.get('/customers', (req, res) => {
  res.json(customers);
})

// app.get('/customers/:id', (req, res) => {

// })

app.listen(8000, () => {
  console.log('🚀 Server started on port 8000!');
});
