const Message =require("./model");

exports.getMessage = async (req , res , next) => {
    try {
        const message = await Message.create(req.body);

        res.status(200).json({
            success: true,
            message: message
        })
    }

    catch(err){
        res.status(200).json({
            success: false,
            error: err,
        })
    }
    
   
}