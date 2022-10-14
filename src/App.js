import { Routes, Route } from 'react-router-dom';
import {
  Header,
  HeaderName,
  HeaderContainer,
  SkipToContent,
  HeaderMenuButton,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderMenu,
  HeaderGlobalBar,
  HeaderGlobalAction
} from '@carbon/react';
import { Notification, Search } from "@carbon/icons-react";
import Dashboard from './Dashboard/Dashboard.jsx';
import './App.scss';

function App() {
  return (
    <div className="App">
      <HeaderContainer
        render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <Header aria-label="IBM Platform Name">
          <SkipToContent />
           <HeaderMenuButton
             aria-label="Open menu"
             onClick={onClickSideNavExpand}
              isActive={isSideNavExpanded}
           />
          <HeaderName href="/" prefix="IBM">
            Talent mobility solution
          </HeaderName>
          <HeaderNavigation aria-label="IBM [Platform]">
            <HeaderMenu aria-label="Candidates" menuLinkName="Candidates">
              <HeaderMenuItem href="#">Matched candidates</HeaderMenuItem>
              <HeaderMenuItem href="#">All candidates</HeaderMenuItem>
            </HeaderMenu>
            <HeaderMenu aria-label="Positions" menuLinkName="Positions">
              <HeaderMenuItem href="#">My open positions</HeaderMenuItem>
              <HeaderMenuItem href="#">All open positions</HeaderMenuItem>
            </HeaderMenu>
          </HeaderNavigation>
            <HeaderGlobalBar>
              <HeaderGlobalAction
                aria-label="Search"
                onClick={() => {}}>
                <Search size={20} />
              </HeaderGlobalAction>
              <HeaderGlobalAction
                aria-label="Notifications"
                onClick={() => {}}>
                <Notification size={20} />
              </HeaderGlobalAction>
            </HeaderGlobalBar>
          </Header>
        )}
      />

      <main>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
