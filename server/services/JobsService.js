import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors"

class JobsService {
    async getAll(query = {}) {
        return await dbContext.Jobs.find(query)
    }

    async getById(id) {
        let data = await dbContext.Jobs.findOne({ _id: id })
        if (!data) {
            throw new BadRequest("Gremlins are about")
        }
        return data
    }
    async create(body) {
        return await dbContext.Jobs.create(body)
    }
    async edit(body) {
        let data = await dbContext.Jobs.findOneAndLUpdate({ _id: body.id }, body, { new: true })
        if (!data) {
            throw new BadRequest("Gremlins are about")
        }
        return data
    }
    async delete(id) {
        let data = await dbContext.Jobs.findOneAndDelete({ _id: id })
        if (!data) {
            throw new BadRequest("Gremlins are about")
        }
        return data
    }
}
export const jobsService = new JobsService();