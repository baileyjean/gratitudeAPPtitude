const Action = require('../models/action');

const createAction = async (req, res) => {
    try {
        const action = await new Action(req.body)
        await action.save()
        return res.status(201).json({
            action,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAllActions = async (req, res) => {
    try {
        const actions = await Action.find()
        return res.status(200).json({ actions })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getActionById = async(req,res) => {
    try {
        const {id} = req.params;
        const action = await Action.findById(id)

        if(action){
            return res.status(200).json({action});
        }
        return res.status(404).send(`Action with the specified ID does not exist`)
    } catch(error){
        return res.status(500).send(error.message)
    }
}

const updateAction = async (req, res) => {
    try {
        const { id } = req.params;
        await Action.findByIdAndUpdate(id, req.body, { new: true }, (err, action) => {
            if (err) {
                res.status(500).send(err);
            }
            if (!action) {
                res.status(500).send('Action not found!');
            }
            return res.status(200).json(action);
        })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteAction = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Action.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Action deleted");
        }
        throw new Error("Action not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    createAction,
    getAllActions,
    getActionById,
    updateAction,
    deleteAction
}