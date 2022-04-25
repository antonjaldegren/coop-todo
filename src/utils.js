import {v4 as uuidv4} from "uuid";

/**
 * @param {String} text  the task description
 * @return {{id: String, timestamp: Number, completed: Boolean, text: String}}
 */
function createTask(text) {
    return {
        id: uuidv4(),
        timestamp: Date.now(),
        completed: false,
        text
    }
}

export {createTask};