export interface Application {
    id: number;
    callbackUris: string[];
    name: string;
    description: string;
    creatorId: number;
    createdAt: Date;
    clientSecret:string;
}