import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import BabyForm from './BabyForm';
import BabyInventoryApp from './BabyInventoryApp';
import BabyInventoryForm from './BabyInventoryForm';
import InventoryReport from './InventoryReport';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/baby-form" component={BabyForm} />
        <Route path="/baby-inventory" component={BabyInventoryApp} />
        <Route path="/baby-inventory-form" component={BabyInventoryForm} />
        <Route path="/inventory-report" component={InventoryReport} />
      </Switch>
    </Router>
  );
};

export default App;
