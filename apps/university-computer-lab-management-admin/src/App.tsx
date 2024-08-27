import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { StudentList } from "./student/StudentList";
import { StudentCreate } from "./student/StudentCreate";
import { StudentEdit } from "./student/StudentEdit";
import { StudentShow } from "./student/StudentShow";
import { LabList } from "./lab/LabList";
import { LabCreate } from "./lab/LabCreate";
import { LabEdit } from "./lab/LabEdit";
import { LabShow } from "./lab/LabShow";
import { ComputerList } from "./computer/ComputerList";
import { ComputerCreate } from "./computer/ComputerCreate";
import { ComputerEdit } from "./computer/ComputerEdit";
import { ComputerShow } from "./computer/ComputerShow";
import { AdministratorList } from "./administrator/AdministratorList";
import { AdministratorCreate } from "./administrator/AdministratorCreate";
import { AdministratorEdit } from "./administrator/AdministratorEdit";
import { AdministratorShow } from "./administrator/AdministratorShow";
import { BookingList } from "./booking/BookingList";
import { BookingCreate } from "./booking/BookingCreate";
import { BookingEdit } from "./booking/BookingEdit";
import { BookingShow } from "./booking/BookingShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"UniversityComputerLabManagement"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Student"
          list={StudentList}
          edit={StudentEdit}
          create={StudentCreate}
          show={StudentShow}
        />
        <Resource
          name="Lab"
          list={LabList}
          edit={LabEdit}
          create={LabCreate}
          show={LabShow}
        />
        <Resource
          name="Computer"
          list={ComputerList}
          edit={ComputerEdit}
          create={ComputerCreate}
          show={ComputerShow}
        />
        <Resource
          name="Administrator"
          list={AdministratorList}
          edit={AdministratorEdit}
          create={AdministratorCreate}
          show={AdministratorShow}
        />
        <Resource
          name="Booking"
          list={BookingList}
          edit={BookingEdit}
          create={BookingCreate}
          show={BookingShow}
        />
      </Admin>
    </div>
  );
};

export default App;
