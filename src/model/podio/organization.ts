import { Space } from './space';

export class Org {
    public contract_status: string;
    public domains: string[];
    public grants_count: Number;
    public image: any;
    public logo: Number;
    public name: string;
    public org_id: Number;
    public premium: boolean;
    public rank: Number;
    public rights: string[];
    public role: string;
    public sales_agent_id: Number;
    public spaces: Space[];
    public status: string;
    public tier: string;
    public type: string;
    public url: string;
    public url_label: string;
    public user_limit: Number;
}
