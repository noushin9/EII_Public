sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"incidents/imgmtfiorielements/test/integration/pages/CustomersList",
	"incidents/imgmtfiorielements/test/integration/pages/CustomersObjectPage"
], function (JourneyRunner, CustomersList, CustomersObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('incidents/imgmtfiorielements') + '/test/flp.html#app-preview',
        pages: {
			onTheCustomersList: CustomersList,
			onTheCustomersObjectPage: CustomersObjectPage
        },
        async: true
    });

    return runner;
});

