import { Injectable } from "@angular/core";

export interface ISolutionViewModel {
    appId?: string;
    name: string;
    imageUrl?: string;
    version: string | number;
    creationDate?: Date;
    lastUpdateDate?: Date;
    description?: string;
    workspaces: Array<IPodioSpaceViewModel>;
    history?: any;
}
export interface IClientViewModel {
    contact: string;
    company?: string;
    id: string;
    environments;
    email?: string;
    notes?: string;
}
export interface IPodioOrganizationViewModel {
    name: string;
    owner: string;
    isTemplate?: boolean;
    orgId?: number;
    spaces: Array<IPodioSpaceViewModel>;
    deployedSolutions?: any;
}
export interface IPodioSpaceViewModel {
    workspaceName: string;
    workspaceId: number;
    description: string;
    checked: boolean;
    podioSpace: any;
    apps: Array<IPodioApplicationViewModel>;
}
export interface IPodioApplicationViewModel {
    appName: string;
    appId: number;
    podioApplication: any;
    fields: Array<string>;
}



// so we can inject this service
@Injectable({
    providedIn: "root"
})
export class FakeDataService {
    fakeApplication: IPodioApplicationViewModel = {
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

    fakeWorkspace: IPodioSpaceViewModel = {
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

    fakeOrganization1: IPodioOrganizationViewModel = {
        name: "Fake Org1",
        owner: "Client Company XYZ",
        isTemplate: true,
        spaces: [
            this.fakeWorkspace,
            this.fakeWorkspace,
            this.fakeWorkspace,
            this.fakeWorkspace,
            this.fakeWorkspace,
            this.fakeWorkspace,
            this.fakeWorkspace
        ],
        deployedSolutions: []
    };
    fakeOrganization2: IPodioOrganizationViewModel = {
        name: "Fake Org2",
        owner: "Brick Bridge Consulting",
        isTemplate: false,
        spaces: [
            this.fakeWorkspace,
            this.fakeWorkspace,
            this.fakeWorkspace,
            this.fakeWorkspace,
            this.fakeWorkspace,
            this.fakeWorkspace,
            this.fakeWorkspace
        ],
        deployedSolutions: ["solABC"]
    };
    fakeOrganization3: IPodioOrganizationViewModel = {
        name: "Fake Org3",
        owner: "Client Company ABC",
        spaces: [
            this.fakeWorkspace,
            this.fakeWorkspace,
            this.fakeWorkspace,
            this.fakeWorkspace,
            this.fakeWorkspace,
            this.fakeWorkspace,
            this.fakeWorkspace
        ],
        deployedSolutions: ["solXYZ"]
    };

    fakeOrganizations: Array<IPodioOrganizationViewModel> = [
        this.fakeOrganization1,
        this.fakeOrganization2,
        this.fakeOrganization3
    ];

    fakeClients: Array<IClientViewModel> = [
        {
            company: "XYZ Real Estate",
            contact: "Pam Smith",
            id: "1",
            email: "pam@gmail.com",
            notes:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            environments: [this.fakeOrganization1, this.fakeOrganization2]
        },
        {
            company: "Random Consulting",
            contact: "Dan Jones",
            id: "2",
            email: "dan@gmail.com",
            notes:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            environments: [this.fakeOrganization1, this.fakeOrganization2]
        },
        {
            company: "ABC Real Estate",
            contact: "Jan Weller",
            id: "3",
            email: "jan@gmail.com",
            notes:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            environments: [this.fakeOrganization1, this.fakeOrganization2]
        }
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

    fakeSolution: ISolutionViewModel = {
        appId: "123456",
        name: "Fake Solution",
        version: 1,
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

    fakeSolutions: Array<ISolutionViewModel> = [
        {
            appId: "123456",
            name: "Custom Solution A",
            imageUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSCSkRHFDAxTdecz0FQa2qZWiu4PUogHowScKVMvIFmoWanolsHg",
            version: 1,
            creationDate: new Date("2015-05-05"),
            lastUpdateDate: new Date(),
            description:
                "my lollipop. item description could be here and truncate after 2 lines or so with ...",
            workspaces: [
                this.fakeWorkspace,
                this.fakeWorkspace,
                this.fakeWorkspace
            ],
            history: this.fakeHistory
        },
        {
            appId: "123456",
            name: "Custom Solution B",
            imageUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSCSkRHFDAxTdecz0FQa2qZWiu4PUogHowScKVMvIFmoWanolsHg",
            version: 2,
            creationDate: new Date("2017-05-05"),
            lastUpdateDate: new Date(),
            description:
                "my ice cream. item description could be here and truncate after 2 lines or so with ...",
            workspaces: [
                this.fakeWorkspace,
                this.fakeWorkspace,
                this.fakeWorkspace
            ],
            history: this.fakeHistory
        },
        {
            appId: "123456",
            name: "Custom Solution C",
            imageUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSCSkRHFDAxTdecz0FQa2qZWiu4PUogHowScKVMvIFmoWanolsHg",
            version: 1,
            creationDate: new Date("2016-05-05"),
            lastUpdateDate: new Date(),
            description:
                "my burger. item description could be here and truncate after 2 lines or so with ...",
            workspaces: [
                this.fakeWorkspace,
                this.fakeWorkspace,
                this.fakeWorkspace
            ],
            history: this.fakeHistory
        },
        {
            appId: "123456",
            name: "Custom Solution D",
            version: 4,
            creationDate: new Date("2018-05-05"),
            lastUpdateDate: new Date(),
            description:
                "my pizza. item description could be here and truncate after 2 lines or so with ...",
            workspaces: [
                this.fakeWorkspace,
                this.fakeWorkspace,
                this.fakeWorkspace
            ],
            history: this.fakeHistory
        },
        {
            appId: "123456",
            name: "Custom Solution E",
            version: 4,
            creationDate: new Date("2018-05-05"),
            lastUpdateDate: new Date(),
            description:
                "my roasted pig. item description could be here and truncate after 2 lines or so with ...",
            workspaces: [
                this.fakeWorkspace,
                this.fakeWorkspace,
                this.fakeWorkspace
            ],
            history: this.fakeHistory
        },
        {
            appId: "123456",
            name: "Custom Solution F",
            imageUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSCSkRHFDAxTdecz0FQa2qZWiu4PUogHowScKVMvIFmoWanolsHg",
            version: 4,
            creationDate: new Date("2018-05-05"),
            lastUpdateDate: new Date(),
            description:
                "my description. item description could be here and truncate after 2 lines or so with ...",
            workspaces: [
                this.fakeWorkspace,
                this.fakeWorkspace,
                this.fakeWorkspace
            ],
            history: this.fakeHistory
        }
    ];

    // fakeEnvironment = {
    //     organization: this.fakeOrganization1,
    //     solution: this.fakeSolution,
    //     client: this.fakeClients[0]
    // serviceProviders: [
    //     {'fake service provider'}
    // ]
    // }
}
