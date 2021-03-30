import {v4 as uuidv4} from "uuid";
import connection from "../db/connection";
import Status from "../db/models/status";

const statusRepository = connection.getRepository(Status);

export async function addStatus(statusName: string) {
    const id = uuidv4();
    return statusRepository.create({ id, name: statusName });
}

export async function updateStatus(newName: string, id: string) {
    return statusRepository.update({ name: newName }, { where: { id } })
}

export async function deleteStatus(id: string) {
    return statusRepository.destroy({ where: {id} });
}