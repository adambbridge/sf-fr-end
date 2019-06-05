import { Injectable } from "@angular/core";

// so we can inject this service
@Injectable({
    providedIn: "root"
})
export class FakeDataService {
    fakeApplication = {
        appId: 123,
        appName: "foo",
        podioApplication: {
            appId: 123,
            appName: "foo",
            podioApplication: "cant recurse here",
            fields: ["foo", "bar"]
        },
        fields: ["foo", "bar"]
    };

    /**
     * solution view uses
     * name, space_id, owner, c
     *  */

    // fakeSpace = {
    //     org_id: "123",
    //     space_id: "123",
    //     name: "Fake workspace name",
    //     created_on: "05/10/2017",
    //     description:
    //         "This is a workspace description. Not sure how long these might be. May need to truncate",
    //     owner: "Owner. Is the owner an org?",
    //     applications: [
    //         "Fake application",
    //         "Fake application",
    //         "Fake application",
    //         "Fake application",
    //         "Fake application"
    //     ]
    // };

    fakeWorkspace = {
        workspaceName: "Workspace 1",
        workspaceId: 123,
        apps: [this.fakeApplication],
        description:
            "This is a workspace description. Not sure how long these might be. May need to truncate",
        podioSpace: {
            // strings
            org_id: "123",
            space_id: "123",
            name: "podio space",
            rights: ["foo", "bar"],
            role: "role",
            type: "type",
            url: "https://someurl.com",
            url_label: "url label",
            privacy: "privacy",
            created_on: "05/10/2018",
            description: "description",
            created_by: "any",
            // type Owner
            owner: { id: "123", type: "type" },
            // booleans
            premium: false,
            post_on_new_app: false,
            post_on_new_member: false,
            auto_join: false,
            is_overdue: false,
            // type array
            applications: [
                "Fake application",
                "Fake application",
                "Fake application",
                "Fake application",
                "Fake application"
            ]
        }
    };

    fakeHistory = [
        {
            date: "01/01/2018",
            task: "Update",
            environment: "Bobs business - dev",
            description: "Lorem ipsum and some more description ..."
        },
        {
            date: "02/01/2018",
            task: "Deploy",
            environment: "Bobs business - dev",
            description: "Lorem ipsum and some more description ..."
        },
        {
            date: "03/01/2018",
            task: "Patch",
            environment: "Bobs business - dev",
            description: "Lorem ipsum and some more description ..."
        },
        {
            date: "04/01/2018",
            task: "Update",
            environment: "Bobs business - dev",
            description: "Lorem ipsum and some more description ..."
        },
        {
            date: "05/01/2018",
            task: "Deploy",
            environment: "Bobs business - dev",
            description: "Lorem ipsum and some more description ..."
        },
        {
            date: "06/01/2018",
            task: "Patch",
            environment: "Bobs business - dev",
            description: "Lorem ipsum and some more description ..."
        },
        {
            date: "07/01/2018",
            task: "Update",
            environment: "Bobs business - dev",
            description: "Lorem ipsum and some more description ..."
        }
    ];

    fakeSolution = {
        appId: "123456",
        name: "Fake Solution",
        version: "2",
        workspaces: [
            this.fakeWorkspace,
            this.fakeWorkspace,
            this.fakeWorkspace,
            this.fakeWorkspace,
            this.fakeWorkspace,
            this.fakeWorkspace,
            this.fakeWorkspace,
            this.fakeWorkspace
        ],
        history: this.fakeHistory
    };

    fakeSolutions = [
        {
            name: "Custom Solution 1 ",
            version: 1,
            creationDate: new Date("2015-05-05"),
            lastUpdateDate: new Date(),
            description: "my lollipop",
            workspaces: [
                this.fakeWorkspace,
                this.fakeWorkspace,
                this.fakeWorkspace
            ]
        },
        {
            name: "Custom Solution 2",
            version: 2,
            creationDate: new Date("2017-05-05"),
            lastUpdateDate: new Date(),
            description: "my ice cream",
            workspaces: [
                this.fakeWorkspace,
                this.fakeWorkspace,
                this.fakeWorkspace
            ]
        },
        {
            name: "Custom Solution 3",
            version: 1,
            creationDate: new Date("2016-05-05"),
            lastUpdateDate: new Date(),
            description: "my burger",
            workspaces: [
                this.fakeWorkspace,
                this.fakeWorkspace,
                this.fakeWorkspace
            ]
        },
        {
            name: "Custom Solution 4",
            version: 4,
            creationDate: new Date("2018-05-05"),
            lastUpdateDate: new Date(),
            description: "my pizza",
            workspaces: [
                this.fakeWorkspace,
                this.fakeWorkspace,
                this.fakeWorkspace
            ]
        },
        {
            name: "Custom Solution 4",
            version: 4,
            creationDate: new Date("2018-05-05"),
            lastUpdateDate: new Date(),
            description: "my roasted pig",
            workspaces: [
                this.fakeWorkspace,
                this.fakeWorkspace,
                this.fakeWorkspace
            ]
        },
        {
            name: "Custom Solution 4",
            version: 4,
            creationDate: new Date("2018-05-05"),
            lastUpdateDate: new Date(),
            description: "my description",
            workspaces: [
                this.fakeWorkspace,
                this.fakeWorkspace,
                this.fakeWorkspace
            ]
        },
        {
            name: "Custom Solution 4",
            version: 4,
            creationDate: new Date("2018-05-05"),
            lastUpdateDate: new Date(),
            description: "my description",
            workspaces: [
                this.fakeWorkspace,
                this.fakeWorkspace,
                this.fakeWorkspace
            ]
        },
        {
            name: "Custom Solution 4",
            version: 4,
            creationDate: new Date("2018-05-05"),
            lastUpdateDate: new Date(),
            description: "my description",
            workspaces: [
                this.fakeWorkspace,
                this.fakeWorkspace,
                this.fakeWorkspace
            ]
        },
        {
            name: "Custom Solution 4",
            version: 4,
            creationDate: new Date("2018-05-05"),
            lastUpdateDate: new Date(),
            description: "my description",
            workspaces: [
                this.fakeWorkspace,
                this.fakeWorkspace,
                this.fakeWorkspace
            ]
        },
        {
            name: "Custom Solution 4",
            version: 4,
            creationDate: new Date("2018-05-05"),
            lastUpdateDate: new Date(),
            description: "my description",
            workspaces: [
                this.fakeWorkspace,
                this.fakeWorkspace,
                this.fakeWorkspace
            ]
        }
    ];
}
