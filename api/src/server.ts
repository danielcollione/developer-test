import express from "express";
import cors from "cors";

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
    firstName: "Caio",
    lastName: "Soares",
    cpf: 11111111111,
    age: 33,
    gender: "M",
    email: "caio@teste.com",
    phone: 11991225544,
  },
  {
    id: 2,
    firstName: "Marcela",
    lastName: "Carvalho",
    cpf: 22222222222,
    age: 20,
    gender: "F",
    email: "marcela@teste.com",
    phone: 11991335788,
  },
  {
    id: 3,
    firstName: "Thais",
    lastName: "Souza",
    cpf: 33333333333,
    age: 27,
    gender: "F",
    email: "thais@teste.com",
    phone: 11991784455,
  },
];

const app = express();

app.use(cors());
app.use(express.json());

app.get("/customers", (req, res) => {
  res.json(customers);
});

app.get("/customers/:id", (req, res) => {
  for (const cost of customers) {
    if (`:${cost.id}` == req.params.id) {
      res.json(cost);
    }
  }
});

app.get("/findcustomers/:text", (req, res) => {
  const result = [];
  for (const cost of customers) {
    if (cost.firstName.match(`${req.params.text.replace(":", "")}`)) {
      result.push(cost);
    }
    if (cost.lastName.match(`${req.params.text.replace(":", "")}`)) {
      result.push(cost);
    }
  }
  res.json(result);
});

app.post("/newcustomers", (req, res) => {
  console.log("Got body:", req.body);
  if (customers.length > 0) {
    req.body.id = customers.slice(-1)[0].id + 1;
    customers.push(req.body);
  } else {
    req.body.id = 1;
    customers.push(req.body);
  }
});

app.put("/edit", (req, res) => {
  for (const cost of customers) {
    if (cost.id == req.body.id) {
      cost.firstName = req.body.firstName;
      cost.lastName = req.body.lastName;
      cost.age = req.body.age;
      cost.email = req.body.email;
      cost.cpf = req.body.cpf;
      cost.gender = req.body.gender;
      cost.phone = req.body.phone;
      console.log(cost);
    }
  }
});

app.delete("/delete/:id", (req, res) => {
  for (const cost of customers) {
    if (`:${cost.id}` == req.params.id) {
      const i = customers.indexOf(cost);
      customers.splice(i, 1);
    }
  }
});

app.listen(8000, () => {
  console.log("🚀 Server started on port 8000!");
});
