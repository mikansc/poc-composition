/* eslint-disable react/prop-types */
import { FiAirplay, FiAnchor } from "react-icons/fi";
import { ComposedTabGroup } from "./components/ComposedTabGroup/ComposedTabGroup";

const TabContent = ({ children, totalTabs }) => {
  return (
    <div>
      {totalTabs} tabs disponíveis
      <h1>{children}</h1>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Página inicial</h1>
      <ComposedTabGroup>
        <TabContent title="Detalhes" icon={FiAnchor} Icon={<FiAirplay />}>
          Conteudo Tab 1
        </TabContent>
        <TabContent title="Dados técnicos">Conteudo Tab 2</TabContent>
        <TabContent title="Comentários">Conteudo Tab 3</TabContent>
        <TabContent title="Sei lá">Conteudo Tab 4</TabContent>
      </ComposedTabGroup>
    </div>
  );
};

export default App;
