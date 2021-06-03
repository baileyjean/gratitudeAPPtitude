const { Action, Comment, Emotion } = require('../models/index');

const createAction = async (req, res) => {
    try {
        const action = await new Action({...req.body, emotionRef: req.params.emotionID})
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

const getActionByEmotionRef = async(req,res) => {
    try {
        const {emotionRef} = req.params;
        const action = await Action.find( {emotionRef: {$eq: emotionRef}})

        if(action){
            return res.status(200).json({action});
        }
        return res.status(404).send(`Action with the specified emotionRef does not exist`)
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

const getAllComments = async (req, res) => {
    try {
        const comments = await Comment.find()
        return res.status(200).json({ comments })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const submitComment = async (req, res) => {
    try {
        const comment = await new Comment({...req.body})
        await comment.save()
        return res.status(201).json({
            comment,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const deleteComment = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Comment.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Comment deleted");
        }
        throw new Error("Action not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getAllEmotions = async (req, res) => {
    try {
        const emotions = await Emotion.find()
        return res.status(200).json({ emotions })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getEmotionById = async(req,res) => {
    try {
        const {id} = req.params;
        const emotion = await Emotion.findById(id)

        if(emotion){
            return res.status(200).json({emotion});
        }
        return res.status(404).send(`Emotion with the specified ID does not exist`)
    } catch(error){
        return res.status(500).send(error.message)
    }
}

module.exports = {
    createAction,
    getAllActions,
    getActionById,
    getActionByEmotionRef,
    updateAction,
    deleteAction,
    getAllComments,
    submitComment,
    deleteComment,
    getAllEmotions,
    getEmotionById
}