import React, { useEffect, useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';
import { Header, Form, Error, CustomersList, FabButtonSpan } from './styles';

import FabButtonAdd from '../../components/fabButtonAdd';

export interface CustomerType {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  phone: number;
  cpf: number;
  gender: string;
}

const Customers: React.FC = () => {
  const [searchCustomer, setSearchCustomer] = useState('');
  const [inputError, setInputError] = useState('');
  const [customers, setCustomers] = useState<CustomerType[]>([]);

  useEffect(() => {
    getCustomers();
  }, []);

  async function getCustomers() {
    api.get('customers').then((response) => {
      setCustomers(response.data);
    });
  }

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!searchCustomer) {
      setInputError('Digite o nome/sobrenome do cliente');
      return;
    }

    try {
      console.log(searchCustomer);
      api.get(`findcustomers/:${searchCustomer}`).then((response) => {
        setCustomers(response.data);
      });
      setInputError('');
    } catch (err) {
      setInputError('Erro na busca por esse repositório');
    }
  }

  return (
    <>
      <Header>
        <h1>Lista de clientes:</h1>
        <Link onClick={() => getCustomers()} to={'/'}>
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={searchCustomer}
          onChange={(e) => setSearchCustomer(e.target.value)}
          placeholder="Pesquisar cliente pelo nome/sobrenome"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <CustomersList>
        {customers.map((customer) => (
          <Link key={customer.id} to={`/customers/${customer.id}`}>
            <div>
              <strong>{customer.firstName} {customer.lastName}</strong>
              <p>{customer.email}</p>
            </div>

            <FiChevronRight size={20} />
          </Link>
        ))}
      </CustomersList>

      <FabButtonSpan>
        <Link to={`/customers/${0}`}>
          <FabButtonAdd />
        </Link>
      </FabButtonSpan>
    </>
  );
};

export default Customers;
