export interface application {
    id: number;
    callbackUris: string[];
    name: string;
    description: string;
    creatorId: number;
    createdAt: Date;
    clientSecret:string;
}