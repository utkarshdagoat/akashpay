import { Service } from "typedi";
import { PrismaClient } from "@prisma/client";
import { Application } from "@/interfaces/dashboard.interface";
import { CreateAndUpdateApplicationDto } from "@/dtos/dashboard.dto";
import { randomBytes } from "crypto";
import { HttpException } from "@/exceptions/HttpException";

@Service()
export class DashboardService {
    public app = new PrismaClient().application;

    public async getApplications(userId: number): Promise<Application[]> {
        const application: Application[] = await this.app.findMany({
            where: {
                creatorId: userId
            }
        })
        return application;
    }

    public async createApplication(data: CreateAndUpdateApplicationDto, userId: number) {
        const findApplication: Application = await this.app.findFirst({
            where:{
                name: data.name,
                creatorId: userId
            }
        });
        if (findApplication) throw new HttpException(409, `This application ${data.name} already exists`);
        const clientSecret = randomBytes(32).toString("hex");
        const createApplication: Application = await this.app.create({
            data: {
                ...data,
                creatorId: userId,
                clientSecret
            }
        })
        return createApplication
    }

    public async updateApplication(data:CreateAndUpdateApplicationDto , id:number){
        const application: Application = await this.app.findUnique({
            where:{
                id
            }
        })
        if (!application) throw new HttpException(400, "Application doesn't exist");
        const updateApplication: Application = await this.app.update({
            where:{
                id
            },
            data:{
                ...data
            }
        })
        return updateApplication
    }

    public async deleteApplication(id:number) {
        const application: Application = await this.app.findUnique({
            where:{
                id
            }
        })
        if (!application) throw new HttpException(400, "Application doesn't exist");
        const deletedApplicationData: Application = await this.app.delete({
            where:{
                id
            }
        })
        return deletedApplicationData
    }

    public async deleteAll(){
        const deletedApplicationsData = await this.app.deleteMany();
        return deletedApplicationsData
    }
}