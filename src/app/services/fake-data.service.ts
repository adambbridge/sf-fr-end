import { IAuthenticatedSfUser } from "./fake-data.service";
import { environment } from "src/environments/environment.prod";
import { Injectable } from "@angular/core";

/** IPodioApplicationViewModel
 * we aren't currently showing the fields in the UI. mabye in the future we will be though... */
export interface IPodioApplicationViewModel {
    appName: string;
    appId: number;
    podioApplication: any;
    fields: Array<string>;
}

/** IPodioSpaceViewModel
 * currently the UI just shows names of spaces and their apps
 * within the context of an organization ie at /podio/id, in the update task form etc.
 * */
export interface IPodioSpaceViewModel {
    workspaceName: string;
    workspaceId: number;
    description: string;
    checked: boolean;
    podioSpace: any;
    apps: Array<IPodioApplicationViewModel>;
    selected?: boolean; // add in UI for checkbox selection
}

export interface ISolutionViewModel {
    appId?: string; // is this the unique ID for a solution?
    name: string;
    imageUrl?: string; // users will in the future be able to optionally upload an image to use for their solution icon
    description?: string; // users can enter one if they want
    lastTaskDate?: Date; // if no other tasks this is simple the creation date
    workspaces: Array<IPodioSpaceViewModel>; // only need names of spaces at /solutions/ (strings). Whne you get to /solution/id (detail) we display the space name and names of it's apps
    history: ISolutionTaskViewModel[]; // /solutions/ only needs date of last task performed. /solution/id (detail) needs all tasks including their details in order to show task queue and history
    versionNumber: string | number;
    versionName: string;
    // /solutions/ shows info for latest version. /solution/id shows info for allversions of the solution. when you view the workspaces you can select which version you want to view spaces for. deployed instances, history etc show tasks and instances for all versions. each vesion is, i think, a separate solution behind the scenes so maybe we need to fetch all of them...?
    creationDate?: Date;
}

/**
 * ISolutionInstanceViewModel
 * WHERE: currently show instances list in new-patch, podio-org-detail and solution
 * WHAT: currently show columns name, v num, v name, client, last action (date and type),
 * (i want to show also the solution name and have the solution id available
 * so you can click thru to the solution detail at solutions/id)
 * NOTE: patch diff is not prop of instance.
 * it is calculated by comparing spaces details of instance sol. v
 * with spaces details of patch sol. v
 */

export interface IAuthenticatedSfUser {
    id: string;
    name: string;
    email: string;
}

export interface ISolutionInstanceViewModel {
    id: string;
    description?: string;
    solution: ISolutionViewModel;
    solutionVersionNumber: string;
    solutionVersionName: string;
    client: any;
    lastTask: ISolutionTaskViewModel;
}

export interface IPodioAccountViewModel {
    id: string;
    name: string;
    owner: string;
    email: string;
    orgs?: IPodioOrganizationViewModel[];
}

export interface IPodioOrganizationViewModel {
    name: string;
    owner: string;
    orgId?: number;
    spaces: Array<IPodioSpaceViewModel>;
    instances?: Array<ISolutionInstanceViewModel>;
}

export interface IClientViewModel {
    id: string;
    identifier: string; // is this name?
    contact: string;
    company?: string;
    email: string;
    accounts?: IPodioAccountViewModel[];
    instances?: ISolutionInstanceViewModel[];
    notes?: string;
}

export interface INewClientFormSubmission {
    contact: string;
    company?: string;
    email: string;
    orgs?: IPodioOrganizationViewModel[];
    notes?: string;
}

export interface ISolutionTaskViewModel {
    // NEW date properties instaead of just "datetime":
    scheduledFor: Date;
    startedAt: Date;
    completedAt: Date;
    faultedAt: Date;

    solution: string;
    task: string;
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
    fakeAuthenticatedSfUser: IAuthenticatedSfUser = {
        id: "1234",
        name: "Adam Wilson",
        email: "adam@brickbridgeconsulting.com"
    };

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

    fakeWorkspace1: IPodioSpaceViewModel = {
        workspaceName: "Human Resources",
        workspaceId: 1,
        apps: [
            this.fakeApplication,
            this.fakeApplication,
            this.fakeApplication,
            this.fakeApplication
        ],
        description:
            "This is a workspace description. Not sure how long these might be. May need to truncate",
        checked: false, // solely for purpose of user selection when creating a solution
        podioSpace: "foo"
    };

    fakeWorkspace2: IPodioSpaceViewModel = {
        workspaceName: "Ticketing",
        workspaceId: 2,
        apps: [
            this.fakeApplication,
            this.fakeApplication,
            this.fakeApplication,
            this.fakeApplication
        ],
        description:
            "This is a workspace description. Not sure how long these might be. May need to truncate",
        checked: false, // solely for purpose of user selection when creating a solution
        podioSpace: "foo"
    };

    fakeWorkspace3: IPodioSpaceViewModel = {
        workspaceName: "Calendar",
        workspaceId: 3,
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

    fakeWorkspaces: IPodioSpaceViewModel[] = [
        this.fakeWorkspace1,
        this.fakeWorkspace2,
        this.fakeWorkspace3
    ];

    /** helper to get fake dates in the near past or future */
    createDateFromOffset(offset) {
        var d = new Date();
        d.setDate(d.getDate() + offset);
        return d;
    }

    fakeSolutionTasks: ISolutionTaskViewModel[] = [
        {
            scheduledFor: this.createDateFromOffset(4),
            startedAt: null,
            completedAt: null,
            faultedAt: null,
            solution: "Fastbooks",
            task: "Patch",
            instance: "XYZC",
            versionNumFrom: "0.0",
            versionNumTo: "1.0",
            versionNameFrom: null,
            versionNameTo: "Some Name",
            notes: "Bring Brick Bridge and XYZ up to 1.0",
            status: "scheduled"
        },
        {
            scheduledFor: this.createDateFromOffset(2),
            startedAt: this.createDateFromOffset(2),
            completedAt: null,
            faultedAt: null,
            solution: "Fastbooks",
            task: "Update",
            instance: null,
            versionNumFrom: "0.0",
            versionNumTo: "1.0",
            versionNameFrom: null,
            versionNameTo: "Some Name",
            notes: "Lorem ipsum and some more notes ...",
            status: "in progress"
        },
        {
            scheduledFor: this.createDateFromOffset(-1),
            startedAt: this.createDateFromOffset(-1),
            completedAt: null,
            faultedAt: this.createDateFromOffset(-1),
            solution: "Fastbooks",

            task: "Update",
            instance: null,
            versionNumFrom: "0.0",
            versionNumTo: "1.0",
            versionNameFrom: null,
            versionNameTo: "Some Name",
            notes: "Lorem ipsum and some more notes ...",
            status: "error"
        },
        {
            scheduledFor: this.createDateFromOffset(-200),
            startedAt: this.createDateFromOffset(-200),
            completedAt: this.createDateFromOffset(-200),
            faultedAt: null,
            solution: "Fastbooks",

            task: "Patch",
            instance: "BBCO",
            versionNumFrom: "0.0",
            versionNumTo: "1.0",
            versionNameFrom: null,
            versionNameTo: "Some Name",
            notes: "Bring Brick Bridge and XYZ up to 1.0",
            status: "success"
        },
        {
            scheduledFor: this.createDateFromOffset(-300),
            startedAt: this.createDateFromOffset(-300),
            completedAt: this.createDateFromOffset(-300),
            faultedAt: null,
            solution: "Fastbooks",

            task: "Update",
            instance: null,
            versionNumFrom: "0.0",
            versionNumTo: "1.0",
            versionNameFrom: null,
            versionNameTo: "Some Name",
            notes: "Lorem ipsum and some more notes ...",
            status: "success"
        },
        {
            scheduledFor: this.createDateFromOffset(-350),
            startedAt: this.createDateFromOffset(-350),
            completedAt: this.createDateFromOffset(-350),
            faultedAt: null,
            solution: "Fastbooks",

            task: "Deploy",
            instance: "INST",
            versionNumFrom: null,
            versionNumTo: "0.0",
            versionNameFrom: null,
            versionNameTo: null,
            notes: "Lorem ipsum and some more notes ...",
            status: "success"
        },
        {
            scheduledFor: this.createDateFromOffset(-400),
            startedAt: this.createDateFromOffset(-400),
            completedAt: this.createDateFromOffset(-400),
            faultedAt: null,
            solution: "Fastbooks",

            task: "Create",
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
        name: "FastBooks",
        versionNumber: "1.0",
        versionName: "Sierra",
        workspaces: [
            this.fakeWorkspace1,
            this.fakeWorkspace2,
            this.fakeWorkspace3,
            this.fakeWorkspace1,
            this.fakeWorkspace2,
            this.fakeWorkspace3,
            this.fakeWorkspace1,
            this.fakeWorkspace2,
            this.fakeWorkspace3
        ],
        history: this.fakeSolutionTasks
    };

    fakeSolutions: Array<ISolutionViewModel> = [
        // {
        //     appId: "123456",
        //     name: "Jira Dreams of Sushi",
        //     imageUrl:
        //         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSCSkRHFDAxTdecz0FQa2qZWiu4PUogHowScKVMvIFmoWanolsHg",
        //     versionNumber: "1.0",
        //     versionName: "Sierra",
        //     creationDate: new Date("2013-03-01T01:10:00"),
        //     lastTaskDate: new Date(),
        //     description:
        //         "my lollipop. item description could be here and truncate after 2 lines or so with ...",
        //     workspaces: [
        //         this.fakeWorkspace1,
        //         this.fakeWorkspace2,
        //         this.fakeWorkspace3
        //     ],
        //     history: this.fakeSolutionTasks
        // },
        {
            appId: "Jello",
            name: "Fastbooks",
            imageUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSCSkRHFDAxTdecz0FQa2qZWiu4PUogHowScKVMvIFmoWanolsHg",
            versionNumber: "1.0",
            versionName: "Nissan",
            creationDate: new Date("2013-03-01T01:10:00"),
            lastTaskDate: new Date(),
            description: "Customized accounting software",
            workspaces: [
                this.fakeWorkspace1,
                this.fakeWorkspace2,
                this.fakeWorkspace3
            ],
            history: this.fakeSolutionTasks
        },
        {
            appId: "123456",
            name: "Salesfork",
            imageUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSCSkRHFDAxTdecz0FQa2qZWiu4PUogHowScKVMvIFmoWanolsHg",
            versionNumber: "2.0",
            versionName: "Whitney",
            creationDate: new Date("2013-03-01T01:10:00"),
            lastTaskDate: new Date(),
            description: "CRM software tailored to your industry",
            workspaces: [
                this.fakeWorkspace1,
                this.fakeWorkspace2,
                this.fakeWorkspace3
            ],
            history: this.fakeSolutionTasks
        },
        {
            appId: "123456",
            name: "Legal Broom",
            versionNumber: "4.0",
            versionName: "Yellowstone",
            creationDate: new Date("2013-03-01T01:10:00"),
            lastTaskDate: new Date(),
            description: "Customized legal software.",
            workspaces: [
                this.fakeWorkspace1,
                this.fakeWorkspace2,
                this.fakeWorkspace3,
                this.fakeWorkspace1,
                this.fakeWorkspace2,
                this.fakeWorkspace3
            ],
            history: this.fakeSolutionTasks
        }
    ];

    fakeInstance1: ISolutionInstanceViewModel = {
        id: "123",
        description: "This is an optional description of the instance.",
        solution: this.fakeSolutions[0],
        solutionVersionNumber: "1.0",
        solutionVersionName: "Sierra",
        client: "XYZ Real Estate",
        lastTask: this.fakeSolutionTasks[0]
    };

    fakeInstance2: ISolutionInstanceViewModel = {
        id: "234",
        description: "This is an optional description of the instance.",
        solution: this.fakeSolutions[0],
        solutionVersionNumber: "1.1",
        solutionVersionName: "Sierra",
        client: "ABC Construction",
        lastTask: this.fakeSolutionTasks[1]
    };
    fakeInstance3: ISolutionInstanceViewModel = {
        id: "567",
        description: "This is an optional description of the instance.",
        solution: this.fakeSolutions[0],
        solutionVersionNumber: "0.0",
        solutionVersionName: "Nevada",
        client: "DEFG Coffee",
        lastTask: this.fakeSolutionTasks[2]
    };
    fakeInstance4: ISolutionInstanceViewModel = {
        id: "891",
        description: "This is an optional description of the instance.",
        solution: this.fakeSolutions[0],
        solutionVersionNumber: "3.0",
        solutionVersionName: "California",
        client: "HIJK Catering",
        lastTask: this.fakeSolutionTasks[3]
    };

    fakeInstances: ISolutionInstanceViewModel[] = [
        this.fakeInstance1,
        this.fakeInstance2,
        this.fakeInstance3,
        this.fakeInstance4,
        this.fakeInstance1,
        this.fakeInstance2,
        this.fakeInstance3,
        this.fakeInstance4,
        this.fakeInstance1,
        this.fakeInstance2,
        this.fakeInstance3,
        this.fakeInstance4
    ];

    fakeOrganization1: IPodioOrganizationViewModel = {
        name: "Brick Bridge Consulting",
        orgId: 1,
        owner: "Brick Bridge Consulting",
        spaces: [
            this.fakeWorkspace1,
            this.fakeWorkspace2,
            this.fakeWorkspace3,
            this.fakeWorkspace1,
            this.fakeWorkspace2,
            this.fakeWorkspace3
        ],
        instances: [this.fakeInstance1, this.fakeInstance2]
    };
    fakeOrganization2: IPodioOrganizationViewModel = {
        name: "Zoller Swanson Accounting",
        orgId: 2,
        owner: "Zoller Swanson",
        spaces: [
            this.fakeWorkspace1,
            this.fakeWorkspace2,
            this.fakeWorkspace3,
            this.fakeWorkspace2,
            this.fakeWorkspace3
        ],
        instances: [this.fakeInstance1, this.fakeInstance2]
    };
    fakeOrganization3: IPodioOrganizationViewModel = {
        name: "First United Church",
        orgId: 3,
        owner: "First United Church",
        spaces: [this.fakeWorkspace2, this.fakeWorkspace3],
        instances: [this.fakeInstance1, this.fakeInstance2]
    };

    fakeOrganizations: Array<IPodioOrganizationViewModel> = [
        this.fakeOrganization1,
        this.fakeOrganization2,
        this.fakeOrganization3
    ];

    fakeOrganizations2: Array<IPodioOrganizationViewModel> = [
        this.fakeOrganization2,
        this.fakeOrganization3
    ];

    fakeOrganizations3: Array<IPodioOrganizationViewModel> = [
        this.fakeOrganization1
    ];

    fakeOrganizationsLong: Array<IPodioOrganizationViewModel> = [
        this.fakeOrganization1,
        this.fakeOrganization2,
        this.fakeOrganization3,
        this.fakeOrganization1,
        this.fakeOrganization2,
        this.fakeOrganization3,
        this.fakeOrganization1,
        this.fakeOrganization2,
        this.fakeOrganization3,
        this.fakeOrganization1,
        this.fakeOrganization2,
        this.fakeOrganization3,
        this.fakeOrganization1,
        this.fakeOrganization2,
        this.fakeOrganization3,
        this.fakeOrganization1,
        this.fakeOrganization2,
        this.fakeOrganization3
    ];

    fakeAccounts: Array<IPodioAccountViewModel> = [
        {
            id: "123",
            name: "Gil Roberts",
            owner: "Gil Roberts",
            email: "gil@brickbridgeconsulting.com",
            orgs: this.fakeOrganizations3
        },
        {
            id: "456",
            name: "Jordan",
            owner: "Jordan",
            email: "jordan@someCompany.com",
            orgs: this.fakeOrganizations2
        }
    ];

    fakeClients: Array<IClientViewModel> = [
        {
            company: "Brick Bridge Consulting",
            contact: "Gil Roberts",
            identifier: "XYZR",
            id: "1",
            email: "gil@bbc.com",
            notes:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            accounts: [this.fakeAccounts[0]]
        },
        {
            company: "Jordan's Company",
            contact: "Jordan",
            identifier: "RAND",
            id: "2",
            email: "jordan@gmail.com",
            notes:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            accounts: [this.fakeAccounts[1]]
        },
        {
            company: "Jefferson Co. Public Schools",
            contact: "The Superintendent",
            identifier: "ABCR",
            id: "3",
            email: "super@jcps.com",
            notes:
                "  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            accounts: null
        }
    ];

    newClient(clientInfo) {
        // pretend to get new item back from api with props added
        let savedClient = clientInfo;
        savedClient.id = "foo";
        savedClient.identifier = "bar";

        this.fakeClients.unshift(savedClient);
        return savedClient;
    }

    /** finds client by id and updates any props that changed */
    updateClient(newInfo) {
        var index = this.fakeClients.findIndex(
            (client) => client.id == newInfo.id
        );
        Object.assign(this.fakeClients[index], newInfo);
        console.log(this.fakeClients);
    }

    newSolution(solutionInfo) {
        // pretend to get new item back from api with props added
        let savedSol = solutionInfo;
        savedSol.appId = "foo";
        savedSol.identifier = "bar";
        savedSol.workspaces = [
            this.fakeWorkspace2,
            this.fakeWorkspace3,
            this.fakeWorkspace1
        ];
        savedSol.versionNumber = "0.0";
        savedSol.creationDate = new Date();

        this.fakeSolutions.unshift(savedSol);
        return this.fakeSolutions;
    }
} // end class fakeDataService
