import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react';
import ActiveSaleOrders from './ActiveSaleOrders';
import CompletedSaleOrders from './CompletedSaleOrders';
// import DarkModeSwitch from '../components/DarkModeSwitch';

const SaleOrdersPage = () => {
  return (
    <Box p="4">
      {/* <DarkModeSwitch /> */}
      <Tabs isFitted>
        <TabList>
          <Tab>Active Sale Orders</Tab>
          <Tab>Completed Sale Orders</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <ActiveSaleOrders />
          </TabPanel>
          <TabPanel>
            <CompletedSaleOrders />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default SaleOrdersPage;
