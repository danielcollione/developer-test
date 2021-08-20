import React, { FormEvent, useState, useEffect } from 'react';
import { Form, Header, Error, ButtonSuccess, ButtonError } from './styles';
import { Link, useHistory, useParams } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import api from '../../services/api';
import { CustomerType } from '../Customers';

interface ParamTypes {
  repository: string;
}

const Customer: React.FC = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [gen, setGen] = useState('');
  const [cpf, setCpf] = useState('');
  const [tel, setTel] = useState('');

  const [inputError, setInputError] = useState('');

  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState('Novo usuário');
  const [buttonTitle, setButtonTitle] = useState('Cadastrar');

  const [customer, setCustomer] = useState<CustomerType>({
    firstName: '',
    lastName: '',
    age: 0,
    cpf: 0,
    phone: 0,
    email: '',
    gender: '',
    id: 0,
  });

  const params = useParams<ParamTypes>();

  useEffect(() => {
    api.get(`customers/:${Number(params.repository)}`).then((response) => {
      console.log(response.data);
      setCustomer(response.data);
      if (response.data) {
        editOrNew(response.data);
      }
    });
  }, []);

  async function postCustomer(cust: CustomerType) {
    api.post('/newcustomers', cust);
  }

  async function editCustomer(cust: CustomerType) {
    api.put('/edit', cust);
  }

  async function deleteCustomer(cust: CustomerType) {
    api.delete(`delete/:${cust.id}`);
  }

  async function editOrNew(cust: CustomerType) {
    if (cust) {
      defaultEditUser();
      setTitle('Editar usuário');
      loadCustomer(cust);
    }
  }

  async function loadCustomer(cust: CustomerType) {
    setName(cust.firstName);
    setLastName(cust.lastName);
    setAge(String(cust.age));
    setEmail(cust.email);
    setTel(String(cust.phone));
    setCpf(String(cust.cpf));
    setGen(String(cust.gender));
  }

  async function editUser(event: FormEvent<HTMLFormElement>,) {
    event.preventDefault();
    setEdit(false);
    setButtonTitle('Salvar');
  }

  async function defaultEditUser() {
    setEdit(true);
    setButtonTitle('Editar');
  }

  async function handleDelete() {
    deleteCustomer(customer);
    handleBack();
  }

  async function handleNewCustomer(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!name) {
      setInputError('Digite um nome');
      return;
    }

    if (!lastName) {
      setInputError('Digite um sobrenome');
      return;
    }

    if (!cpf) {
      setInputError('Digite cpf');
      return;
    }

    if (!gen) {
      setInputError('Digite seu genero');
      return;
    }

    if (!email) {
      setInputError('Digite um email');
      return;
    }

    try {
      if (customer.id > 0) {
        customer.firstName = name;
        customer.lastName = lastName;
        customer.email = email;
        customer.cpf = Number(cpf);
        customer.phone = Number(tel);
        customer.gender = gen;
        customer.id = customer.id;
        customer.age = Number(age);
        editCustomer(customer);
        defaultEditUser();
      } else {
        customer.firstName = name;
        customer.lastName = lastName;
        customer.email = email;
        customer.cpf = Number(cpf);
        customer.phone = Number(tel);
        customer.gender = gen;
        customer.id = customer.id;
        customer.age = Number(age);
        postCustomer(customer);
        handleBack();
      }
      setInputError('');
    } catch (err) {
      setInputError('Erro na busca por esse repositório');
    }
  }

  function handleBack() {
    history.push("/");
  }

  return (
    <>
      <Header>
        <h1>{title}</h1>
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <Form hasError={!!inputError} onSubmit={edit ? editUser : handleNewCustomer}>

        <input
          value={name}
          disabled={edit}
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite o nome"
        />
        <input
          onChange={(e) => setLastName(e.target.value)}
          disabled={edit}
          value={lastName}
          placeholder="Digite o sobrenome"
        />
        <input
          onChange={(e) => setCpf(e.target.value)}
          disabled={edit}
          value={cpf}
          type="number"
          placeholder="Digite o CPF"
        />
        <input
          onChange={(e) => setAge(e.target.value)}
          disabled={edit}
          value={age}
          placeholder="Digite a idade"
        />
        <input
          onChange={(e) => setGen(e.target.value)}
          disabled={edit}
          value={gen}
          placeholder="Genero"

        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          disabled={edit}
          value={email}
          type="email"
          placeholder="Digite o Email"
        />
        <input
          onChange={(e) => setTel(e.target.value)}
          disabled={edit}
          value={tel}
          type="number"
          placeholder="Digite o Telefone"
        />

        {inputError && <Error>{inputError}</Error>}

        <ButtonSuccess type="submit">{buttonTitle}</ButtonSuccess>
        <ButtonError hidden={!edit} onClick={() => handleDelete()}>Deletar</ButtonError>
      </Form>
    </>
  );
}

export default Customer;
