const Spotify = () => {
    const CLIENT_ID = "7a265c0bbe754e729559a65bd40f86bf"
    const REDIRECT_URI = "https://localhost:3000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"
    console.log(`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`)
    return ( 
        <>
        <div className="flex items-center text-zinc-200 md:text-slate-800'">

            <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
            Login
        </a>


        </div>

        </>
     );
}
 
export default Spotify;