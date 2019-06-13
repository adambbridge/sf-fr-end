import { Injectable } from "@angular/core";

// so we can inject this service
@Injectable({
    providedIn: "root"
})
export class FakeDataService {
    fakeClients = [
        {
            name: "fake client 1",
            id: "1",
            environments: ["client1 env 1", "client1 env 2", "client1 env 3"]
        },
        {
            name: "fake client 2",
            id: "2",
            environments: ["client2 env 1", "client2 env 2", "client2 env 3"]
        },
        {
            name: "fake client 3",
            id: "3",
            environments: ["client3 env 1", "client3 env 2", "client3 env 3"]
        }
    ];

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

    // export class Org {
    //     public contract_status: string;
    //     public domains: string[];
    //     public grants_count: Number;
    //     public image: any;
    //     public logo: Number;
    //     public name: string;
    //     public org_id: Number;
    //     public premium: boolean;
    //     public rank: Number;
    //     public rights: string[];
    //     public role: string;
    //     public sales_agent_id: Number;
    //     public spaces: Space[];
    //     public status: string;
    //     public tier: string;
    //     public type: string;
    //     public url: string;
    //     public url_label: string;
    //     public user_limit: Number;
    // }

    fakeWorkspace = {
        workspaceName: "Workspace 1",
        workspaceId: 123,
        apps: [this.fakeApplication],
        description:
            "This is a workspace description. Not sure how long these might be. May need to truncate",
        checked: false, // solely for purpose of user selection when creating a solution
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

    fakeOrganization1 = {
        name: "Fake Org1",
        spaces: [
            this.fakeWorkspace,
            this.fakeWorkspace,
            this.fakeWorkspace,
            this.fakeWorkspace,
            this.fakeWorkspace,
            this.fakeWorkspace,
            this.fakeWorkspace
        ]
    };
    fakeOrganization2 = {
        name: "Fake Org2",
        spaces: [
            this.fakeWorkspace,
            this.fakeWorkspace,
            this.fakeWorkspace,
            this.fakeWorkspace,
            this.fakeWorkspace,
            this.fakeWorkspace,
            this.fakeWorkspace
        ]
    };
    fakeOrganization3 = {
        name: "Fake Org3",
        spaces: [
            this.fakeWorkspace,
            this.fakeWorkspace,
            this.fakeWorkspace,
            this.fakeWorkspace,
            this.fakeWorkspace,
            this.fakeWorkspace,
            this.fakeWorkspace
        ]
    };

    fakeOrganizations = [
        this.fakeOrganization1,
        this.fakeOrganization2,
        this.fakeOrganization3
    ];

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
            imageUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSCSkRHFDAxTdecz0FQa2qZWiu4PUogHowScKVMvIFmoWanolsHg",
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
            imageUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSCSkRHFDAxTdecz0FQa2qZWiu4PUogHowScKVMvIFmoWanolsHg",
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
            imageUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSCSkRHFDAxTdecz0FQa2qZWiu4PUogHowScKVMvIFmoWanolsHg",
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
            imageUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSCSkRHFDAxTdecz0FQa2qZWiu4PUogHowScKVMvIFmoWanolsHg",
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
