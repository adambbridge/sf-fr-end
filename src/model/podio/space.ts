export class Spaces {
}

export class Space {
    public org_id: string;
    public space_id: string;
    public name: string;
    public rights: string[];
    public role: string;
    public type: string;
    public url: string;
    public url_label: string;
    public privacy: string;
    public premium: boolean;
    public post_on_new_app: boolean;
    public post_on_new_member: boolean;
    public auto_join: boolean;
    public created_on: string;
    public description: string;
    public is_overdue: boolean;
    public created_by: any;
    public owner: Owner;
}

export class Owner {
    public id: string;
    public type: string;
}
