import BaseController from "../utils/BaseController";
import { housesService } from "../services/HousesService";

export class HousesController extends BaseController {
    constructor() {
        super("api/houses");
        this.router
            .get("/", this.getAll)
            .get("/:id", this.getById)
            .post("", this.create)
            .put("/:id", this.edit)
            .delete("/:id", this.delete)
    }

    /**
     * Sends found values to a client by request
     * @param {import("express").Request} req 
     * @param {import("express").Response} res 
     * @param {import("express").NextFunction} next 
     */
    async getAll(req, res, next) {
        try {
            let data = await housesService.getAll(req.query)
            return res.send(data);
        } catch (error) {
            next(error);
        }
    }

    async getById(req, res, next) {
        try {
            let data = await housesService.getById(req.params.id)
            return res.send(data)
        } catch (error) {
            next(error)
        }
    }

    /**
     * Creates a value from request body and returns it
     * @param {import("express").Request} req 
     * @param {import("express").Response} res 
     * @param {import("express").NextFunction} next 
     */
    async create(req, res, next) {
        try {
            let data = await housesService.create(req.body)
            return res.send(data);
        } catch (error) {
            next(error);
        }
    }

    async edit(req, res, next) {
        try {
            req.body.id = req.params.id
            let data = await housesService.edit(req.body)
            return res.send(data)
        } catch (error) {
            next(error)
        }
    }

    async delete(req, res, next) {
        try {
            let data = await housesService.delete(req.params.id)
            return res.send(data)
        } catch (error) {
            next(error)
        }
    }
}