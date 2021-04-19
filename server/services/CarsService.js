import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors"

class CarsService {
    async getAll(query = {}) {
        return await dbContext.Cars.find(query)
    }

    async getById(id) {
        let data = await dbContext.Cars.findOne({ _id: id })
        if (!data) {
            throw new BadRequest("Gremlins are about")
        }
        return data
    }
    async create(body) {
        return await dbContext.Cars.create(body)
    }
    async edit(body) {
        let data = await dbContext.Cars.findOneAndLUpdate({ _id: body.id }, body, { new: true })
        if (!data) {
            throw new BadRequest("Gremlins are about")
        }
        return data
    }
    async delete(id) {
        let data = await dbContext.Cars.findOneAndDelete({ _id: id })
        if (!data) {
            throw new BadRequest("Gremlins are about")
        }
        return data
    }
}
export const carsService = new CarsService();
