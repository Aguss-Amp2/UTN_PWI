export const verifyLuckyMiddleware = (req, res, next) => {
    const random_number = Math.random()
    if(random_number > 0.5){
        //Tiene Suerte
        next()
    }
    else{
        //N oTiene Suerte
        res.json({
            message: 'No vayas a la quiniela'
        })
    }
}