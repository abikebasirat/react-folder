const apiRequest = async (url ='', optionsObj = null, errMag =null) => {
    try{
        const response = await fetch(url, optionsObj);
        if(!response.ok) throw Error('Please reload the app')
    }catch(err){
errMag = err.message;
} finally {
    return errMag;
}
};

export default apiRequest