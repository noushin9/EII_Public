sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"users/userexpenses/test/integration/pages/UsersList",
	"users/userexpenses/test/integration/pages/UsersObjectPage",
	"users/userexpenses/test/integration/pages/BudgetsObjectPage"
], function (JourneyRunner, UsersList, UsersObjectPage, BudgetsObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('users/userexpenses') + '/test/flp.html#app-preview',
        pages: {
			onTheUsersList: UsersList,
			onTheUsersObjectPage: UsersObjectPage,
			onTheBudgetsObjectPage: BudgetsObjectPage
        },
        async: true
    });

    return runner;
});

