sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'demoapp/test/integration/FirstJourney',
		'demoapp/test/integration/pages/PeopleList',
		'demoapp/test/integration/pages/PeopleObjectPage'
    ],
    function(JourneyRunner, opaJourney, PeopleList, PeopleObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('demoapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePeopleList: PeopleList,
					onThePeopleObjectPage: PeopleObjectPage
                }
            },
            opaJourney.run
        );
    }
);