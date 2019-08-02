import { environment } from 'src/environments/environment.prod';
import { ISolutionViewModel } from "./fake-data.service";
import { Injectable } from "@angular/core";

export interface IPodioApplicationViewModel {
    appName: string;
    appId: number;
    podioApplication: any;
    fields: Array<string>;
}

export interface IPodioSpaceViewModel {
    workspaceName: string;
    workspaceId: number;
    description: string;
    checked: boolean;
    podioSpace: any;
    apps: Array<IPodioApplicationViewModel>;
}

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

export interface ISolutionInstanceViewModel {
    name: string;
    id: string;
    description?: string;
    solution: ISolutionViewModel;
    solutionVersionNumber: string;
    solutionVersionName: string;
    client: any;
    lastAction: string;
    // patch diff not prop of instance. it is calculated
    // from instance info and patch version info
}

export interface IPodioOrganizationViewModel {
    name: string;
    owner: string;
    isTemplate?: boolean;
    orgId?: number;
    spaces: Array<IPodioSpaceViewModel>;
    instances?: Array<ISolutionInstanceViewModel>;
}

export interface IClientViewModel {
    id: string;
    identifier: string;
    contact: string;
    company?: string;
    email?: string;
    environments;
    notes?: string;
}

  export interface ISolutionActionViewModel {
      datetime: any;
      action: string;
      instance: string;
      versionNumFrom?: any;
      versionNumTo: string;
      versionNameFrom?: any;
      versionNameTo: string;
      notes?: string;
      status: string;
  }
  



// so we can inject this service
@Injectable({
    providedIn: "root"
})
export class FakeDataService {
    fakeApplication: IPodioApplicationViewModel = {
        appId: 123,
        appName: "Time Center",
        podioApplication: {
            appId: 123,
            appName: "Time Center",
            podioApplication: "cant recurse here",
            fields: ["foo", "bar"]
        },
        fields: ["foo", "bar"]
    };

    fakeWorkspace: IPodioSpaceViewModel = {
        workspaceName: "Workspace 1",
        workspaceId: 123,
        apps: [
            this.fakeApplication,
            this.fakeApplication,
            this.fakeApplication,
            this.fakeApplication
        ],
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

    /** helper to get fake dates in the near past or future */
    createDateFromOffset(offset) {
        var d = new Date();
        d.setDate(d.getDate() + offset);
        return d;
    }

    fakeSolutionActions: ISolutionActionViewModel[] = [

        {
            datetime: this.createDateFromOffset(4),
            action: "Patch",
            instance: "XYZC",
            versionNumFrom: "0.0",
            versionNumTo: "1.0",
            versionNameFrom: null,
            versionNameTo: "Some Name",
            notes: "Bring Brick Bridge and XYZ up to 1.0",
            status: "scheduled"
        },
        {
            datetime: this.createDateFromOffset(2),
            action: "Update",
            instance: null,
            versionNumFrom: "0.0",
            versionNumTo: "1.0",
            versionNameFrom: null,
            versionNameTo: "Some Name",
            notes: "Lorem ipsum and some more notes ...",
            status: "in progress"
        },
        {
            datetime: this.createDateFromOffset(-1),
            action: "Update",
            instance: null,
            versionNumFrom: "0.0",
            versionNumTo: "1.0",
            versionNameFrom: null,
            versionNameTo: "Some Name",
            notes: "Lorem ipsum and some more notes ...",
            status: "error"
        },
        {
            datetime: this.createDateFromOffset(-200),
            action: "Patch",
            instance: "BBCO",
            versionNumFrom: "0.0",
            versionNumTo: "1.0",
            versionNameFrom: null,
            versionNameTo: "Some Name",
            notes: "Bring Brick Bridge and XYZ up to 1.0",
            status: "success"
        },
        {
            datetime: this.createDateFromOffset(-300),
            action: "Update",
            instance: null,
            versionNumFrom: "0.0",
            versionNumTo: "1.0",
            versionNameFrom: null,
            versionNameTo: "Some Name",
            notes: "Lorem ipsum and some more notes ...",
            status: "success"
        },
        {
            datetime: this.createDateFromOffset(-350),
            action: "Deploy",
            instance: "INST",
            versionNumFrom: null,
            versionNumTo: "0.0",
            versionNameFrom: null,
            versionNameTo: null,
            notes: "Lorem ipsum and some more notes ...",
            status: "success"
        },
        {
            datetime: this.createDateFromOffset(-400),
            action: "Create",
            instance: null,
            versionNumFrom: null,
            versionNumTo: "0.0",
            versionNameFrom: null,
            versionNameTo: null,
            notes: "Lorem ipsum and some more notes ...",
            status: "success"
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
        history: this.fakeSolutionActions
    };

    fakeSolutions: Array<ISolutionViewModel> = [
        {
            appId: "123456",
            name: "Custom Solution A",
            imageUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSCSkRHFDAxTdecz0FQa2qZWiu4PUogHowScKVMvIFmoWanolsHg",
            version: 1,
            creationDate: new Date("2013-03-01T01:10:00"),
            lastUpdateDate: new Date(),
            description:
                "my lollipop. item description could be here and truncate after 2 lines or so with ...",
            workspaces: [
                this.fakeWorkspace,
                this.fakeWorkspace,
                this.fakeWorkspace
            ],
            history: this.fakeSolutionActions
        },
        {
            appId: "123456",
            name: "Custom Solution B",
            imageUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSCSkRHFDAxTdecz0FQa2qZWiu4PUogHowScKVMvIFmoWanolsHg",
            version: 2,
            creationDate: new Date("2013-03-01T01:10:00"),
            lastUpdateDate: new Date(),
            description:
                "my ice cream. item description could be here and truncate after 2 lines or so with ...",
            workspaces: [
                this.fakeWorkspace,
                this.fakeWorkspace,
                this.fakeWorkspace
            ],
            history: this.fakeSolutionActions
        },
        {
            appId: "123456",
            name: "Custom Solution C",
            imageUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSCSkRHFDAxTdecz0FQa2qZWiu4PUogHowScKVMvIFmoWanolsHg",
            version: 1,
            creationDate: new Date("2013-03-01T01:10:00"),
            lastUpdateDate: new Date(),
            description:
                "my burger. item description could be here and truncate after 2 lines or so with ...",
            workspaces: [
                this.fakeWorkspace,
                this.fakeWorkspace,
                this.fakeWorkspace
            ],
            history: this.fakeSolutionActions
        },
        {
            appId: "123456",
            name: "Custom Solution D",
            version: 4,
            creationDate: new Date("2013-03-01T01:10:00"),
            lastUpdateDate: new Date(),
            description:
                "my pizza. item description could be here and truncate after 2 lines or so with ...",
            workspaces: [
                this.fakeWorkspace,
                this.fakeWorkspace,
                this.fakeWorkspace
            ],
            history: this.fakeSolutionActions
        },
        {
            appId: "123456",
            name: "Custom Solution E",
            version: 4,
            creationDate: new Date("2013-03-01T01:10:00"),
            lastUpdateDate: new Date(),
            description:
                "my roasted pig. item description could be here and truncate after 2 lines or so with ...",
            workspaces: [
                this.fakeWorkspace,
                this.fakeWorkspace,
                this.fakeWorkspace
            ],
            history: this.fakeSolutionActions
        },
        {
            appId: "123456",
            name: "Custom Solution F",
            imageUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSCSkRHFDAxTdecz0FQa2qZWiu4PUogHowScKVMvIFmoWanolsHg",
            version: 4,
            creationDate: new Date("2013-03-01T01:10:00"),
            lastUpdateDate: new Date(),
            description:
                "my description. item description could be here and truncate after 2 lines or so with ...",
            workspaces: [
                this.fakeWorkspace,
                this.fakeWorkspace,
                this.fakeWorkspace
            ],
            history: this.fakeSolutionActions
        }
    ];

    fakeInstance1: ISolutionInstanceViewModel = {
        name: "HCCL",
        id: "123",
        description: "This is an optional description of the instance.",
        solution: this.fakeSolutions[0],
        solutionVersionNumber: "1.0",
        solutionVersionName: "Sierra",
        client: "XYZ Real Estate",
        lastAction: "04/01/19 (Deploy)"
    };

    fakeInstance2: ISolutionInstanceViewModel = {
        name: "SFC1",
        id: "234",
        description: "This is an optional description of the instance.",
        solution: this.fakeSolutions[0],
        solutionVersionNumber: "1.1",
        solutionVersionName: "Sierra",
        client: "ABC Construction",
        lastAction: "04/01/19 (Patch)"
    };
    fakeInstance3: ISolutionInstanceViewModel = {
        name: "SFC1",
        id: "567",
        description: "This is an optional description of the instance.",
        solution: this.fakeSolutions[0],
        solutionVersionNumber: "0.0",
        solutionVersionName: "Nevada",
        client: "DEFG Coffee",
        lastAction: "04/01/19 (Deploy)"
    };
    fakeInstance4: ISolutionInstanceViewModel = {
        name: "SFC1",
        id: "891",
        description: "This is an optional description of the instance.",
        solution: this.fakeSolutions[0],
        solutionVersionNumber: "3.0",
        solutionVersionName: "California",
        client: "HIJK Catering",
        lastAction: "04/01/19 (Patch)"
    };

    fakeInstances: ISolutionInstanceViewModel[] = [
        this.fakeInstance1,
        this.fakeInstance2,
        this.fakeInstance3,
        this.fakeInstance4
    ];

    fakeOrganization1: IPodioOrganizationViewModel = {
        name: "Fake Org1",
        orgId: 1,
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
        instances: [this.fakeInstance1, this.fakeInstance2]
    };
    fakeOrganization2: IPodioOrganizationViewModel = {
        name: "Fake Org2",
        orgId: 2,
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
        instances: [this.fakeInstance1, this.fakeInstance2]
    };
    fakeOrganization3: IPodioOrganizationViewModel = {
        name: "Fake Org3",
        orgId: 3,
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
        instances: [this.fakeInstance1, this.fakeInstance2]
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
            identifier: "XYZR",
            id: "1",
            email: "pam@gmail.com",
            notes:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            environments: [this.fakeOrganization1, this.fakeOrganization2]
        },
        {
            company: "Random Consulting",
            contact: "Dan Jones",
            identifier: "RAND",
            id: "2",
            email: "dan@gmail.com",
            notes:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            environments: [this.fakeOrganization1, this.fakeOrganization2]
        },
        {
            company: "ABC Real Estate",
            contact: "Jan Weller",
            identifier: "ABCR",
            id: "3",
            email: "jan@gmail.com",
            notes:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            environments: [this.fakeOrganization1, this.fakeOrganization2]
        }
    ];
} // end class fakeDataService
